import { Outlet } from "react-router-dom";
import NavBarPanel from "./NavBarPanel";
import Store from "../Store/Store";
import { Provider } from "react-redux";

const RootLayout = ()=>{
  return(
    <>
    <Provider store={Store} >
    <NavBarPanel/>
    <main>
     
    <Outlet/>
    </main>
    </Provider>
   
    </>
  )
}

export default RootLayout;