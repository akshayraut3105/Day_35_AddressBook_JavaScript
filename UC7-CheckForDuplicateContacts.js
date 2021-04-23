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
            throw 'Invalid first name: '+firstname;
    }

    //getter and setter for lastName
    get lastname() { return this._lastname; }
    set lastname(lastname) {
        let lastNameRegExp = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (lastNameRegExp.test(lastname))
            this._lastname = lastname;
        else
            throw 'Invalid last name: '+lastname;
    }

    //getter and setter for address
    get address() { return this._address; }
    set address(address) {
        let addressRegExp = RegExp('^[A-Za-z ]{4,}[ ]*$');
        if (addressRegExp.test(address))
            this._address = address;
        else
            throw 'Invalid address: '+address;
    }

    //getter and setter for city
    get city() { return this._city; }
    set city(city) {
        let cityRegExp = RegExp('^[A-Za-z ]{4,}$');
        if (cityRegExp.test(city))
            this._city = city;
        else
            throw 'Invalid city: '+city;
    }

    //getter and setter for state
    get state() { return this._state; }
    set state(state) {
        let stateRegExp = RegExp('^[A-Za-z ]{4,}$');
        if (stateRegExp.test(state))
            this._state = state;
        else
            throw 'Invalid state: '+state;
    }

    //getter and setter for zip
    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegExp = RegExp('^[0-9]{3}[ ]*[0-9]{3}$');
        if (zipRegExp.test(zip))
            this._zip = zip;
        else
            throw 'Invalid zip: '+zip;
    }

    // getter and setter for PhoneNo
    get phoneNo() { return this._phoneNo; }
    set phoneNo(phoneNo) {
        let phoneRegExp = RegExp('^[0-9]{2}[ ]*[0-9]{10}$');
        if (phoneRegExp.test(phoneNo))
            this._phoneNo = phoneNo;
        else
            throw 'Invalid phone number: '+phoneNo;
    }

    // getter and setter for email
    get email() { return this._email; }
    set email(email) {
        let emailRegExp = RegExp('^[a-zA-Z0-9]+([.+_-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.][a-zA-Z]{3})+([.][a-zA-Z]{2})?$');
        if (emailRegExp.test(email))
            this._email = email;
        else
            throw 'Invalid email: '+email;
    }

    // overriding toString() method
    toString() {
        return "\nFirstName: " + this.firstname + "\nLastName: " + this.lastname + "\nAddress: " + this.address + "\nCity: " + this.city + "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone Number: " + this.phoneNo + "\nEmail: " + this.email;
    }
}

// UC 3 : New address book array to store contacts
let addressBook = new Array();
try {
    contact = new Contact("Akshay","Raut","Wadgaon","Buldhana","Maharashtra","674678","91 9898989898","asr@gmail.com");
    addressBook.push(contact);
    addressBook.push(new Contact("Adam", "Zampa", "Chinnaswamy", "Bangalore", "Karnataka", "345 678", "91 8765432345", "vs@gmail.com"));
    addressBook.push(new Contact("Andre", "Russell", "Eden Gardens", "Kolkata", "West Bengal", "875 678", "91 2342123456", "gg@gmail.com"));
    addressBook.push(new Contact("Andre", "Russell", "Cape town", "Panji", "Goa", "875 678", "91 2342123456", "gg@gmail.com"));
    addressBook.push(new Contact("Prithvi", "Shaw", "Firoz Shah Kotla", "New Delhi", "New Delhi", "002 678", "91 5674567890", "vs@gmail.com"));
    addressBook.forEach(contact=>console.log(contact.toString()));
}
catch (e) {
    console.error(e);
}

// UC 4 : Ability to find existing contact person using their name and edit it
editContact("Adam Zampa","Zimbabe");
editContact("Prithvi Shaw","Denmark");
console.log("\nDetails after updation:")
addressBook.forEach(contact=>console.log(contact.toString()));
function editContact(fullName,value)
{
    var splitStr=fullName.split(" ");
    for(let i=0;i<addressBook.length;i++)
    {
        //find the contact using name
        if(addressBook[i].firstname==splitStr[0] && addressBook[i].lastname==splitStr[1])
        {  
            //update address of the found contact    
            addressBook[i].address=value;
            break;
        }        
    }
}

// UC 5 : Ability to find a person with name delete it from the array
deleteContact("Adam Zampa");
console.log("\nArray details after deletion:")
addressBook.forEach(contact=>console.log(contact.toString()));
function deleteContact(fullName)
{
    var splitStr=fullName.split(" ");
    for(let i in addressBook)
    {
        if(addressBook[i].firstname==splitStr[0] && addressBook[i].lastname==splitStr[1])
        {
            //splice(x,y) removes next y elements from the xth position in an array
            addressBook.splice(i,1);
            break;
        }
    }
}
// UC 6 : Find number of contacts in array using reduce()
let count = addressBook.reduce((count)=>count+1,0);
console.log("Total no of contacts in array: "+count);
// UC 7 : Ability to ensure there is no Duplicate Entry of the same Person in the Address Book
function checkDuplicate(fname,lname)
{
    let count=addressBook.filter(contact => contact.firstname == fname && contact.lastname == lname).reduce(count=>count+1,0);
    return count;
}
