import { useRef, useState } from "react";
import { BG_IMAGE } from "../utils/constants";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      //Signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      //SignIn logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <div>
      <div className="absolute">
        <img className="bg-cover" alt="background-image" src={BG_IMAGE} />
      </div>
      <Header />
      <div className="relative bg-opacity-85 bg-black text-white w-4/12 m-auto my-20 rounded-lg">
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
          <h1 className="text-3xl mx-10 my-4 text-white">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              className="text-lg py-4 my-5 mx-4 bg-gray-900 p-6 rounded-lg"
              type="name"
              ref={name}
              placeholder="Enter Your Name"
            />
          )}
          <input
            className="text-lg py-4 my-5 mx-4 bg-gray-900 p-6 rounded-lg"
            type="username"
            ref={email}
            placeholder="Enter email Id"
          />
          <input
            className="text-lg py-4 my-5 mx-4 bg-gray-900 p-6 rounded-lg"
            type="password"
            ref={password}
            placeholder="Enter password"
          />
          <p className="text-red-600 py-2 mx-4">{errorMessage}</p>
          <button
            className="text-lg py-4 my-5 m-auto w-4/12 rounded-lg bg-red-600 hover:cursor-pointer hover:bg-red-800"
            type="submit"
            onClick={handleSubmit}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="mx-4 my-2 hover:cursor-pointer"
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn
              ? "New to Netflix? Sign Up here"
              : "Already a member? Sign In here"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
