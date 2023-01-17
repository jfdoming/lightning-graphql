import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useFormik } from 'formik';

/*
 * This component is a modal form that adds a new restaurant to our database
 */
export default function AddRestaurantModal({ addRestaurant }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (values, actions) => {
      /*
       * addRestaurant is the mutation function that is passed in as a prop
       */
      addRestaurant({
        variables: {
          restaurant: {
            ...values,
          },
        },
      }).catch(error => {
        alert(error);
      });
      actions.resetForm();
      onClose();
    },
  });

  return (
    <Flex mb={2} justifyContent="flex-end">
      <Button onClick={onOpen}>New Restaurant</Button>
      <form>
        <Modal onClose={onClose} isOpen={isOpen} size={'lg'} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a new restaurant</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Address</FormLabel>
                <Input
                  id="address"
                  name="address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Type</FormLabel>
                <Input
                  id="type"
                  name="type"
                  onChange={formik.handleChange}
                  value={formik.values.type}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Budget</FormLabel>
                <Input
                  id="budget"
                  name="budget"
                  placeholder="LOW, MEDIUM, HIGH"
                  onChange={formik.handleChange}
                  value={formik.values.budget}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Input
                  id="description"
                  name="description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Rating</FormLabel>
                <Input
                  id="rating"
                  name="rating"
                  placeholder="1-5"
                  onChange={formik.handleChange}
                  value={formik.values.rating}
                  type="number"
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" mr={3} onClick={formik.handleSubmit}>
                Confirm
              </Button>
              <Button colorScheme={'blue'} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </form>
    </Flex>
  );
}
