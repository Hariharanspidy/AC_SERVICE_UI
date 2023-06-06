import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/helpers/validateForm';
import { AuthService } from 'src/app/services/auth.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  serviceName:string=''
  productdetails!:FormGroup
  constructor(private fb:FormBuilder,private Auth:AuthService,private share:ShareService){}
  ngOnInit(): void {
    this.productdetails=this.fb.group({
      productName:['',Validators.required],
      ProductModelNo:['',Validators.required],
      ProductDateOfPurchase:['',Validators.required],
      contactNumber:['',Validators.required],
      problemDescription:['',Validators.required],
      availableSlots:['',Validators.required]
    });
    this.serviceName=this.share.serviceName
    console.log(this.serviceName)

    
  }
  
  onbook(){
    if(this.productdetails.valid){
      console.log(this.productdetails.value);
      this.Auth.onBookDB(this.productdetails.value)
      .subscribe({
        next:(res=>{
          alert(res.message)
          this.productdetails.reset();
        })
        ,error:(err=>{
          alert(err?.error.message)
        })
      })

    }
    else{
      ValidateForm.validateAllFormFileds(this.productdetails);
      alert("Form is invalid");
    }
  }

}
