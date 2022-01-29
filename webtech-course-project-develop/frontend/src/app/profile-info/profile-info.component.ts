import { Component, OnInit } from '@angular/core';
import {Route} from "../route.enum";
import {Router} from "@angular/router";
import { UserService } from '../users/services/user.service';
import { USER_NAME_LOCAL_STORAGE_KEY } from '../constants';
import { BoughtWorkspace } from './bought-workspace.interface';
import { Template } from 'src/interfaces/template.interface';
import { KeyValue } from '@angular/common';
import { BoughtTemplate } from './bought-template.interface';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  usernameWorkspacesName = 'Username`s Workspaces'

  // workspaceName: Array<string> = [];

  // templatesInfo: Array<BoughtTemplate> = [];

  // workspaceInfo: Array<KeyValue<string, Array<BoughtTemplate>>> = [];

  boughtWorkspacesInfo: Array<BoughtWorkspace> = [];
  // boughtTemplatesInfo: Array<BoughtTemplate> = []

  constructor(private readonly userService: UserService, private readonly router: Router, private readonly httpClient: HttpClient) {
    userService.userChanged$
    .subscribe(() => {
        const userName: string | null = localStorage.getItem(USER_NAME_LOCAL_STORAGE_KEY);
        if (userName) {
            this.usernameWorkspacesName = userName + "`s Workspaces"
        }
    });
   }

  getBoughtWorkspacesInfo(): void {
    this.userService.boughtWorkspacesNames()
            .subscribe(result => {
                if (result) {
                    for(let i = 0; i < result.length; ++i) {
                      this.boughtWorkspacesInfo[i] = result[i]
                    }
                } else {
                    alert(result);
                }
            },
                error => { alert(error.error.message); },
                () => { }
            );
  }

  ngOnInit(): void {
    this.getBoughtWorkspacesInfo()

    // for(let i = 0; i < this.boughtWorkspacesInfo.length; ++i) {
    //   this.workspaceName[i] = this.boughtWorkspacesInfo[i].name
      
    //   for(let j = 0; j < this.boughtWorkspacesInfo[i].templates.length; ++j) {
    //     this.templatesInfo[j]
    //   }
    // }

    // for(let i = 0; i < this.boughtWorkspacesInfo.length; ++i) {
    //   this.workspaceInfo[i].key =  this.boughtWorkspacesInfo[i].name;
    //   let tempArr: Array<BoughtTemplate> = [];
    //   for(let j = 0; j < this.boughtWorkspacesInfo[i].templates.length; ++j) {
    //     tempArr[j].name = this.boughtWorkspacesInfo[i].templates[j].name
    //     tempArr[j].image = this.boughtWorkspacesInfo[i].templates[j].image
    //     tempArr[j].link = this.boughtWorkspacesInfo[i].templates[j].link
    //   }
    //   this.workspaceInfo[i].value = tempArr
    // }
  }

  navigateToAddPeopleModal() {
    this.router.navigate([Route.AddPeopleModal]);
  }

  navigateToShowPeopleModal() {
    this.router.navigate([Route.ShowPeopleModal]);
  }
}
