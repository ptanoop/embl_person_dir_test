import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';
import { AddEditPersonComponent } from './add-edit-person/add-edit-person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
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
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeletePersonComponent, AddEditPersonComponent]
})
export class AppModule { }
