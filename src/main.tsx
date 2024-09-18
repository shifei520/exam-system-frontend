import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdatePassword from "./pages/UpdatePassword";
import ExamList from "./pages/ExamList";
import Edit from "./pages/Edit";
import Exam from "./pages/Exam";
import Res from "./pages/Res";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const routes = [
  {
    path: "/",
    element: <ExamList />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "update_password",
    element: <UpdatePassword />,
  },
  {
    path: "edit/:id",
    element: <Edit />,
  },
  {
    path: "exam/:id",
    element: <Exam />,
  },
  {
    path: "res/:id",
    element: <Res />,
  },
];
const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <DndProvider backend={HTML5Backend}>
    <RouterProvider router={router} />
  </DndProvider>
);
