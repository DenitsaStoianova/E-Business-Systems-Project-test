import { Component, OnInit } from '@angular/core';
import {Route} from "../route.enum";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  navigateToAddPeopleModal() {
    this.router.navigate([Route.AddPeopleModal]);
  }

  navigateToShowPeopleModal() {
    this.router.navigate([Route.ShowPeopleModal]);
  }

  navigateToAddTemplate() {
    this.router.navigate([Route.Departments])
  }
}
