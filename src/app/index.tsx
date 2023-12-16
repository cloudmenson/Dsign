import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";

import { HomePage } from "screens";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<HomePage />} />

        {/* <Route path="*" element={<NotFound404 />} /> */}
      </Routes>
    </Router>
  );
};

export { App };
