import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allowance-job',
  templateUrl: './allowance-job.component.html',
  styleUrls: ['./allowance-job.component.css']
})
export class AllowanceJobComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    // document.getElementById("allowanceJob").style.display = "none";
    (<any>$('#allowanceJob')).modal('hide');
  }

}
