import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prospect } from '../prospect';
import { ProspectService } from '../prospect.service';
import { PersonService } from '../../person/person.service';
import { Person } from '../../person/person';



@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.component.html'
})
export class ProspectComponent implements OnInit {

  currentProspect:Prospect = this.resetProspect();

  constructor(
    private prospectService: ProspectService,
    private activedRoute: ActivatedRoute,
    private route:Router,
    private personService: PersonService
  )

  { }
  prospects: Prospect[] = [];
  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params) => {
        let id:string ="";
        if(params.get("id")){
          id = params.get("id")!;
          console.log("el id es:" + params.get("id"));
          console.log("el id convertido es:" + id);
          this.findById(parseInt(id));
        }
      }
    )
  }
  save ():void{
    console.log (this.currentProspect);
    this.prospectService.save(this.currentProspect)
    .subscribe(
      (response) => {
        console.log("registro guardado");
    this.currentProspect = this.resetProspect();
    this.route.navigate(['/layout/prospect-list']);

  }
  )
  }
  findById(id: number): void{
    this.prospectService.findById(id)
    .subscribe(
      (response:Prospect)=>{
        this.currentProspect = response;
        this.currentProspect.person.forEach(
          (item) => {
           this.personService.findById(item.personId).subscribe(
            (person:Person) => item.name = person.name
           )
          }
        )
      }
    )
  }

  resetProspect(){
   return this.currentProspect = {
    prospectId:0,
    name: "",
    dni:"",
    source:"",
    phone:"",
    address:"",
    mail:"",
    created: new Date(),
    updated: new Date(),
    enable: false,
    personId:0,
    person:[]
  }
  }

  onSelect(person:Person):void {
    this.currentProspect.person.push(person);
  }

  removePerson(id:number){
    this.currentProspect.person =
    this.currentProspect.person.filter(
      (item) => item.personId != id
    )
  }
}
