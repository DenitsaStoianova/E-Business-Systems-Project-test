import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { ContinueOrderModalComponent } from './continue-order-modal/continue-order-modal.component';
import { Route } from './route.enum';
import { WorkspacesComponent } from './workspaces/workspaces.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { DepartmentsComponent } from './departments/departments.component';
import { TemplatesComponent } from './templates/templates.component';
import { AuthGuard } from './auth/auth.guard';
import { AddPeopleModalComponent } from "./add-people-modal/add-people-modal.component";
import { ShowPeopleModalComponent } from "./show-people-modal/show-people-modal.component";
import { UserHomeComponent } from './userHome/userHome.component';

const routes: Routes = [
    {
        path: Route.Login,
        component: LoginComponent
    },
    {
        path: Route.Register,
        component: RegisterComponent
    },
    {
        path: Route.Workspaces,
        component: WorkspacesComponent
    },
    {
        path: Route.AddPeopleModal,
        component: AddPeopleModalComponent
    },
    {
        path: Route.ShowPeopleModal,
        component: ShowPeopleModalComponent
    },
    {
        path: Route.ProfileInfo,
        component: ProfileInfoComponent
    },
    {
        path: Route.Departments,
        component: DepartmentsComponent
    },
    {
        path: Route.Templates,
        component: TemplatesComponent
    },
    {
        path: Route.ContinueOrderModal,
        component: ContinueOrderModalComponent
    },
    {
        path: Route.UserHome,
        component: UserHomeComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})

export class AppRoutingModule {
}
