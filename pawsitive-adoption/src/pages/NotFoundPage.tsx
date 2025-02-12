import { Link } from 'react-router';
import { useAuth } from '../context/AuthContext';
export default function NotFoundPage() {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      <h1>404 Not Found.</h1>
      {isAuthenticated ? <Link to='/'>Home</Link> : <Link to='/signin'>Signin</Link>}
    </div>
  );
}
