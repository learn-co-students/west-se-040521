class Teacher extends Person {

    constructor(name, age, jobTitle){
        super(name, age)
        this.jobTitle = jobTitle
    }

    teach(){
        return `${this.name} is explaining a concept.`
    }
}