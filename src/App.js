import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import { Gradle, Maven, Spring, SpringBoot } from './badges';
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

      </Routes>

    </BrowserRouter>
   </> 
  );
}

export default App;
