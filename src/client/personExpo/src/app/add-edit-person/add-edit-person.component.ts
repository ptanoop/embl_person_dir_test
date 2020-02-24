import { Component, OnInit, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Person } from '../person/person';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-add-edit-person',
  templateUrl: './add-edit-person.component.html',
  styleUrls: ['./add-edit-person.component.css']
})
export class AddEditPersonComponent implements OnInit {

  angForm: FormGroup;
  private personData: Person;
  private action: any;


  public hobbyList: string[] = ['Reading', 'Watching TV', 'Family Time', 'Going to Movies', 'Fishing', 'Computer',
                                'Gardening', 'Renting Movies', 'Walking', 'Exercise', 'Listening to Music',
                                'Entertaining', 'Hunting', 'Team Sports', 'Shopping', 'Traveling', 'Sleeping',
                                'Socializing', 'Sewing', 'Golf', 'Church Activities', 'Relaxing', 'Playing Music',
                                'Housework', 'Crafts', 'Watching Sports', 'Bicycling', 'Playing Cards', 'Hiking',
                                'Cooking', 'Eating Out', 'Dating Online', 'Swimming', 'Camping', 'Skiing',
                                'Working on Cars', 'Writing', 'Boating', 'Motorcycling', 'Animal Care', 'Bowling',
                                'Painting', 'Running', 'Dancing', 'Horseback Riding', 'Tennis', 'Theater',
                                'Billiards', 'Beach', 'Volunteer Work'];
  public colorCombinedList: string[] = ['Amaranth,#E52B50', 'Amber,#FFBF00', 'Azure,#007FFF', 'Beige,#F5F5DC',
                                        'Black,#000000', 'Blue,#0000FF', 'Bronze,#CD7F32', 'Brown,#964B00',
                                        'Carmine,#960018', 'Chocolate,#7B3F00', 'Cobalt blue,#0047AB',
                                        'Coffee,#6F4E37', 'Copper,#B87333', 'Desert sand,#EDC9Af',
                                        'Electric blue,#7DF9FF', 'Emerald,#50C878', 'Erin,#00FF3F', 'Gold,#FFD700',
                                        'Gray,#808080', 'Green,#008000', 'Harlequin,#3FFF00', 'Indigo,#4B0082',
                                        'Ivory,#FFFFF0', 'Jade,#00A86B', 'Jungle green,#29AB87', 'Lavender,#B57EDC',
                                        'Lemon,#FFF700', 'Lime,#BFFF00', 'Magenta,#FF00FF', 'Magenta rose,#FF00AF',
                                        'Maroon,#800000', 'Navy blue,#000080', 'Olive,#808000', 'Orange,#FF6600',
                                        'Orchid,#DA70D6', 'Persian blue,#1C39BB', 'Pink,#FD6C9E', 'Plum,#8E4585',
                                        'Prussian blue,#003153', 'Purple,#800080', 'Raspberry,#E30B5C', 'Red,#FF0000',
                                        'Rose,#FF007F', 'Ruby,#E0115F', 'Salmon,#FA8072', 'Sapphire,#0F52BA',
                                        'Silver,#C0C0C0', 'Violet,#7F00FF', 'White,#FFFFFF', 'Yellow,#FFFF00'];
  public colorList: Array<{colorName: string, colorCode: string, colorCombined: string}>;


  constructor(public dialogRef: MatDialogRef<AddEditPersonComponent>,
              @Optional() @Inject (MAT_DIALOG_DATA)  public data: Person) {
                this.personData = data;
                if (data != null) {
                    this.action = 'edit';
                } else {
                    this.action = 'add';
                }
  }

  ngOnInit() {

    this.colorList = Array<{colorName: string, colorCode: string, colorCombined: string}>();
    for (const colr of this.colorCombinedList) {
        const cname = colr.split(',')[0];
        const ccode = colr.split(',')[1];
        this.colorList.push({colorName : cname, colorCode: ccode, colorCombined: colr});
    }

    this.angForm = new FormGroup({
      firstName:      new FormControl('', [Validators.required, Validators.maxLength(60), Validators.pattern('^[a-zA-Z]*$')]),
      lastName:       new FormControl('', [Validators.required, Validators.maxLength(60), Validators.pattern('^[a-zA-Z]*$')]),
      age:            new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.max(120), Validators.min(18)]),
      colorCombined:  new FormControl('', []),
      hobbies :       new FormControl('', [Validators.required]),
    });

    if (this.personData != null) {
      this.angForm.patchValue({
        firstName: this.personData.firstName,
        lastName: this.personData.lastName,
        age: this.personData.age,
        colorCombined: this.personData.favouriteColor,
        hobbies: this.personData.hobby
      });
    }

  }

  public hasError = (controlName: string, errorName: string) => {
    return this.angForm.controls[controlName].hasError(errorName);
  }

  submitValues(action: any) {
    const addEditPersonData = {
      first_name : this.angForm.controls.firstName.value,
      last_name: this.angForm.controls.lastName.value,
      age: this.angForm.controls.age.value,
      favourite_color: this.angForm.controls.colorCombined.value,
      hobby: this.angForm.controls.hobbies.value
    };
    if (action === 'save') {
      return this.dialogRef.close({action: 'save', data: addEditPersonData});
    } else if (action === 'add') {
      return this.dialogRef.close({action: 'add', data: addEditPersonData});
    }

  }

  onCancel() {
    return this.dialogRef.close({action: 'cancel'});
  }

}
