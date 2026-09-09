import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { First } from './component/first';
import { MapDemo1 } from './component/MapDemo1';
import { MapDemo2 } from './component/MapDemo2';
import { Second } from './component/Second';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './component/Navbar';
import { UseState1 } from './component/UseState1';
import { HomePage } from './component/hotstar/HomePage';
import { Movies } from './component/hotstar/Movies';
import { Watch } from './component/hotstar/Watch';
import { Shows } from './component/hotstar/Shows';
import { UseMemo1 } from './component/UseMemo1';
import { FormDemo1 } from './component/form/FormDemo1';
import { FormDemo2 } from './component/form/FormDemo2';
import { FormDemo3 } from './component/form/FormDemo3';
import { ApiDemo1 } from './component/api/ApiDemo1';
import { ApiDemo2 } from './component/api/ApiDemo2';
import { PostApi1 } from './component/api/PostApi1';
import { PostApi2 } from './component/api/PostApi2';
// import './App.css'


function App() {
  const [count, setCount] = useState(0)

  let a = 10;



  return (
    <div>
      


      {/* <First/> */}
      {/* <MapDemo1/> */}
      {/* <MapDemo2/> */}

      <Navbar/>
      <Routes>
        <Route path="/second" element={<Second/>}></Route>
        <Route path='/usestate1' element={<UseState1/>}></Route>
        <Route path='/' element={<HomePage/>}/> 
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/watch/:name' element={<Watch/>}/>
        <Route path='/shows' element={<Shows/>}></Route>
        <Route path='/usememo' element={<UseMemo1/>}/>
        <Route path='/form1' element={<FormDemo1/>}/>
        <Route path='/form2' element={<FormDemo2/>}/>
        <Route path='/form3' element={<FormDemo3/>}/>
        <Route path='/api1' element={<ApiDemo1/>}/>
        <Route path='/api2' element={<ApiDemo2/>}/>
        <Route path='/post1' element={<PostApi1/>}/>
        <Route path='/post2' element={<PostApi2/>}/>
      </Routes>
    </div>
  )
}

export default App
