class human{
    age=13;
    #wt=80;
    ht=180;

    walking(){
        console.log("I am walking",this.#wt);
    }
    running(){
        console.log("I am running");
    }
    //to access private variable outsiude the class we create getter and setter 
    get fetchweight(){      //-->fetch the value --> getter
        return this.#wt;
    }
    set modifyweight(value){ //-->modify the value  --> setter
        this.#wt=value;
    }
}
let obj=new human(45);
console.log(obj.age);
obj.walking();
// console.log(obj.#wt);// we can't access the private variable or function outside the class

let we=obj.fetchweight;
console.log(we);



console.log(obj.modifyweight=45);
console.log(obj.fetchweight);

//

//constructors

class human{
    age;
    #wt=80;
    ht=180
    constructor(newage,newheight){
        this.age=newage;
        this.ht=newheight;

    }
}
let obj1=new human(50,190);
console.log(obj1.ht);