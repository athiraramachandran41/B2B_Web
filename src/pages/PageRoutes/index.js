import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useRoutes } from 'react-router-dom';

import { AuthenticationRoutes, MainRoutes } from "../../pages/";
import { Application } from "../../pages/AuthenticationPage/Application"

// The pages have two layout with sidebar and with out sidebar 
// so the page is wrapped with two different Layout, 
// onbording screens wrapped with AuthenticationRoutes and Main pages wrapped with MainRoutes

export function PageRoutes() {
  return useRoutes([{ path: '/', element: <Application /> }, AuthenticationRoutes, MainRoutes]);
}
