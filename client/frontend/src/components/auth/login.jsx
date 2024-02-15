import { useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import { useNavigate  } from 'react-router-dom';

function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLoginClick = async () => {
    try {
      const result = await login({ username, password });
  
      if (result.success) {
        navigate('/dashboard')
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Unexpected error occurred');
    }
  };
  
  

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLoginClick}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;