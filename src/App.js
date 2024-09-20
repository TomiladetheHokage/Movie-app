// import Counter from "./components/Counter"
import NowPlayingMovie from "./components/NowPlayingMovie";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Routes} from "react-router-dom";
import ROUTES from "./router/Router";

const router = createBrowserRouter([
    ...ROUTES,
])

function App() {
  return (

      <div>
          <RouterProvider router={router}> </RouterProvider>
      </div>
    // <div className="App">
    //   <h1>App</h1>
    //   {/* <Counter/> */}
    //   <NowPlayingMovie/>
    // </div>
  );
}

export default App;
