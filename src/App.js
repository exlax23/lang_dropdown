import './App.css';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Blocktext from './components/Blocktext';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Blocktext />
    </div>
  );
}

export default App;
