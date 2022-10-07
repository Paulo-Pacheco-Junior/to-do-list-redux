import { Routes, Route } from "react-router-dom";
import IncompleteTasks from "./pages/IncompleteTasks";
import CompletedTasks from "./pages/CompletedTasks";
import Home from "./pages/Home";

function PagesRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/CompletedTasks' element={<CompletedTasks />} />
      <Route path='/IncompleteTasks' element={<IncompleteTasks />} />
    </Routes>
  );
}

export default PagesRoutes;