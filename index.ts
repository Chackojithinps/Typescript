// ---------------------------------//infer types;

let Name = "jithin";
Name = "nikhil";

// let Num=10;
// Num = "kiran"
// ---------------------------------------// Defining Types (explicit types)

let userName:String = "arjun"
let userAge:Number = 10
let isBoolean:boolean = true
let arr:String[] = ["hi","helllo"]
let arr1:number[] = [30,59,23,24,464]
// let arr2:[] = [30,350]   --->this is also expecting a empty error.
// let obj:{name:string,age:number} = {name:"jithin",age:12}

// -----------------------------------//interface

interface Details {
    name:string;age:number;getName:()=>void
}

let obj:Details = {
    name:"jithin",
    age:12,
    getName(){
        console.log(this.name)
    }
}
// let obj1:Details = {name:"kiran",age:12}


// -----------------------//type:

type Info = {
    name:string;
    age:number;
    getName:()=>void
}

let Person:Info = {
    name:"kirna",
    age:10,
    getName(){
        console.log(this.name)
    }
}

//-------------------------Union /optinal

let UserName:String | Number = 10;
UserName= "hello"

let str:(String | Number | Boolean)[] = ["hello",20,39,true]

type Info1 = {
    name:string | Number;
    age?:number;  //-------------->optional
    getName:()=>void
}

let Person1:Info1 = {
    name:45,
    // age:10,
    getName(){
        console.log(this.name)
    }
}