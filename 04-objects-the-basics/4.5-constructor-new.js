//https://javascript.info/constructor-new#tasks
//Task 1
let n = {};
function A() {
    return n
}
function B() {
    return n
}

let a = new A();
let b = new B();

alert( a == b ); // true

//task 2 Create new Calculator

function Calculator(){
    this.read = function(){
        let firstnumber = +prompt("first number");
        let secondnumber = +prompt("second number");

        this.a = firstnumber;
        this.b = secondnumber;
  };
    this.sum = function(){
        return this.a + this.b

    };
    this.mul = function(){
        return this.a*this.b
    };
}

let calculator = new Calculator();
calculator.read();


alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//task 3 Create new Accumulator

function Accumulator(number){
    this.value = number
    this.read = function(){
        this.add = +prompt("number?","1")
        this.value = this.value + this.add
        
    }    
    
}

let accumulator = new Accumulator(1); 

accumulator.read(); 
accumulator.read(); 

alert(accumulator.value); 
