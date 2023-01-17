import db from "../db"

/**
 * while our business logic is really simple so far, it is beneficial to keep it apart from the resolver logic
 * separation of concerns leads to maintainable code as the application grows, and also makes the code easier to unit test
 */

function getRestaurant(id) {
  return db.findById(id);
}

function getRestaurants() {
  return db.findAll();
}

function createRestaurant(
  name,
  address,
  type,
  budget,
  description,
  rating
) {
  return db.add({
    name,
    address,
    type,
    budget,
    description,
    rating, 
  })
}

function updateRestaurant(
  id,
  name,
  address,
  type,
  budget,
  description,
  rating
) {
  return db.update(id, {
      name,
      address,
      type,
      budget,
      description,
      rating,
  });
}

async function deleteRestaurant(id) {
  return db.delete(id);
}

const restaurantService = {
  getRestaurant,
  getRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
export default restaurantService;
