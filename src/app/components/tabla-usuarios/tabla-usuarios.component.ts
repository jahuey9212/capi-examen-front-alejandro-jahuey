import { Component, OnChanges, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { global } from 'src/app/services/global';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit,OnChanges {

  public users: Array<Usuario>;
  public url:string;
  public page_title:string;

  constructor(private _userService:UsuarioService) {
    this.url = global.url;
    this.page_title='Listado de Usuarios';
   }



  ngOnInit() {
    this.getUsers();
  }

  ngOnChanges(){
    
  }

  getUsers(){
    this._userService.getUsers().subscribe(
      response=>{
        if(response.users){
          this.users = response.users;
          console.log(this.users);
        }         
      },
      error=>{
        console.log(error);
      }
    );
  }

}
