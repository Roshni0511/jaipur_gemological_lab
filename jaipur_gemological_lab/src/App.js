
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Service from './Pages/Service';
import About_us from './Pages/About_us';

function App() {
  return (
  <>
            <Routes>
               <Route path='/' element={<Home />}/>



               <Route path='/Service' element={<Service />}/>
                 <Route path='/About_us' element={<About_us />}/>
            </Routes>
  </>
  );
}

export default App;
