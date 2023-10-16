// Importing the onsnapshot and types from mobx state tree here so we can use it in our app

import { onSnapshot, types } from 'mobx-state-tree'


// Here we are assigning the data types to each filed of the user data 
const MentorModel = types.model('User',
    {
        email:types.string,
        fname: types.string,
        lname:types.string,
        university: types.string,
        country: types.string,
        desc: types.string,
        organization: types.string,



    }
).actions(self => ({// Here actions are used to update the active state of the user data and the change would be implemented from the fron end side and would be replicated here in the store so it can be changed globallly and can be used further 
    setUniversity(value: string) {
        self.university = value
    },
    setEmail(value: string) {
        self.email = value
    },
   
    setFName(value: string) {
        self.fname = value
    },
    setLName(value: string) {
        self.lname = value
    },

    setCountry(value: string) {
        self.country = value
    },
    setOrganization(value: string) {
        self.organization = value
    },
    setDesc(value: string) {
        self.desc = value
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
            self.fname + self.university
        )
    }
}))


const MyMentor = MentorModel.create({
    //Here we are assigning the default data to all of our datafields 
    email:"",
    fname: "",
    lname:"",
    university: "",
    country: "",
    desc: "",
    organization: '',


})

export default MyMentor;

