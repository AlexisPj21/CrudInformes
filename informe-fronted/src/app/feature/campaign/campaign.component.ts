import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignService } from './campaign.service';
import { Campaign } from './campaign';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html'
})
export class CampaignComponent implements OnInit {

  currentCampaign: Campaign = {
    campaignId: 0,
    promotionId: "",
    advertisingMedia: "",
    startDate: "",
    finalDate: "",
    created: new Date(),
    updated: new Date(),
    enable: false
  };

  constructor(
    private campaignService: CampaignService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params)=>{
        let campaignId:string="";
        if (params.get("id")){
          campaignId = params.get("id")!;
          this.findById(parseInt(campaignId));
        }
      }
    )
  }

  save(): void {
    this.campaignService.save(this.currentCampaign)
    .subscribe(
      (response) => {
        console.log("registro guardado");
        this.currentCampaign = {
          campaignId: 0,
          promotionId: "",
          advertisingMedia: "",
          startDate: "",
          finalDate: "",
          created: new Date(),
          updated: new Date(),
          enable: false
        }
      }
    )
  }

  findById(campaignId: number): void{
    this.campaignService.findById(campaignId)
    .subscribe(
      (response: Campaign) => {
        console.log("registro encontrado");
        this.currentCampaign=response
      }
    )
  }

}
