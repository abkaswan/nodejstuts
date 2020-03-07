//LEC3:UNDERSTANDING REFERENCES TO THE OBJECTS
var Abhishek={
    favFood: 'burger',
    favMovie: 'Chappy'
};
//everything is a reference
//that's what people mean that if u think that [newVar=var]
//will give u a copy of the var then you r wrong it's just a reference to the var.
var rajbala =Abhishek;
rajbala.favFood='Me,baby';
console.log(Abhishek.favFood);
//how we would actually copy gonna discuss later.
//difference between two equal signs and three equal signs.
console.log(19=='19');//gonna print true coz only checks for value
console.log(19==='19');//false coz compare value and types[string and int]