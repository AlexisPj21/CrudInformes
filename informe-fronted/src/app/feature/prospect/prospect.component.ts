import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prospect } from './prospect';
import { ProspectService } from './prospect.service';



@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.component.html'
})
export class ProspectComponent implements OnInit {

  currentProspect:Prospect ={
    prospectId:0,
    name:"",
    dni:"",
    source:"",
    phone:"",
    address:"",
    mail:"",
    created: new Date(),
    updated: new Date(),
    enable: false
  }

  constructor(
    private prospectService: ProspectService,
    private activedRoute: ActivatedRoute
  )

  { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params) => {
        let id:string ="";
        if(params.get("id")){
          id = params.get("id")!;
          this.findById(parseInt(id));
        }
      }
    )
  }
  save ():void{
    this.prospectService.save(this.currentProspect)
    .subscribe((response) => {console.log("registro guardado");
    this.currentProspect={
      prospectId:0,
      name: "",
      dni:"",
      source:"",
      phone:"",
      address:"",
      mail:"",
      created: new Date(),
      updated: new Date(),
      enable: false
    }
  })
  }
  findById(id: number): void{
    this.prospectService.findById(id)
    .subscribe(
      (response:Prospect)=>{
        this.currentProspect = response;
      }
    )
  }

}
