import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { EmailIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { error } = useAuth();
  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)

  const handleSubmit = e => {
    dispatch(
      register(e)
    )
  };

  return (
    <Formik
      initialValues={{ 
        name: '',
        email: '',
        password: '',
     }}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form >
          <Field name='name' >
            {({ field }) => (
              <InputGroup minW='400px'>
              <InputLeftElement pointerEvents='none'>
                <EmailIcon color='gray.300' />
              </InputLeftElement>
              <Input {...field} placeholder='name'  />
            </InputGroup>
            )}
          </Field>
          <Field name='email' >
            {({ field }) => (
              <InputGroup mt={4} minW='400px'>
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
          {error && <p style={{marginTop: 10}}><b>This email is busy. Try another one.</b></p>}
        </Form>
      )}
    </Formik>







    // <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
    //   <label className={css.label}>
    //     Username
    //     <input type="text" name="name" />
    //   </label>
    //   <label className={css.label}>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label className={css.label}>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Register</button>
    //   {error && <p style={{marginTop: 10}}><b>This email is busy. Try another one.</b></p>}
    // </form>
  );
};
