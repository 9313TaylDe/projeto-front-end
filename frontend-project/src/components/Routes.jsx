import { Route, Router } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/meus-pedidos" element={<Home />} />
      <Route path="/meus-pedidos" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Router>
  );
};
