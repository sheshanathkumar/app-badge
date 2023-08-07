import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Angular, C, Clojure, Cplus, Csharp, Css, Dart, Go, Gradle, Haskel, Html, JavaScript, Json, Kotlin, Latex,
  Leaflet, Lua, Maven, Node, Npm, Numpy, OpenJdk, Pandas, Pearl, Php, Plsql, Python, R, Ruby, Scratch, Spring, SpringBoot, Sql, Swift, TensorFlow, Xml
} from './badges';

import { Home } from './home'

function App() {
  return (
    <>
      <BrowserRouter >

        <Routes >
          <Route path="/" element={<Home />} />
          <Route path='/angular' element={<Angular />} />
          <Route path='/c' element={<C />} />
          <Route path='/clojure' element={<Clojure />} />
          <Route path='/cplus' element={<Cplus />} />
          <Route path='/csharp' element={<Csharp />} />
          <Route path='/css' element={<Css />} />
          <Route path='/dart' element={<Dart />} />
          <Route path='/go' element={<Go />} />
          <Route path='/gradle' element={<Gradle />} />
          <Route path='/haskel' element={<Haskel />} />
          <Route path='/html' element={<Html />} />
          <Route path='/javascript' element={<JavaScript />} />
          <Route path='/json' element={<Json />} />
          <Route path='/kotlin' element={<Kotlin />} />
          <Route path='/latex' element={<Latex />} />
          <Route path='/leaflet' element={<Leaflet />} />
          <Route path='/lua' element={<Lua />} />
          <Route path='/maven' element={<Maven />} />
          <Route path='/node' element={<Node />} />
          <Route path='/npm' element={<Npm />} />
          <Route path='/numpy' element={<Numpy />} />
          <Route path='/openjdk' element={<OpenJdk />} />
          <Route path='/pandas' element={<Pandas />} />
          <Route path='/pearl' element={<Pearl />} />
          <Route path='/php' element={<Php />} />
          <Route path='/plsql' element={<Plsql />} />
          <Route path='/python' element={<Python />} />
          <Route path='/r' element={<R />} />
          <Route path='/ruby' element={<Ruby />} />
          <Route path='/scratch' element={<Scratch />} />
          <Route path='/spring' element={<Spring />} />
          <Route path='/springboot' element={<SpringBoot />} />
          <Route path='/sql' element={<Sql />} />
          <Route path='/swift' element={<Swift />} />
          <Route path='/tensorflow' element={<TensorFlow />} />
          <Route path='/xml' element={<Xml />} />


        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
