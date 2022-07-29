import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Prospect } from '../prospect';
import { ProspectService } from '../prospect.service';

@Component({
  selector: 'app-prospect-combobox',
  templateUrl: './prospect-combobox.component.html'
})
export class ProspectComboboxComponent implements OnInit {

  prospects: Prospect[] = [];

  constructor(
    private prospectService: ProspectService
  ) { }

  @Output() currentProspectId = new EventEmitter<number>();
  @Input() idInput: number = 0;

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void {
    this.prospectService.findAll().subscribe(
      (response) => this.prospects = response
    )
  }

  onChange(value: string):void {
    this.currentProspectId.emit(parseInt(value));
  }


}
