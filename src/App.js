import Body from './Components/Body';
import { Provider } from 'react-redux'
import store from './utils/store/store';


import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Login } from './Components/Login';
import Browse from './Components/Browse';
function App() {
  const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<Body/>
    },
    {
        path:'/browse',
        element:<Browse />
    },
    {
      path:'/login',
      element:<Login />
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
