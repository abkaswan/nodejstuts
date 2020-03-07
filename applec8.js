//TOPIC:object Factory..
//basically this is quite opposite to the shared state of module
//here each individuals can have there favMovie .To accompolish that we actually need a function that can create an object . yup this is called Object Factory.

//exporting both applec8rajbala and applec8abhi
//first the module where i entered the favMoie value means applec8rajbala
//then favMovie value would be automatic be copied into applec8abhi.interesting!
require('./applec8rajbala');
require('./applec8abhi');
//all are referencing the same one so more fast ,memory effecient
