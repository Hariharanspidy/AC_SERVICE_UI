import { Component, OnInit } from '@angular/core';
import { serviceCenter } from 'src/app/helpers/serviceCenter';
import { ServicecenterService } from 'src/app/services/servicecenter.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html', 
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  servicesarr: serviceCenter[] = [];
  
  constructor (private services:ServicecenterService,private share:ShareService){

  }
  ngOnInit(): void {
    this.getservice();
  }
  getservice() {
    this.services.getService().subscribe(Response => {
      console.log(Response)
      this.servicesarr = Response;
    })
  }
  getServiceCenterName(serviceCenterName: string) {
    this.share.setServiceCenterName(serviceCenterName)
  }
  
  

}
