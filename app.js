//LEC1:BASIC CONCEPTS
var person={
    fname:'Abhishek',
    lname:'Rajbala',
    age:20
};
//there is no need to write name for a variable while using function
//but it can be used in the case we want to use anther function
// where need to pass this function as ex: settimeout
var printit=function(){
    console.log('i am happy , HOW are you Rajabala!');
};
printit();
setTimeout(printit,5000);
console.log(person);
function addNumber(a,b)
{
    return a+b;
}
//worthless would be undefined because we didn't return anything in there.
//undefined will be there until we return something from there.
function worthless()
{
    console.log('hey buddy!');
}
console.log(addNumber(3,6));
console.log(worthless());