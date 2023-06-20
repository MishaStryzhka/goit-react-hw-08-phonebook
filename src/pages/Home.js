import { Helmet } from 'react-helmet';
import phonebookImage from '../image/Phone-Book.jpg'

const styles = {
    container: {
      minHeight: 'calc(100vh - 100px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
    },
  };


  
  export default function Home() {
    return (
      <div style={styles.container}>
        <Helmet>
        <title>Home</title>
        </Helmet>
        <img src={phonebookImage} alt=''></img>
        <h1>Your personal phone book.</h1>
      </div>
    );
  }
  