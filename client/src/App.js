import { useState, useEffect } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
// styling imports
import "./App.css";
import "./assets/NavBar.css";
import "./assets/BooksContainer.css";
import "./assets/ReviewsContainer.css";
// component imports
import Layout from "./layouts/Layout";
import SignUp from "./screens/SignUp";
import LogIn from "./screens/LogIn";
import BooksContainer from "./containers/BooksContainer";

import {
  loginUser,
  signUpUser,
  removeToken,
  verifyUser,
} from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleSignUp = async (formData) => {
    const userData = await signUpUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/");
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path="/login">
            <LogIn handleLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <SignUp handleSignUp={handleSignUp} />
          </Route>
          <Route path="/">
            <BooksContainer currentUser={currentUser} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
