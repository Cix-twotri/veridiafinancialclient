import React from "react";
import { Navigate } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useContext } from "react";
import "@/assets/vendor/nucleo/css/nucleo.css";
import "@/assets/vendor/font-awesome/css/font-awesome.min.css";
import "@/assets/scss/argon-design-system-react.scss?v1.1.0";
import Landing from "@/views/Landing.jsx";
import Home from "./views/Home.jsx";
import Login from "@/views/Login.jsx";
import Profile from "@/views/Profile.jsx";
import Register from "@/views/Register.jsx";
import About from "@/views/About.jsx";
import Dashboard from "@/views/Dashboard.jsx";
import Deposit from "@/views/Deposit";
import Transfer from "@/views/Transfer.jsx";
import Withdraw from "@/views/Withdraw.jsx";
import { AuthContext } from "@/context/authContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbars/Navbar.jsx";
import Transaction from "@/views/Transaction.jsx";

function App() {
  const { currentUser } = useContext(AuthContext);

  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <>
          <Navbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
        </>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/landing" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/dashboad-page",
          element: <Dashboard />,
        },
        {
          path: "/about-us",
          element: <About />,
        },
        {
          path: "/online-deposit",
          element: <Deposit />,
        },
        {
          path: "/transaction",
          element: <Transaction />,
        },
        {
          path: "/transfer",
          element: <Transfer />,
        },
        {
          path: "/withdraw",
          element: <Withdraw />,
        },
      ],
    },
    {
      path: "/landing",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
