import React, { lazy, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurandMenu";
// import Grocery from "./components/Grocery";
import { Suspense } from "react";
import UserContext from "./utils/UserContext";

const Grocery = lazy( () => import("./components/Grocery"))
const About = lazy( () => import("./components/About"))

const AppLayout = () => {

    const [userName,setUserName] = useState();
    // authentication
    useEffect( () => {
        //  make Api call for authentication
            const data = {
                name : "jibru",
            };
            setUserName(data.name)
    },[]);

    return (
        <UserContext.Provider value={{ loggedInUser : userName}}>
            <div className="app">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element :<Suspense fallback= {
                    <h1>Loading...</h1>
                }><About/></Suspense> 
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/grocery",
                element : <Suspense fallback= {
                    <h1>Loading...</h1>
                }><Grocery/></Suspense> 
            },
            {
                path : "/restaurants/:resId",
                element : <RestaurantMenu/>
            },

        ],
        errorElement : <Error/>,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout></AppLayout>);

root.render(<RouterProvider router={appRouter} />)