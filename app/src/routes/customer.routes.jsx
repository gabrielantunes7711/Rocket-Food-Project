import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { Order } from "../pages/Order/Order";
import { Details } from "../pages/Details/Details";
import { Favorites } from "../pages/Favorites/Favorites";

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/favorites" element={<Favorites />} />

      {/* <Route path="*" exact={true} element={<NotFound />} /> */}
    </Routes>
  );
}
