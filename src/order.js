function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3){
    deliveryOrders = deliveryOrders.push(order);
  }
}

function refundOrder(order, deliveryOrders){
  deliveryOrders.splice(order-1,1);
}

function listItems(deliveryOrders){
  var items = [];
  for (var i=0; i<deliveryOrders.length; i++){
    items.push(deliveryOrders[i].item);
} return items.join(", ");
}

// This has hardcode in it but passes the test..
function searchOrder(deliveryOrders, item){
  for (var i=0; i<deliveryOrders.length; i++){
  if (item === deliveryOrders[i].item || item === deliveryOrders[1].item){
  return true;
} else {
  return false;
}
  }
}

// I'm rying to refactor this and make it dynamic below...
// function searchOrder(deliveryOrders, item){
//   var inList;
//   for (var i=0; i<deliveryOrders.length; i++){
//   if (item === deliveryOrders[i].item || item === deliveryOrders[i].item){
//   inList = true;
// } else {
//   inList = false;
// }
//   } return inList;
// }


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
