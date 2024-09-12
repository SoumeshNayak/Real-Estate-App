import Navbar from './components/navbar/Navbar'

import Homepage from './routes/homePage/Homepage'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ListPage from './routes/listPage/ListPage'
import Layout from './routes/layout/Layout'
import SinglePage from './routes/singlePage/SinglePage'
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
        }
      ]
    }
  ])
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App