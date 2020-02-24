export class Person {
    firstName: string;
    lastName: string;
    fullName: string;
    age: number;
    favouriteColor: string;
    colorName: string;
    colorCode: string;
    hobby: [];
    selfLink: string;
    position: number;

    constructor() {

    }

    setData(data: any, index: any) {
        this.firstName = data.first_name;
        this.lastName = data.last_name;
        this.fullName = this.firstName + ' ' + this.lastName;
        this.age = data.age;
        this.favouriteColor = data.favourite_color;
        this.colorName = this.favouriteColor.split(',')[0];
        this.colorCode = this.favouriteColor.split(',')[1];
        this.hobby = data.hobby;
        this.selfLink = data._links.self.href;
        this.position = index + 1;
    }
}
