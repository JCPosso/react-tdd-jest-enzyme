import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasks from "./pages/tasks";
import Login from "./pages/login";

import { useReducer } from "react";
import { themeReducer, initialState } from "./utils";
import { ThemeContext } from "./ThemeContext";
import { Button } from "@material-ui/core";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";

function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <FormGroup
        style={{
          position: "fixed",
          right: 15,
          borderRadius: "15px",
        }}
      >
        <Switch
          label=""
          onClick={() => {
            if (state.isDarkMode) {
              dispatch("SET_LIGHT_MODE");
            } else {
              dispatch("SET_DARK_MODE");
            }
          }}
        />
        <Typography
          component="h1"
          variant="h6"
          className={`text-${state.isDarkMode ? "light" : "dark"}`}
        >
          {`${state.isDarkMode ? "Light Mode" : "Dark Mode"}`}
        </Typography>
      </FormGroup>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
