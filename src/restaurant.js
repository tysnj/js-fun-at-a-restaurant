function createRestaurant(restaurant){
  return restaurant = {
    name:restaurant,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  };
}

function addMenuItem(restaurant, menuItem) {
  // if bbqpizza is a lunch item
  // push the item to the menu object of the restaurant var
  if (menuItem.type === "breakfast" && !restaurant.menus.breakfast.includes(menuItem)) {
    restaurant.menus.breakfast.push(menuItem);
  } else if (menuItem.type === "lunch" && !restaurant.menus.lunch.includes(menuItem)) {
  restaurant.menus.lunch.push(menuItem);
} else if (menuItem.type === "dinner" && !restaurant.menus.dinner.includes(menuItem)){
    restaurant.menus.dinner.push(menuItem);
  }
}

function removeMenuItem(restaurant, menuItem, mealType){
// console.log("the arguments are --->> ",restaurant, menuItem, mealType);
// console.log("the menus are ---->>",restaurant.menus);
 for (i=0; i<restaurant.menus[mealType].length; i++){
if (mealType === "breakfast" && restaurant.menus.breakfast[i].name === menuItem) {
  restaurant.menus.breakfast.splice(i,1);
  return `No one is eating our ${menuItem} - it has been removed from the ${mealType} menu!`;
} else if (mealType === "lunch" && restaurant.menus.lunch[i].name === menuItem) {
  restaurant.menus.lunch.splice(i,1);
  return `No one is eating our ${menuItem} - it has been removed from the ${mealType} menu!`;
} else if (mealType === "dinner" && restaurant.menus.dinner[i].name === menuItem) {
  restaurant.menus.dinner.splice(i,1);
  return `No one is eating our ${menuItem} - it has been removed from the ${mealType} menu!`;
} else continue;
} return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`;
 console.log("the error is:", error);
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
