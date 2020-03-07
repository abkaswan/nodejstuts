var movies=require('./applec8moduleTest');
//console.log(movies);  ->here its a function object
//console.log(movies());
var abhiMovies=movies();//->here it converts to Object object
//console.log(abhiMovies);
abhiMovies.favMovie='DilwaleDenge';
console.log('my fav movie basically->'+abhiMovies.favMovie+' cause i love rajbala.');