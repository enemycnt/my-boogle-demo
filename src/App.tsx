
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainApp from './components/MainApp'
import BookDetailedPage from './components/BookDetailed'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainApp />
        </Route>
        <Route path="/book/:key" component={BookDetailedPage} />
      </Switch>
    </Router>
  );
}

export default App;
