import AuthProvider from "./components/AuthProvider";
import Button from "./components/Button";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Products from "./components/Products";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
const App = () => {
  return (
    <AuthProvider>
      <Layout>
        <Home />
      </Layout>
    </AuthProvider>
  );
};

export default App;
