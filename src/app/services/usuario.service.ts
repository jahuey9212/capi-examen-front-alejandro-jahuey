import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario";
import { global } from "./global";

@Injectable() // decorador para poder injectarla en cualqeuirr componente
export class UsuarioService{
    public url:string;
    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }
    getUsers(): Observable <any>{
        //let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url);
    }
}