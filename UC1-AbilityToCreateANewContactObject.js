// Welcome to address book problem
// UC 1 : Ability to create contact class and its object with certain fields
class Contact {

    // constructor
    // Spread operator used to provide multiple dynamic parameters to constructor
    constructor(...param) {
        this.firstname = param[0];
        this.lastname = param[1];
        this.address = param[2];
        this.city = param[3];
        this.state = param[4];
        this.zip = param[5];
        this.phoneNo = param[6];
        this.email = param[7];
    }

    //getter and setter for firstName
    get firstname() { return this._firstname; }
    set firstname(firstname) {
        this._firstname = firstname;
    }

    //getter and setter for lastName
    get lastname() { return this._lastname; }
    set lastname(lastname) {
        this._lastname = lastname;
    }

    //getter and setter for address
    get address() { return this._address; }
    set address(address) {
        this._address = address;
    }

    //getter and setter for city
    get city() { return this._city; }
    set city(city) {
        this._city = city;
    }

    //getter and setter for state
    get state() { return this._state; }
    set state(state) {
        this._state = state;
    }

    //getter and setter for zip
    get zip() { return this._zip; }
    set zip(zip) {
        this._zip = zip;
    }

    // getter and setter for PhoneNo
    get phoneNo() { return this._phoneNo; }
    set phoneNo(phoneNo) {
        this._phoneNo = phoneNo;
    }

    // getter and setter for email
    get email() { return this._email; }
    set email(email) {
        this._email = email;
    }

    // overriding toString() method
    toString() {
        return "\nFirstName: " + this.firstname + "\nLastName: " + this.lastname + "\nAddress: " + this.address + "\nCity: " + this.city + "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone Number: " + this.phoneNo + "\nEmail: " + this.email;
    }
}

contact = new Contact("Akshay","Raut","Wadgaon","Buldhana","Maharashtra",674678,4356786543,"asr@gmail.com");
console.log(contact.toString());
