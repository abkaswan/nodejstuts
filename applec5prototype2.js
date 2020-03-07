//prototype part 2
//by the coding train
//might have sme errors

function Particle()
{
    this.x=100;
    this.y=99;
}
//so new keyword says that execute that function as a constructor function
//meaning make a new object and assign that object to the keyword this
//or use that object to fill the voids for this
var p=new Particle();

console.log(p);
var v;
/*these functionalities are only present in p5.js ok?
*/
/*function setup()
{
    createCanvas(600,300);
    p=new Particle();

    v= createVector(3,4);
    console.log(v.mag());
}
console.log(v.mag());
v.mult(2);

v.double();//not in prototype
//so add to prototype
p5.Vector.prototype.double=function()
{
    this.x*=2;
    this.y*=2;
    this.z*=2;

}
*/





