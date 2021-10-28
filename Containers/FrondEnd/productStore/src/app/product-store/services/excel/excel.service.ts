import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';
const EXCEL_EXT = '.xlsx';

@Injectable({
  providedIn: 'root'
})

export class ExcelService {

  constructor() { }

  exportToExcel(jsonGlobal:any[], jsonDetalle:any[], jsonTerminar:any[], excelFileName:string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonGlobal);
    const worksheet2: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonDetalle);
    const worksheet3: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonTerminar);
    const workbook: XLSX.WorkBook = { Sheets: {'Ventas_Globales': worksheet, 'Detalle': worksheet2, 'Productos_Por_Terminar': worksheet3}, SheetNames: ['Ventas_Globales', 'Detalle', 'Productos_Por_Terminar'] };
    const excelBuffer: any = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});
    // call method buffer and Filename
    this.saveAsExcel(excelBuffer, excelFileName);
  };

  private saveAsExcel(buffer:any, fileName:string): void {
    const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXT);
  }

}
