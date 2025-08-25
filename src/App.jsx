import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Path } from "./components/path";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.HOME} element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
