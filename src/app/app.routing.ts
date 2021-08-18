// importar los modulos del router
import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { TablaUsuariosComponent } from "./components/tabla-usuarios/tabla-usuarios.component";

//crear array de rutas
const appRoutes:Routes = [
    {path: '', component:TablaUsuariosComponent},
    {path: '**',component:TablaUsuariosComponent}
];
//exportar configuración
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);