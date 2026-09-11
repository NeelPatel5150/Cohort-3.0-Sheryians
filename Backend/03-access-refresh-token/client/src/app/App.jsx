import { RouterProvider } from "react-router";
import { AuthProvider } from "../context/AuthProvider";
import { UserProvider } from "../context/UserProvider";
import routes from "./app.routes";

const App = () => {
  return (
    <UserProvider>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </UserProvider>
  );
};

export default App;
