import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Browse from "./components/Browse";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
