//CORE MODULES
//only learning one or two for now.
//first one is::::fs or file system module
var fs=require('fs');
fs.writeFileSync('corn.txt','hi corn ! how are you mate.');
console.log(fs.readFileSync('corn.txt'));
//so need to change into string here
console.log(fs.readFileSync('corn.txt').toString());

//now second path module
var path=require('path');
var websiteHome='Desktop/Bucjy//newBoston/index.html';
var websiteAbout='Desktop/Bucjy/newBoston/about.html';

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));

//three other cool things here

//need to stop it because setInterval would keep going like forever.
/*setInterval(function () {
console.log('rajbala');
},2000);
*/
console.log(__dirname);
console.log(__filename);