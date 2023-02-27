import './App.css';
import { Login, Signup } from './Components/AuthForm';

function App() {
  return (
    <div className='App'>
      Hello World!
      <div>{Login}</div>
      <div>{Signup}</div>
    </div>
  );
}

export default App;
