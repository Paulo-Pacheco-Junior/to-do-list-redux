import { Route, Routes } from "react-router-dom";
import HireMe from "./pages/HireMe";
import MyTasks from "./pages/MyTasks"
import IncompleteTasks from "./pages/IncompleteTasks";
import CompletedTasks from "./pages/CompletedTasks";
import PageNotFound from "./pages/PageNotFound";

function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<MyTasks />} />
            <Route path="/incomplete-tasks" element={<IncompleteTasks />} />
            <Route path="/completed-tasks" element={<CompletedTasks />} />
            <Route path="/hire-me" element={<HireMe />} /> 
            <Route path="*" element={<PageNotFound />} /> 
        </Routes>
    );
}
export default MainRoutes;