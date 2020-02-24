import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { MatDialog } from '@angular/material/dialog';
import { DeletePersonComponent } from './delete-person.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Person } from '../person/person';

import { MatCardModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatTableModule,
  MatSelectModule
  } from '@angular/material';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('DeletePersonComponent', () => {
  let component: DeletePersonComponent;
  let fixture: ComponentFixture<DeletePersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePersonComponent ],
      imports: [
        MatCardModule,
        MatInputModule,
        MatListModule,
        MatToolbarModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatTableModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        MatDialogRef, MAT_DIALOG_DATA, MatDialog
      ],
      schemas: [ NO_ERRORS_SCHEMA  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
