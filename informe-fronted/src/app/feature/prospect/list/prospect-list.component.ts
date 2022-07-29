import { Component, OnInit } from '@angular/core';
import { Prospect } from '../prospect';
import { ProspectService } from '../prospect.service';

@Component({
  selector: 'app-prospect-list',
  templateUrl: './prospect-list.component.html'
})
export class ProspectListComponent implements OnInit {

  constructor(
    private ProspectService: ProspectService
  ) { }

  prospects: Prospect[] = [];

  ngOnInit(): void {

    this.findAll();
  }

  findAll():void {
    this.ProspectService.findAll().subscribe(
      (response) => {
        this.prospects = response;
      }
    );
  }
  findByName(term:string){
    if(term.length===0){
      this.findAll();
    }

    if(term.length>=2){
      this.ProspectService.findByName(term).subscribe(
        (response) => this.prospects = response
      )
    }
  }

}
