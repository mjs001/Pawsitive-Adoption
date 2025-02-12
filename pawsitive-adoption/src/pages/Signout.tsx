import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { fetchApi } from '../utils/fetchApi';
import { Link } from 'react-router';
import RetrieveFormDataLocal from '../utils/RetrieveFormDataLocal';
import Header from '../components/Header';
export default function Signout() {
  let credentials = RetrieveFormDataLocal();
  const [loggedIn, setLoggedIn] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (credentials !== null) {
      fetchApi
        .post('/auth/logout', credentials)
        .then((res) => {
          setLoggedIn(false);
          setLoading(false);
        })
        .catch((err) => console.error(err));
      localStorage.removeItem('formData');
      localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
    }
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : !loggedIn ? (
        <p>
          You have sucessfully logged out. Click <Link to='/signin'>here</Link> to sign in.
        </p>
      ) : (
        <p>
          An error occurred while trying to sign you out. Please refresh the page and try again.
        </p>
      )}
    </>
  );
}
