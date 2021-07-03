import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EpfService } from '../service/epf.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-addepf',
  templateUrl: './addepf.component.html',
  styleUrls: ['./addepf.component.css']
})
export class AddepfComponent {
  
  epfForm = this.fb.group({
    employeeNumber: [null, Validators.required],
    epfcode : [null, Validators.required],
    salary : [null, Validators.required],
    month : [null, Validators.required]
  });
  

  employee:any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private es: EpfService,
    private router: Router,
    ) {}

  onSubmit(): void {
     //console.log(this.office.value);
     this.es.add(this.epfForm.value).subscribe(
      (msg)=>{ 
        console.log(msg)
        this.router.navigateByUrl(`/view-epf`);
      },
      (err)=>{ console.log(err)}
    )
  }


  ngOnInit(): void {
    this.es.viewEmp().subscribe(
      data=>{
        console.log(data)
        this.employee = data
        this.employee = this.employee.data
      }, 
      err => {console.log(err)}
    )
  }
}
