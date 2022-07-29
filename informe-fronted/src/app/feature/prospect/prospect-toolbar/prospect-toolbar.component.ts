import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prospect-toolbar',
  templateUrl: './prospect-toolbar.component.html'
})
export class ProspectToolbarComponent implements OnInit {

  constructor() { }

  @Output() term = new EventEmitter<string>();

  @Input() item: string = '';

  ngOnInit(): void {
  }

  onInput(inputTerm: string):void{
    this.term.emit(inputTerm);
  }

}
