// Importing the onsnapshot and types from mobx state tree here so we can use it in our app

import { onSnapshot, types } from 'mobx-state-tree'


// Here we are assigning the data types to each filed of the user data 
const UserForm = types.model('User',
    {
        // Personal
        country: types.string,
        phone: types.string,
        address: types.string,
        address1: types.string,
        dob: types.string,
        cob: types.string,
        qualification: types.string,
        proficiency: types.string,
        photo: types.string,
        zipcode:types.string,
        // Passport
        passport: types.string,
        issue: types.string,
        expiry: types.string,
        countryissue: types.string,
        // Program
        level: types.string,
        subject: types.string,
        month: types.string,
        year: types.string,
        range: types.string,
        // Documents
        academicfile: types.string,
        englishfile: types.string,
        letter: types.string,
        reference: types.string,
        awards: types.string,
        passportfile: types.string,









    }
).actions(self => ({// Here actions are used to update the active state of the user data and the change would be implemented from the fron end side and would be replicated here in the store so it can be changed globallly and can be used further 
    // Personal

    setCountry(value: string) {
        self.country = value
    },
    setPhone(value: string) {
        self.phone = value
    },
    setAddress(value: string) {
        self.address = value
    },
    setAddress1(value: string) {
        self.address1 = value
    },
    setDob(value: string) {
        self.dob = value
    },
    setCob(value: string) {
        self.cob = value
    },
    setProficiency(value: string) {
        self.proficiency = value
    },
    setPhoto(value: string) {
        self.photo = value
    },
    setQualification(value: string) {
        self.qualification = value
    },
    setZipCode(value: string) {
        self.zipcode = value
    },
    // Passport
    setPassport(value: string) {
        self.passport = value
    },
    setIssue(value: string) {
        self.issue = value
    },
    setExpiry(value: string) {
        self.expiry = value
    },
    setCountryIssue(value: string) {
        self.countryissue = value
    },
    // Program
    setLevel(value: string) {
        self.level = value
    },
    setSubject(value: string) {
        self.subject = value
    },
    setMonth(value: string) {
        self.month = value
    },
    setYear(value: string) {
        self.year = value
    },
    setRange(value: string) {
        self.range = value
    },
    // Documents
    setAcademic(value: string) {
        self.academicfile = value
    },
    setEnglishFile(value: string) {
        self.englishfile = value
    },
    setLetter(value: string) {
        self.letter = value
    },
    setRef(value: string) {
        self.reference = value
    },
    setAwards(value: string) {
        self.awards = value
    },
    setPassportFile(value: string) {
        self.passportfile = value
    },




    aftercreate() { // we will be using it for the data from the apis
        onSnapshot(self, (snapshot) => (
            console.log("snapshot", snapshot)
        ))
        console.log("Ap response")
    }

})).views((self) => ({// The views in mobx state tree are used to perform computations on the store data
    get Totalinfo() {
        return (
            self.country
        )
    }
}))


const UserStates = UserForm.create({
    //Here we are assigning the default data to all of our datafields 
    // Personal
    country: '',
    phone:'',
    address:'',
    address1:'',
    dob:'',
    cob:'',
    qualification:'',
    proficiency:'',
    photo:'',
    zipcode:'',
    // Passport
    passport:'',
    issue:'',
    expiry:'',
    countryissue:'',
    // Program
    level:'',
    subject:'',
    month:'',
    year:'',
    range:'',
    // Documents
    academicfile:'',
    englishfile:'',
    letter:'',
    reference:'',
    awards:'',
    passportfile:'',

    

})

export default UserStates;

