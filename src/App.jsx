import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import Login from "./components/Login";
import Register from "./components/Register";
import Homepage from "./components/Homepage";

const App = () => {
  const [user, setUser] = useState(null);
  const [isRegisterPage, setIsRegisterPage] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  if (user) {
    return <Homepage />;
  }

  return (
    <div>
      {isRegisterPage ? (
        <Register onLoginClick={() => setIsRegisterPage(false)} />
      ) : (
        <Login onRegisterClick={() => setIsRegisterPage(true)} />
      )}
    </div>
  );
};

export default App;
