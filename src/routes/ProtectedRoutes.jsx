import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login"); // Redirect to login page if user is not logged in
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, [navigate]);

  return children;
};

export default ProtectedRoutes;
