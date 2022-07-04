import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext, AppController } from "./AppController";
import HomePage from "./pages/home_page/HomePage";
import ProjectDetailPage from "./pages/project_detail_page/ProjectDetailPage";

const App = () => {
  const [appController] = useState(new AppController());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    appController.fetchData().then(() => setIsLoading(false));
  }, [appController]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AppContext.Provider value={appController}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="project/:id" element={<ProjectDetailPage />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
