import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule,
         MatInputModule,
         MatListModule,
         MatToolbarModule,
         MatDialogModule,
         MatButtonModule,
         MatFormFieldModule,
         MatTableModule,
         MatSelectModule
         } from '@angular/material';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditPersonComponent } from './add-edit-person.component';

describe('AddEditPersonComponent', () => {
  let component: AddEditPersonComponent;
  let fixture: ComponentFixture<AddEditPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPersonComponent ],
      imports: [
        BrowserModule,
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
