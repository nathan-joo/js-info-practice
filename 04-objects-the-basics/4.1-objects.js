//https://javascript.info/object
//Task 1
let user = {
name : "John",
surname : "Smith",
};
user.name= "Pete"
delete user.name  // {Surname : "Smith"}


//task 2 Check for emptiness
let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false

function isEmpty(obj) {
for(let key in obj){
	return false;
	}
return true;
}


///task 3 Sum object properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let key in salaries){

    sum+=salaries[key];
    }
console.log(sum);

//task 4 Multiply numeric property values by 2
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(menu){
    for(let key in menu){
        if(typeof menu[key] === "number"){
            menu[key] *= 2;
        }
    }
}    
multiplyNumeric(menu);
console.log(menu)