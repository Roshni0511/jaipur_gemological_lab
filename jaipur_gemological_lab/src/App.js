
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About_us from './Pages/About_us';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import VerifyCertificate from './Pages/VerifyCertificate';

function App() {
  return (
  <>
            <Routes>
               <Route path='/' element={<Home />}/>
                <Route path='/About_us' element={<About_us />}/>
               <Route path='/Service' element={<Service />}/>
               <Route path='/VerifyCertificate' element={<VerifyCertificate />}/>
               <Route path='/Contact' element={<Contact />}/>
            </Routes>
  </>
  );
}

export default App;
