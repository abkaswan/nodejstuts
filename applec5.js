//prototypes in nodeJS
//basically here we tell that how to use a prototype.
//just know one thing that objects has keys referred as properties
//and functions known as method.
function User()
{
    this.fname='';
    this.score=100;
    this.givelife=function giveLife(playerName){
        playerName.score+=1;
        console.log(this.fname+" gave one life to "+playerName.fname);
    };
}
var a=new User();
var b=new User();
a.fname='abhishek';
b.fname='Rajbala';
console.log(a);
a.givelife(b);
console.log('Score of Rajbala:'+b.score);
//you can add functions to all objects
User.prototype.uppercut=function(playerName) {
    playerName.score-=3;
    console.log(this.fname+" took three life from "+playerName.fname);}
b.uppercut(a);
console.log('score of Abhishek:'+a.score+' she is a cheater');
//a.uppercut(b);
//console.log('score of Rajbala:'+b.score+' he is also a cheater');

//you can add properties to all objects.
User.prototype.magic='Kalank';

console.log(a.fname+' tu hai '+a.magic +' '+ b.fname+' tu bhi yahi hai ek '+b.magic);