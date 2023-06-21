import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Flex, Box, Heading, Image, VStack } from '@chakra-ui/react';
import phonebookImage from '../image/Phone-Book.jpg'

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <Flex >
        <VStack w='100%' h='calc(100vh - 80px)' display='flex' direction='row' alignItems='center' justifyContent='center' p='4' >
          <Heading as='h1' size='2xl' noOfLines={1}>
          Log in "Phonebook".
          </Heading>
          <Image boxSize='300px' src={phonebookImage} alt='' />
        </VStack>
        <Box w='100%' h='calc(100vh - 80px)' display='flex' alignItems='center' justifyContent='center' p='4' >
        <LoginForm />
        </Box>
      </Flex>
    </div>
  );
}
