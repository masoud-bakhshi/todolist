import "./styles.css";
import ThemeProvider from "./Material/PrimaryColor";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ToIndex from "./components/ToDo/index";
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ToIndex} exact />
      </Switch>
    </BrowserRouter>
  );
}
