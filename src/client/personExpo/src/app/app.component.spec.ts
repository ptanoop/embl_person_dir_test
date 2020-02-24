import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

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
import { PersonComponent } from './person/person.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';
import { AddEditPersonComponent } from './add-edit-person/add-edit-person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PersonComponent,
        DeletePersonComponent,
        AddEditPersonComponent
      ],
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
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'personExpo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('personExpo');
  });

});
