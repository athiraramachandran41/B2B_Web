
import React from "react";
import { Application } from "../../pages/AuthenticationPage/Application";
import { LoginScreen } from "../../pages/AuthenticationPage/LoginScreen";
import { OtpVerification } from "../../pages/AuthenticationPage/OtpVerification";
// ===========================|| AUTH ROUTING ||=========================== //

export const AuthenticationRoutes = {
    path: '/',
    element: '',
    children: [
        {
          path:'/application', 
          element: <Application />
      },  
      {
        path:'/login', 
        element: <LoginScreen />
    },  
    {
      path:'/otp_verification', 
      element: <OtpVerification />
  },  
      ],

};
