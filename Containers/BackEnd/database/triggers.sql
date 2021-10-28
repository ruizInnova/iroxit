CREATE  trigger actualizar_Existencias
  ON Ventas for insert
  AS
  BEGIN
  DECLARE @IDProductos INT, @cantidad INT
  SELECT @IDProductos=IDProductos, @cantidad=CantidadVendida FROM inserted
  UPDATE Productos SET Existencias = Existencias - @cantidad WHERE IDProductos = @IDProductos
  END

-- Consulta de todas los Articulos más vendidos
  SELECT P.IDProductos
        ,P.Titulo
        ,P.PrecioUnitario
        ,P.Existencias
        ,SUM(V.CantidadVendida) AS CantidadVendida
        ,SUM(P.PrecioUnitario*V.CantidadVendida) AS Total_Vendido 
  FROM Ventas V
  INNER JOIN productos P ON P.IDProductos = V.IDProductos
  GROUP BY P.IDProductos
          ,P.Titulo
          ,P.PrecioUnitario
          ,P.Existencias
  ORDER BY CantidadVendida DESC

  -- Consulta Ventas por Fechas

  SELECT P.IDProductos
        ,P.Titulo
        ,P.PrecioUnitario
        ,P.Existencias
        ,cast(V.Fecha as date) AS Fecha
        ,SUM(V.CantidadVendida) AS CantidadVendida
        ,SUM(P.PrecioUnitario*V.CantidadVendida) AS Total_Vendido 
  FROM Ventas V
  INNER JOIN productos P ON P.IDProductos = V.IDProductos
  GROUP BY P.IDProductos
          ,P.Titulo
          ,P.PrecioUnitario
          ,P.Existencias
          ,cast(V.Fecha as date)
          
  ORDER BY Fecha DESC

-- Ventas x Articulo Detalle
 SELECT P.IDProductos
        ,P.Titulo
        ,P.PrecioUnitario
        ,V.CantidadVendida
        ,P.Existencias
        ,SUM(P.PrecioUnitario*V.CantidadVendida) AS Total_Vendido 
        ,V.Fecha
  FROM Ventas V
  INNER JOIN productos P ON P.IDProductos = V.IDProductos
  WHERE P.IDProductos = 5

  GROUP BY P.IDProductos
          ,P.Titulo
          ,P.PrecioUnitario 
          ,V.CantidadVendida
          ,P.Existencias
          ,V.Fecha

  ORDER BY V.Fecha DESC

  -- Total Global de lo Vendido
  SELECT 
        SUM(P.PrecioUnitario*V.CantidadVendida) AS Total_Vendido
  FROM Ventas V
  INNER JOIN productos P ON P.IDProductos = V.IDProductos