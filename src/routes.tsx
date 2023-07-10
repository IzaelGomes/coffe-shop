import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { FinishedOrder } from "./pages/FinishedOrder";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
      <Route path="/finishedOrder" element={<FinishedOrder />} />
    </Routes>
  );
};

export { Routers };
