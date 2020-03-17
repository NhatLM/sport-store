import { NgModule } from "@angular/core"
import { Routes, RouterModule } from '@angular/router'
import { AuthComponent } from './auth.component'
import { AdminComponent } from './admin.component'

const routes: Routes = [
    {path:"auth", component: AuthComponent},
    {path: "main", component: AdminComponent},
    //{path:"", redirectTo:"/auth", pathMatch:"full"}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule]
})
export class AdminRoutingModule {}