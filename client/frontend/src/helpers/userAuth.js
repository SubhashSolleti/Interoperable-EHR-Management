import decode from 'jwt-decode';

const checkAuth = () => {
  const token = localStorage.getItem('healthcare_app');
  
  if (!token) return false;

  try {
    const { exp, role } = decode(token);

    if (exp < new Date().getTime() / 1000) {
      return false; // Token expired
    }

    const allowedRoles = ['patient', 'assistant_doctor', 'doctor'];
    if (!allowedRoles.includes(role)) {
      return false;
    }
  } catch (e) {
    return false; 
  }

  return true;
};

export default checkAuth;
