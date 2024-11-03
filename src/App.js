import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect } from 'react';
import Portfolio from './components/Portfolio';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

function App() {
  useEffect(() => {
    document.title = "Matthew Carmichael's Portfolio"
  }, []);

  return (
    <Portfolio />
  );
}

export default App;
