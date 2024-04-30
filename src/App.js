import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Product from './Components/Product';
import {createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Cart from './Components/Cart';
import RouteLayout from './Components/RootLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
<Route path="/" element={<RouteLayout/>}>
  <Route index element={<Dashboard/>}></Route>
  <Route path="/Cart" element={<Cart/>}></Route>
</Route>
  ))
  return (
    <div className="App">
 
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
