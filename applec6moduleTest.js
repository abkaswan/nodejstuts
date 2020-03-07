/*
whenever we are exporting this below thing being called by nodeJS basically
module.exports  {};


function printAvatar()
{
    console.log("Avatar: Rajbala's Fav");
}
function printChappie(){
    console.log('Chappie: noone saw this');
}
//EXPORTING
//creating a variable called avatar
//asssume i only want to use printAvatar fn

module.exports.avatar=printAvatar;
module.exports.chappie=printChappie;
*/

//or

module.exports={
    printAvatar1:function()
    {
        console.log("Avatar: Rajbala's Fav");
    },
    printChappie:function(){
        console.log('Chappie: noone saw this');
    },
    favMovie:'Matrix'
}