import { Component, OnInit } from '@angular/core';
//import { SharedServiceService } from '../shared-service.service';
@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.css']
})
export class WorkspacesComponent implements OnInit {
  public sampleData = [{
    name: 'StartUp',
    imgUrl: 'startup.png',
    description: '1-2 people',
    discount: -50,
    price: 99.00,
    status: ''
  },
    {
      name: 'Business',
      imgUrl: 'business.png',
      description: '5 people',
      discount: -40,
      price: 299.00,
      status: ''
    },
    {
      name: 'Enterprise',
      imgUrl: 'enterprise.png',
      description: '10 people',
      discount: -50,
      price: 499.00,
      status: ''
    }];
 // constructor(private sharedSerivce: SharedServiceService) { }

  ngOnInit() {
  }

  addItems(data: { status: string; }) {
    // eslint-disable-next-line no-param-reassign
    data.status = 'IN CART'; // appending a new key status
  //  this.sharedSerivce.setItemData(data);
  }
}
