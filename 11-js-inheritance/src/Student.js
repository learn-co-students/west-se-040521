class Student extends Person {

    constructor(name, age, graduationDate){
        super(name, age)
        this.graduationDate = graduationDate
    }
    
    study(){
        return `${this.name} is hitting the books!`
    }
}