import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing,appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';
import { UsuarioService } from './services/usuario.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TablaUsuariosComponent
  ],
  imports: [
    routing,
    BrowserModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders,UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
