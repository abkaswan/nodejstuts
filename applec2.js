//LEC2:HANDLING MULTIPLE REQUESTS
function placeInOrder(orderNumber) {
    console.log('customer number:', orderNumber);
    cookAndDeliveryFood(function () {
     console.log('Delivered food Order:', orderNumber);
    });
}
//simulate a 5s operation
function cookAndDeliveryFood(callback)
{
    setTimeout(callback, 5000);
}
//simulate users web request
/*
we are able to perform all 5 requests at the same time and this is what great about nodeJS
it works in rea time.
now computer program runs top down so you must be thinking well then how the fuck it's working
<<<ok so first for ordernumber 1 is printing customerNo then it went to cookandDelivery function
and here settimeout function is not saying that wait for 5s and then print delivered food order
instead we are scheduling callback for 5s ok! means it's saying that you wait 5s when you
are prepared just call me back till then i'm gonna executing other function calls>>>
*/
placeInOrder(1);
placeInOrder(2);
placeInOrder(3);
placeInOrder(4);
placeInOrder(5);
placeInOrder(6);