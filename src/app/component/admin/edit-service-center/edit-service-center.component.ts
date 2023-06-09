import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { serviceCenter } from 'src/app/helpers/serviceCenter';
import { ServicecenterService } from 'src/app/services/servicecenter.service';

@Component({
  selector: 'app-edit-service-center',
  templateUrl: './edit-service-center.component.html',
  styleUrls: ['./edit-service-center.component.scss']
})
export class EditServiceCenterComponent implements OnInit {
  servicesarr: serviceCenter[] = [];
  editCenter!: FormGroup
  constructor(private fb: FormBuilder, private services: ServicecenterService) {
    this.editCenter = this.fb.group({
      id: [''],
      serviceCenterName: [''],
      serviceCenterPhone: [''],
      serviceCenterAddress: [''],
      serviceCenterImageUrl: [''],
      serviceCenteramailId: [''],
      serviceCenterDescription: ['']
    })
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
  updateform(ser: serviceCenter) {
    this.editCenter.setValue({
      id: ser.id,
      serviceCenterName: ser.serviceCenterName,
      serviceCenterPhone: ser.serviceCenterPhone,
      serviceCenterAddress: ser.serviceCenterAddress,
      serviceCenterImageUrl: ser.serviceCenterImageUrl,
      serviceCenteramailId: ser.serviceCenteramailId,
      serviceCenterDescription: ser.serviceCenterDescription
    })
  }
  onedit() {
    this.services.updateservice(this.editCenter.value).subscribe(Response => {
      this.getservice();
    });
  }
  ondelete(id:number){
    this.services.deleteservice(id).subscribe((res: any)=>{
      console.log(res);
      this.getservice();
    });
  }
  scrollPageToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
