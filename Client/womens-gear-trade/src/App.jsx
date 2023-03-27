import { Routes, Route } from 'react-router-dom';

import {
  Navbar,
  Home,
  LoginHere,
  About,
  Gear,
  Blog,
  Social,
  Profile,
  Register,
} from './Components/index';

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
          path='/social'
          element={<Social />}
        ></Route>
        <Route
          path='/profile'
          element={<Profile />}
        ></Route>
        <Route
          path='/login'
          element={<LoginHere />}
        ></Route>
        <Route
          path='/signup'
          element={<Register />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
