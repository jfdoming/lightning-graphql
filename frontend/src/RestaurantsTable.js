import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  Spinner,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useQuery, useMutation } from '@apollo/client';
import { GET_RESTAURANTS, ADD_RESTAURANT, DELETE_RESTAURANT } from './graphql';
import AddRestaurantModal from './AddRestaurantModal';

const headings = [
  'Name',
  'Address',
  'Type',
  'Budget',
  'Description',
  'Rating',
  'Action',
];

const RestaurantsTable = () => {
  // local state to store the restaurants
  const [restaurants, setRestaurants] = useState(null);

  /*
   * useQuery is a React hook that executes a GraphQL query and returns the result.
   */
  useQuery(GET_RESTAURANTS, {
    fetchPolicy: 'cache-and-network',
    onCompleted(data) {
      setRestaurants(data.restaurants);
    },
  });

  /*
   * useMutation is a React hook that executes a GraphQL mutation
   * refetchQueries is an array of queries to refetch after the mutation is executed
   */
  const [deleteRestaurant] = useMutation(DELETE_RESTAURANT, {
    refetchQueries: [{ query: GET_RESTAURANTS }, 'GetRestaurants'],
  });
  const [addRestaurant] = useMutation(ADD_RESTAURANT, {
    refetchQueries: [{ query: GET_RESTAURANTS }, 'GetRestaurants'],
  });

  return (
    <TableContainer>
      <AddRestaurantModal addRestaurant={addRestaurant} />
      <Table variant="striped">
        <Thead>
          <Tr>
            {headings.map((heading, index) => (
              <Th key={index}>{heading}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {restaurants == null ? (
            <Spinner />
          ) : (
            restaurants.map((restaurant, index) => (
              <Tr key={index}>
                <Td>{restaurant.name}</Td>
                <Td>{restaurant.address}</Td>
                <Td>{restaurant.type}</Td>
                <Td>{restaurant.budget}</Td>
                <Td>{restaurant.description}</Td>
                <Td isNumeric>{restaurant.rating}</Td>
                <Td>
                  <IconButton
                    aria-label="delete row"
                    icon={<DeleteIcon />}
                    onClick={() => {
                      /*
                      call the deleteRestaurant mutation and update the local state once done
                    */
                      deleteRestaurant({
                        variables: { id: restaurant.id },
                      });
                    }}
                  />
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default RestaurantsTable;
