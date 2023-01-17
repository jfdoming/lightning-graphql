import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import RestaurantsTable from './RestaurantsTable';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center">
        <Grid p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack mt={24}>
            <Heading size="xl">Restaurants in Waterloo</Heading>
            <RestaurantsTable />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
