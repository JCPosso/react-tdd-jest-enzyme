import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasks from "./pages/tasks";

import Login from "./pages/login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
