import { Routes, Route } from 'react-router-dom';

import { Navbar, Home, LogReg } from './Components/Index';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route
          path='/'
          element={<Home />}
        ></Route>
        <Route
          path='/login'
          element={<LogReg />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
