import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home_page/HomePage";
import ProjectDetailPage from "./pages/project_detail_page/ProjectDetailPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="project/:id" element={<ProjectDetailPage />} />
    </Routes>
  );
};

export default App;
