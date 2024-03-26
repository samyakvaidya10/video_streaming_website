import Body from './Components/Body';
import { Provider } from 'react-redux'
import store from './utils/store/store';


import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Login } from './Components/Login';
import Browse from './Components/Browse';
import MoviePlayer from './Components/MoviePlayer';
function App() {
  const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<Body/>
    },
    {
        path:'/browse',
        children:[
          {
            path:'/browse',
            element:<Browse />
          },{
            path:'play_movie/:movie_id',
            element:<MoviePlayer />
          }
        ]
      
    },
    {
      path:'/login',
      element:<Login />
    },
    {
      path:'/play_movie/:movie_id',
      element:<MoviePlayer />
    }
])
  return (
    <Provider store={store} >
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    
    </Provider>
  );
}

export default App;
