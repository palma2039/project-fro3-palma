import React from "react";
import {
  BrowserRouter as Router,
  Routes as RouterRoutes,
  Route,
} from "react-router-dom";
import { Index } from "../components/features/index";
import { Login } from "../components/features/login";
import { NotFound } from "../components/features/notfound";
import { SignUp } from "../components/features/signup";
import { FirebaseProvider } from "../contexts/use-firebase";

export const Routes = () => {
  return (
    <Router>
      <FirebaseProvider>
        <RouterRoutes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </FirebaseProvider>  
      
    </Router>
  );
};
