import "react-toastify/dist/ReactToastify.css";

import { fbAuth } from "@src/config/firebase";
import { getUserName } from "@src/helper/firebase.helper";
import { useAuth } from "@src/hooks";
import { Routing } from "@src/route/Routing";
import { useUserActions } from "@src/store/actions";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const { setUserActions } = useUserActions();
  const isAuth = useAuth();
  useEffect(() => {
    onAuthStateChanged(fbAuth, async (authUser) => {
      if (!isAuth && authUser) {
        const { email, uid } = authUser;
        const currentUser = {
          name: "",
          email: email as string,
          uid,
        };
        currentUser.name = await getUserName(email as string);
        setUserActions(currentUser);
      }
    });
  }, []);

  return (
    <>
      <Routing />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
}

export default App;
