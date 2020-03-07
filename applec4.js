//this keyword in nodeJS
//just refers to the thing that called it.

var rajbala = {
    printFirstName:function(){
        console.log('rajbala is my life.');
        console.log(this == rajbala);
    }
};
rajbala.printFirstName();//gonna be true coz rajbala itself called it
//the default calling function is global
function doSomethingWorthless() {
    console.log('worthless piece of shit you are...');
    console.log(this==rajbala)//false
    console.log(this==global);//true


}
//here this dozSomethingWorthless is not called by any object
//but called by u can say by entire program.
doSomethingWorthless();