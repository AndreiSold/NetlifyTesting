import React, { Suspense } from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import Dynamic from "containers/Dynamic";
import "./app.css";
import { Link, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  const history = createBrowserHistory({ basename: "/" });

  return (
    <Root>
      <Router history={history}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/dynamic">Dynamic</Link>
          <Link to="/test">Test</Link>
        </nav>
        <div className="content">
          <Suspense fallback={<em>Loading...</em>}>
            <Switch>
              <Route path="/dynamic" component={Dynamic} />
              <Route render={() => <Routes />} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </Root>
  );
}

export default App;
