import { gql } from '@apollo/client';

export const GET_RESTAURANTS = gql`
  query GetRestaurants {
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
`;

export const ADD_RESTAURANT = gql`
  mutation AddRestaurant($restaurant: CreateRestaurantInput!) {
    createRestaurant(restaurant: $restaurant) {
      id
    }
  }
`;

export const DELETE_RESTAURANT = gql`
  mutation DeleteRestaurant($id: ID!) {
    deleteRestaurant(id: $id)
  }
`;
