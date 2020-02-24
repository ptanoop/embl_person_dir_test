import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from '../person/person';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css']
})
export class DeletePersonComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletePersonComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: Person) { }

  ngOnInit() {
  }

  onDismiss() {
    this.dialogRef.close({action: 'dismiss', data: null});
  }

  onConfirm() {
    this.dialogRef.close({action: 'confirm', data: this.data});
  }

}
