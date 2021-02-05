function nameMenuItem(menuItemName){
  return `Delicious ${menuItemName}`;
}

function createMenuItem(name, price, type){
  return {name: name, price: price, type: type};
}

function addIngredients(item, ingredients){
  if (ingredients.includes(item)){
  } else return ingredients = ingredients.push(item);
}

function formatPrice(formattedPrice){
  return "$" + formattedPrice;
}

function decreasePrice(decreasedPrice){
  return decreasedPrice * .9;
}

function createRecipe(title, ingredients, type){
  return {title: title, ingredients: ingredients, type: type};
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
