import logo from './logo.svg';
import './App.css';

// importamos los componentes

import CompShowVehiculos from './vehiculos/ShowVehiculos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CompShowVehiculos></CompShowVehiculos>
    </div>
  );
}

export default App;
