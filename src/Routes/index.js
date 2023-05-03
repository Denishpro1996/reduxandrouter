import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Another from "../Another";
export const Router = createBrowserRouter([
    {
        path: "/",
        element : <Home/>,

    },
    {
        path:"abt",
        element:<About/>
    },
    {
        path:"xyz",
        element:<Another/>
    }

])