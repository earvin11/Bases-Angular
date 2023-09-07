import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // Input decora la propiedad characterList para indicar que puede venir del componente padre
  @Input()
  public characterList:Character[] = [];

  // emitir onDelete
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string):void {
    this.onDelete.emit(id);
  }

}
