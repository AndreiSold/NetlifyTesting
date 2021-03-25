import React, { Suspense } from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import Dynamic from "containers/Dynamic";
import "./app.css";
import { Link, Route, Switch } from "react-router-dom";
import { Button, CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./AppTheme";
// import { createBrowserHistory } from "history";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  // const history = createBrowserHistory({ basename: "/" });

  return (
    <Root>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <nav>
            <Button>dada</Button>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/dynamic">Dynamic</Link>
            <Link to="/homepage">Homepage</Link>
          </nav>
          <div className="content">
            <Suspense fallback={<em>Loading...</em>}>
              <Switch>
                <Route path="/dynamic" component={Dynamic} />
                <Route render={() => <Routes />} />
              </Switch>
            </Suspense>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </Root>
  );
}

export default App;
