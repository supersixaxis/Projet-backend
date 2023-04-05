import React from 'react'
import Home from '../pages/home/index'
import { Outlet } from 'react-router-dom';
import Login from '../pages/login/login'
import SignUp from '../pages/signUp/signUp'
export const RouteURl = [
  {
     path: "/",
     element: <Layout/>,
     children: [
      {
        index: true,
        element: <Login />,

      },
      {
        path:"home",
        element: <Home />,
      },
      {
        path:"inscription",
        element: <SignUp/>
      },
    //   {
    //     path:"*",
    //     element: <Error />,
    //   },
     ]
 

}
]




function Layout() {
  return (
    <>
    {/* <Header /> */}
    <main className=''>
    <Outlet />
    </main>
    {/* <Footer /> */}
    </>
  )
}