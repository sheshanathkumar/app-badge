import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import { Angular, Gradle, Maven, Spring, SpringBoot } from './badges';
import {Home} from './home'

function App() {
  return (
   <>
    <BrowserRouter > 

    <Routes >
        <Route  path = "/" element={ <Home /> }  />
        <Route  path = "/spring" element={ <Spring /> }  />
        <Route path = "/springboot" element = {<SpringBoot />} />
        <Route path="/maven" element = {<Maven /> } />
        <Route path = "/gradle" element= {<Gradle />}  />
        <Route path='/angular' element={<Angular />} />

      </Routes>

    </BrowserRouter>
   </> 
  );
}

export default App;
