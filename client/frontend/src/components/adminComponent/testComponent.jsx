import React from 'react';
import { useAuth } from '../../contexts/authContext';

function samp() {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      {isAuthenticated() ? (
        <div>
          <p>Welcome, you are logged in!</p>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
        </div>
      )}
    </div>
  );
}

export default samp;
