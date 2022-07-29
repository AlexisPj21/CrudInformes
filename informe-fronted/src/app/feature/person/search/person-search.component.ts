import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html'

})
export class PersonSearchComponent implements OnInit {

  constructor(
  private personService: PersonService
  )
  { }
  @Output() personEmiter = new EventEmitter<Person>();
  people: Person[] = [];

  ngOnInit(): void {
  }

  findByName(term: string): void {
    console.log(term);
    if (term.length>=2){

    this.personService.findByName(term).subscribe(
      (response) => {
        console.log(term + ""+ response);
        this.people = response
      }
    )
  }
  if(term.length === 0){
    this.people = [];
  }

  }

  onSelect(person: Person): void{
    this.personEmiter.emit(person);
  }

}
