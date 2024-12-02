import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import {
  HomeScene,
  LoginScene,
  ListScene,
  DetailScene,
  NotFoundScene,
} from "scenes";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.ROOT} element={<LoginScene />} />
        <Route path={ROUTES.HOME} element={<HomeScene />} />
        <Route path={`${ROUTES.LIST}/:pageId`} element={<ListScene />} />
        <Route
          path={`${ROUTES.DETAIL}/:pageId/:id`}
          element={<DetailScene />}
        />
        <Route path="*" element={<NotFoundScene />} />
      </Routes>
    </BrowserRouter>
  );
};
