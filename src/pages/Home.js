import { Helmet } from 'react-helmet';
import phonebookImage from '../image/Phone-Book.jpg'
import { Container, Heading, Image } from '@chakra-ui/react';

  export default function Home() {
    return (
      <Container minH='calc(100vh - 80px)' display='flex' alignItems='center' flexDirection='column' justifyContent='center'>
        <Helmet>
        <title>Home</title>
        </Helmet>
        <Image boxSize='300px' src={phonebookImage} alt='' />
        <Heading>Your personal phone book.</Heading>
      </Container>
    );
  }
  