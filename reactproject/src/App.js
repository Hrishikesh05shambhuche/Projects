import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Landing from './Component/Landing';
import AdminLogin from './Component/AdminLogin';
import UserLogin from './Component/UserLogin';
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    );
}
export default App;