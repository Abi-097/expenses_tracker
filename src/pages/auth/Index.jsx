import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";

const Auth = () => {
  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    // console.log(results);
    localStorage.setItem("auth");
  };
  return (
    <div className="login-page">
      <p>Sign In with Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign In with Google
      </button>
    </div>
  );
};

export default Auth;
