import { Routes, Route } from 'react-router-dom';

import {
  Navbar,
  Home,
  LogReg,
  About,
  Gear,
  Blog,
  Meetups,
  Profile,
} from './Components/Index';

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
          path='/about'
          element={<About />}
        ></Route>
        <Route
          path='/gear'
          element={<Gear />}
        ></Route>
        <Route
          path='/blog'
          element={<Blog />}
        ></Route>
        <Route
          path='/meetups'
          element={<Meetups />}
        ></Route>
        <Route
          path='/profile'
          element={<Profile />}
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
