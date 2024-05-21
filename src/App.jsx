import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Checkout,
  Error,
  Login,
  Register,
  SingleProduct,
  Category,
} from "./page";
import { ErrorElement } from "./components";
import { useState, useEffect } from "react";
import data from "./data/db.json";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { authReady, login } from "./features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { action as RegisterAction } from "./page/Register";
import { ProtectedRoutes } from './components'

function App() {
  const { user } = useSelector((state) => state.user)
  const [categoryData, setCatagoryData] = useState({
    headphones: [],
    earphones: [],
    speakers: [],
  });

  useEffect(() => {
    const catagorizedData = {
      headphones: data.filter((item) => item.category === "headphones"),
      speakers: data.filter((item) => item.category === "speakers"),
      earphones: data.filter((item) => item.category === "earphones"),
    };
    setCatagoryData(catagorizedData);
  }, []);

  const categories = {
    headphones: {
      title: "Headphones",
      products: categoryData.headphones,
    },
    speakers: {
      title: "Speakers",
      products: categoryData.speakers,
    },
    earphones: {
      title: "Earphones",
      products: categoryData.earphones,
    },
  };

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoutes user={user}>
        <HomeLayout/>
      </ProtectedRoutes>,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement />,
        },
        {
          path: ':category',
          element: <Category categories={categories}/>
        },
        {
          path: ':category/:slug',
          element: <SingleProduct/>
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login/>,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> :  <Register/>,
      errorElement: <Error />,
      action: RegisterAction,
    },
  ]);

  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user))
      dispatch(authReady())
    })
  }, [])

  return <>{ authReady && <RouterProvider router={routes}/> }</>;
}

export default App;