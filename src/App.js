import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='about' element={<About></About>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
