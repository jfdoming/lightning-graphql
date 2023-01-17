
## Sample GraphQL queries/mutations

### Fetching all restaurants
```
query TestGetRestaurants {
  restaurants {
    id
    name
    address
    type
    budget
    description
    rating
  }
}
```

### Get restaurant by ID
```
query TestGetRestaurantByID {
  restaurant(id: "ac03faec-a163-4642-90b5-ec2636ef30ae") {
    id
    name
    address
    type
    budget
    description
    rating
  }
}
```

### Create a new restaurant
```
mutation TestAddRestaurant {
  createRestaurant(restaurant: {
    name: "Champa Kitchen",
    address: "21 King St N, Waterloo, ON N2J 2W6",
    type: "Southeast Asian",
    budget: MEDIUM,
    description: "goated",
    rating: 5
  }) {
    id
    name
    description
  }
}
```

### Update an existing restaurant
```
mutation TestUpdateRestaurant {
  updateRestaurant(restaurant: {
    id: "ac03faec-a163-4642-90b5-ec2636ef30ae",
    description: "decent poke",
  }) {
    id
    name
    address
    type
    budget
    description
    rating
  }
}
```

### Delete a restaurant
```
mutation TestDeleteRestaurant {
  deleteRestaurant(id: "ac03faec-a163-4642-90b5-ec2636ef30ae")
}
```

