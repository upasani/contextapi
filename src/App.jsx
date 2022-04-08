import logo from './logo.svg';
import './App.css';
import { Form1 } from './Component/Form1';
import { Form2 } from './Component/Form2';
import { useReducer } from 'react';
import {Routes,Route} from 'react-router-dom'
import { Users } from './Component/Users';



function App() {

  return (
    
    <div className="App">
    <Routes>
      <Route path='/' element={"Welcome to home route"}></Route>
     <Route path='/registration/one' element={<Form1/>}></Route>
     <Route path='/registration/two' element={<Form2/>}></Route>
     <Route path='/users' element={<Users/>}></Route>

    </Routes>
     
     
    </div>

    
  );
}

export default App;
