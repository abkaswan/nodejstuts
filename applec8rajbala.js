var movies=require('./applec8moduleTest');
//console.log(movies);  ->here its a function object
//console.log(movies());
var rajbalaMovies=movies();//->here it converts to Object object
//console.log(rajbalaMovies);
rajbalaMovies.favMovie='PAINandGAIN';
console.log('rajbala fav movie is:'+rajbalaMovies.favMovie);
