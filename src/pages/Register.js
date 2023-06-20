import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useAuth } from 'hooks';

const styles = {
  textError: {
    marginTop: 10,
  },
};

export default function Register() {
  const { error } = useAuth();

  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
      {error && <p style={styles.textError}><b>This email is busy. Try another one.</b></p>}
    </div>
  );
}
