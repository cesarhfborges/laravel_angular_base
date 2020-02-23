import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../shared/services/user.service";
import {HttpErrorResponse} from "@angular/common/http";
import * as XLSX from 'xlsx';

@Component({
    selector: 'app-usuario-list',
    templateUrl: './usuario-list.component.html',
    styleUrls: ['./usuario-list.component.scss'],
})
export class UsuarioListComponent implements OnInit {

    usuarios = [];
    page = 1;
    pageSize = 4;

    constructor(private user: UserService) {
    }

    ngOnInit() {
        this.user.listUsers().subscribe(
            (response) => {
                console.log(response.data);
                this.usuarios = response.data;
            },
            (errorResponse: HttpErrorResponse) => {
                if (errorResponse.status === 401) {
                    console.log(errorResponse);
                }
            });
    }

    ExportTOExcel() {
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.usuarios);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, 'ScoreSheet.xlsx');
    }

}
