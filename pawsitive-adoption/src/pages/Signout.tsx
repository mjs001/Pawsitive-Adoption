import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { fetchApi } from '../utils/fetchApi';
import { Link } from 'react-router';
import RetrieveFormDataLocal from '../utils/RetrieveFormDataLocal';
import Navbar from '../components/Navbar';
export default function Signout() {
  let credentials = RetrieveFormDataLocal();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (credentials !== null) {
      setTimeout(() => {}, 1000);
      fetchApi
        .post('/auth/logout', credentials, { withCredentials: true })
        .then((res) => {
          setLoading(false);
        })
        .catch((err) => console.error(err));
      localStorage.removeItem('formData');
      localStorage.setItem('isAuthenticated', JSON.stringify(false));
    }
  }, []);
  let isAuthenticated = localStorage.getItem('isAuthenticated');
  isAuthenticated = JSON.parse(isAuthenticated);
  return (
    <>
      <Navbar />
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : !isAuthenticated ? (
          <p>
            You have sucessfully logged out. Click <Link to='/signin'>here</Link> to sign in.
          </p>
        ) : (
          <p>
            An error occurred while trying to sign you out. Please refresh the page and try again.
          </p>
        )}
      </div>
    </>
  );
}
