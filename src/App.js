import { Routes, Route, Link } from "react-router-dom";
import { ContextApi } from "./components/context/context-api";
import { ReduxStore } from "./components/reducx/redux-store";
import NewThemeApi from "./components/context/secondCompo/newThemeApi";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Context API</Link> | <Link to="/about">Redux Store</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <ContextApi />
              <NewThemeApi />
            </>
          }
        />
        <Route path="/about" element={<ReduxStore />} />
      </Routes>
    </div>
  );
}

export default App;
