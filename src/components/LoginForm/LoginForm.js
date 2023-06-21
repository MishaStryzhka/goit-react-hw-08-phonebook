import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { EmailIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)

  const handleSubmit = e => {
    dispatch(
      logIn(e)
    );
  };

  return (
    <Formik
      initialValues={{ 
        email: '',
        password: '',
     }}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form >
          <Field name='email' >
            {({ field }) => (
              <InputGroup minW='400px'>
              <InputLeftElement pointerEvents='none'>
                <EmailIcon color='gray.300' />
              </InputLeftElement>
              <Input {...field} placeholder='email'  />
            </InputGroup>
            )}
          </Field>
          <Field name='password' >
            {({ field }) => (
              <InputGroup mt={4} size='md'>
              <Input
              {...field}
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            )}
          </Field>
          <Button
            mt={8}
            mx='calc(50% - 40px)'
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};
