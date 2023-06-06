import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';
import sharing from 'src/app/helpers/validateForm';



@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  email: string = 'dfd';

  constructor(private share: ShareService) {}

  ngOnInit(): void {
    this.email=localStorage.getItem('email')||''
    
    console.log("dcsd",this.email)
  }
}
