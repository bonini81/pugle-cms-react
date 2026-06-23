import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";

import "./App.css";
import AppRoutes from "./routes";
import store, { setCurrentToken, setCurrentUser } from "./store";

const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const currentUser = localStorage.getItem("currentUser");

    if (token) {
      dispatch(setCurrentToken(token));
    }
    if (currentUser) {
      dispatch(setCurrentUser(currentUser));
    }
  }, [dispatch]);

  return <AppRoutes />;
};

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppContent />
      </Provider>
    </div>
  );
}

export default App;
