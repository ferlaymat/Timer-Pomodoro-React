import { BrowserRouter, Route, Routes } from "react-router";
import TimerPomodoro from "./component/TimerPomodoro";

function App() {
  return (
    <div>
      {/* we define routes for the application */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TimerPomodoro />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
