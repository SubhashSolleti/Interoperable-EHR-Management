import "./App.css";
import BaseRoute from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <BaseRoute />
      </AuthProvider>
    </Router>
  );
}

export default App;
