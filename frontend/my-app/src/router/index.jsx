import React from 'react'
import Home from '../pages/home/index'
import { Outlet } from 'react-router-dom';

export const RouteURl = [
  {
     path: "/",
     element: <Layout/>,
     children: [
      {
        index: true,
        element: <Home />,

      },
    //   {
    //     path:"A-propos",
    //     element: <APropos />,
    //   },
    //   {
    //     path:"Logement/:id",
    //     element: <Logement/>

    //   },
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