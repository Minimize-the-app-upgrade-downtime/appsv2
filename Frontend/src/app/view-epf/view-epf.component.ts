import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EpfService } from '../service/epf.service'

@Component({
  selector: 'app-view-epf',
  templateUrl: './view-epf.component.html',
  styleUrls: ['./view-epf.component.css']
})
export class ViewEpfComponent implements OnInit {

  epf: any;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private es: EpfService
  ) { }

  ngOnInit(): void {

    this.es.view().subscribe(
      data=>{
        this.epf = data;
        console.log(this.epf);
        this.epf = this.epf.data
      },
      err => console.log(err)
    )
  }


}
