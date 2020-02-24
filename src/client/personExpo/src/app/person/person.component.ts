import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../../environments/environment';
import { Person } from '../person/person';
import { DeletePersonComponent } from '../delete-person/delete-person.component';
import { AddEditPersonComponent } from '../add-edit-person/add-edit-person.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  private pageNumber: any;
  private elementSize: any;
  private totalElements: any;
  private totalPages: any;
  private selfDatasetLink: any;
  private firstDatasetLink: any;
  private lastDatasetLink: any;
  private nextDatasetLink: any;
  private prevDatasetLink: any;
  private personDataset: Array<Person>;

  constructor(private personService: PersonService, public dialog: MatDialog) {
      this.firstDatasetLink = environment.apiEndpoint + '?page=0&size=10';
      this.personService.fetchDataset(this.firstDatasetLink).subscribe(data => {
          this.resolveDataset(data);
      });
  }

  resolveDataset(data: any) {
      this.personDataset = Array<Person>();
      this.firstDatasetLink = null;
      this.lastDatasetLink = null;
      this.prevDatasetLink = null;
      this.selfDatasetLink = null;
      this.nextDatasetLink = null;
      if (data != null && data._embedded != null && data._embedded.persons != null) {
          let index = 0;
          if (data.page != null) {
            this.elementSize = data.page.size;
            this.pageNumber = data.page.number;
            this.totalElements = data.page.totalElements;
            this.totalPages = data.page.totalPages;
            this.selfDatasetLink = environment.apiEndpoint + '?page=' + this.pageNumber + '&size=' + this.elementSize;
          }
          for (const personData of data._embedded.persons) {
              const person: Person = new Person();
              person.setData(personData, this.pageNumber * this.elementSize + index);
              index++;
              this.personDataset.push(person);
          }
          if (data._links != null) {
              if (data._links.first != null && data._links.first.href != null) {
                this.firstDatasetLink = data._links.first.href;
              }
              if (data._links.last != null && data._links.last.href != null) {
                this.lastDatasetLink = data._links.last.href;
              }
              if (data._links.prev != null && data._links.prev.href != null) {
                this.prevDatasetLink = data._links.prev.href;
              }
              if (data._links.next != null && data._links.next.href != null) {
                this.nextDatasetLink = data._links.next.href;
              }
          }
      }
  }

  fetchNextDataset() {
    if (this.nextDatasetLink != null) {
        this.personService.fetchDataset(this.nextDatasetLink).subscribe(data => { this.resolveDataset(data); });
    }
  }

  fetchPrevDataset() {
    if (this.prevDatasetLink != null) {
      this.personService.fetchDataset(this.prevDatasetLink).subscribe(data => { this.resolveDataset(data); });
    }
  }

  openDeleteDialog(delPersonData: any) {
    let delResponse: any;
    delResponse = this.dialog.open(DeletePersonComponent, {
      width: '300px',
      disableClose: true,
      data: delPersonData
    });

    delResponse.afterClosed().subscribe((result: any) => {
      if (result.action === 'confirm') {
        this.personService.deletePersonData(result.data.selfLink).subscribe(data => {
          this.personService.fetchDataset(this.selfDatasetLink).subscribe(dataset => {
            this.resolveDataset(dataset);
          });
        });
      }
    });
  }

  openAddPersonDialog() {
    const addResponse = this.dialog.open(AddEditPersonComponent, {
      disableClose: true,
    });

    addResponse.afterClosed().subscribe(result => {
      if (result.action === 'add') {
        const data = {
          first_name:       result.data.first_name,
          last_name:        result.data.last_name,
          age:              result.data.age,
          favourite_color:  result.data.favourite_color,
          hobby:            result.data.hobby
        };
        this.personService.postPersonData(data).subscribe(dataRes => {
          this.personService.fetchDataset(this.selfDatasetLink).subscribe(dataset => {
            this.resolveDataset(dataset);
          });
        });
      }
    });
  }

  openEditPersonDialog(personData: any) {
    const editResponse = this.dialog.open(AddEditPersonComponent, {
      disableClose: true,
      data: personData
    });

    console.log(personData);

    editResponse.afterClosed().subscribe(result => {
      if (result.action === 'save') {
        const data = {
          first_name:       result.data.first_name,
          last_name:        result.data.last_name,
          age:              result.data.age,
          favourite_color:  result.data.favourite_color,
          hobby:            result.data.hobby
        };
        this.personService.updatePersonData(personData.selfLink, data).subscribe(dataRes => {
          this.personService.fetchDataset(this.selfDatasetLink).subscribe(dataset => {
            this.resolveDataset(dataset);
          });
        });
      }
    });

  }

  ngOnInit() {
  }

}
