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
        let firstNameRegExp = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (firstNameRegExp.test(firstname))
            this._firstname = firstname;
        else
            throw 'Invalid first name!';
    }

    //getter and setter for lastName
    get lastname() { return this._lastname; }
    set lastname(lastname) {
        let lastNameRegExp = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (lastNameRegExp.test(lastname))
            this._lastname = lastname;
        else
            throw 'Invalid last name!';
    }

    //getter and setter for address
    get address() { return this._address; }
    set address(address) {
        let addressRegExp = RegExp('^[A-Za-z]{4,}$');
        if (addressRegExp.test(address))
            this._address = address;
        else
            throw 'Invalid address!';
    }

    //getter and setter for city
    get city() { return this._city; }
    set city(city) {
        let cityRegExp = RegExp('^[A-Za-z]{4,}$');
        if (cityRegExp.test(city))
            this._city = city;
        else
            throw 'Invalid city!';
    }

    //getter and setter for state
    get state() { return this._state; }
    set state(state) {
        let stateRegExp = RegExp('^[A-Za-z]{4,}$');
        if (stateRegExp.test(state))
            this._state = state;
        else
            throw 'Invalid state!';
    }

    //getter and setter for zip
    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegExp = RegExp('^[0-9]{3}[ ]*[0-9]{3}$');
        if (zipRegExp.test(zip))
            this._zip = zip;
        else
            throw 'Invalid zip!';
    }

    // getter and setter for PhoneNo
    get phoneNo() { return this._phoneNo; }
    set phoneNo(phoneNo) {
        let phoneRegExp = RegExp('^[0-9]{2}[ ]*[0-9]{10}$');
        if (phoneRegExp.test(phoneNo))
            this._phoneNo = phoneNo;
        else
            throw 'Invalid phone number!';
    }

    // getter and setter for email
    get email() { return this._email; }
    set email(email) {
        let emailRegExp = RegExp('^[a-zA-Z0-9]+([.+_-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.][a-zA-Z]{3})+([.][a-zA-Z]{2})?$');
        if (emailRegExp.test(email))
            this._email = email;
        else
            throw 'Invalid email!';
    }

    // overriding toString() method
    toString() {
        return "\nFirstName: " + this.firstname + "\nLastName: " + this.lastname + "\nAddress: " + this.address + "\nCity: " + this.city + "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone Number: " + this.phoneNo + "\nEmail: " + this.email;
    }
}

try {
    contact = new Contact("Akshay","Raut","wadgaon","Buldhana","Maharashtra",674678,91-9898989898,"asr@gmail.com");
    console.log(contact.toString());
}
catch (e) {
    console.error(e);
}
