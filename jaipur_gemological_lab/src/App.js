
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Service from './Pages/Service';

function App() {
  return (
  <>
            <Routes>
               <Route path='/' element={<Home />}/>



               <Route path='/Service' element={<Service />}/>
            </Routes>
  </>
  );
}

export default App;
