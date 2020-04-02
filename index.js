const Caroline = {
    name: "Caroline",
    dob: 2004,
    graduated: false,
    age: function() {
      return 2020 - this.dob;
    }
  };
  
const Homer = {
    name: "Homer",
    age: 32,
    family: {
        wife: {
            name: "Marge"
        },
        son: {
            name: "Bart"
        }
    }
};