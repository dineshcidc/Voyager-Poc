import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import { Path } from "./components/path";

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
