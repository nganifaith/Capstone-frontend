import { useEffect } from 'react';
import './App.css';
import GlobalStyles from './GlobalStyles';
import useAuth from './hooks/useAuth';
import Routes from './Routes';

function App() {
  const { loading, loadCurrentUser } = useAuth();
  useEffect(() => {
    loadCurrentUser();
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      { !loading && <Routes />}
    </div>
  );
}

export default App;
