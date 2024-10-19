import Navbar from './components/navbar/Navbar'

import Homepage from './routes/homePage/Homepage'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ListPage from './routes/listPage/ListPage'
import Layout from './routes/layout/Layout'
import SinglePage from './routes/singlePage/SinglePage'
import Profilepage from './routes/profile/Profilepage'
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children:[
        {
          path: '/',
          element: <Homepage/>
        },
        {
          path: '/list',
          element: <ListPage/>
        },{
          path: '/:id',
          element: <SinglePage/>
        },{
          path: '/profile',
          element: <Profilepage/>
        }
      ]
    }
  ])
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App