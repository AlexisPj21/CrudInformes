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
    private activatedRoute: ActivatedRoute
  )

  { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        let prospectId:string ="";
        if(params.get("prospect_id")){
          prospectId = params.get("prospect_id")!;
          this.findById(parseInt(prospectId));
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
  findById(prospectId: number): void{
    this.prospectService.findById(prospectId)
    .subscribe(
      (response:Prospect)=>{
        this.currentProspect = response;
      }
    )
  }

}
