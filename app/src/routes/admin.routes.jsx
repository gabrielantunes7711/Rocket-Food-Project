import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { Details } from "../pages/Details/Details";
import { NewPlate } from "../pages/NewPlate/NewPlate";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/new-plate/" element={<NewPlate />} />
      <Route path="/edit/:id" element={<NewPlate />} />

      {/* <Route path="*" exact={true} element={<NotFound />} /> */}
    </Routes>
  );
}
