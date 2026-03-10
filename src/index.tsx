import "./index.css";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import App from "./App";
import { ThemeProvider } from "./theme";

render(
  () => (
    <ThemeProvider>
      <Router>
        <Route path="/*" component={App} />
      </Router>
    </ThemeProvider>
  ),
  document.getElementById("root")!,
);
