import React from 'react';
import Navbar from './components/navbar';
import Routes from './routes/routes';
import GlobalStyles from './content/styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Navbar/>
      <Routes/>
    </div>
  );
}

export default App;
