//https://javascript.info/object-methods#tasks
//task 1 Using "this" in object literal
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name );
// it throws an error because "new" is not called before makeUser(), so "this" inside the function is undefined, resulting in error when trying to read undefined.name.


//task 2 Create a calculator

let calculator = {
  read(){
    let firstnumber = +prompt("first number");
    let secondnumber = +prompt("second number");

    this.a = firstnumber;
    this.b = secondnumber;
  },
  sum(){
    let result = this.a + this.b;
    return result;
  },
   mul(){
    let result = this.a * this.b;
    return result;
  }
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

//task 3 Chaining
let ladder = {
  step: 0,
  up() {
    this.step++;
return this;
  },
  down() {
    this.step--;
return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
return this;
  }
};