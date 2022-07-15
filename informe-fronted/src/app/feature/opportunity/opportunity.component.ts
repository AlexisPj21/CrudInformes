import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Opportunity } from './opportunity';
import { OpportunityService } from './opportunity.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html'
})
export class OpportunityComponent implements OnInit {

  currentOpportunity: Opportunity = {
    opportunityId: 0,
    prospectId: 0,
    stageId: 0,
    vendorId: 0,
    campaignId: 0,
    amount: 0,
    created: new Date(),
    updated: new Date(),
    enable: false
  }

  constructor(
    private opportunityService: OpportunityService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params) => {
        let id:string = "";
        if (params.get("id")){
          id = params.get("id")!;
          this.findById(parseInt(id));
        }
      }
    )
  }

  save():void{
    this.opportunityService.save(this.currentOpportunity)
    .subscribe((response) => {console.log("Guardado exitosamente");
    this.currentOpportunity = {
      opportunityId: 0,
      prospectId: 0,
      stageId: 0,
      vendorId: 0,
      campaignId: 0,
      amount: 0,
      created: new Date(),
      updated: new Date(),
      enable: false
    }
  })
  }

  findById(id: number): void{
    this.opportunityService.findById(id)
    .subscribe(
      (response: Opportunity) => {
        this.currentOpportunity = response;
      }
    )
  }

}
