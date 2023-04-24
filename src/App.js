import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./pages/Main";
import Photos from "./pages/Photos";
import Navbar from './components/NavBar';
import PhotoDetail from './components/PhotoDetail';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="photos" element={<Photos/>}/>
        </Route>

        <Route path={"photos/:id"} element={<PhotoDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
