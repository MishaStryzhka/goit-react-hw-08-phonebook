import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Box, Flex, Heading, VStack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import phonebookImage from '../image/Phone-Book.jpg';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <Flex>
        <VStack
          w="100%"
          h="calc(100vh - 80px)"
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="center"
          p="4"
        >
          <Heading as="h1" size="2xl" noOfLines={1}>
            Register in "Phonebook".
          </Heading>
          <Image boxSize="300px" src={phonebookImage} alt="" />
        </VStack>
        <Box
          w="100%"
          h="calc(100vh - 80px)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="4"
        >
          <RegisterForm />
        </Box>
      </Flex>
    </div>
  );
}
