
import Login from "./Login";
import Register from "./Register";
import NotFoundPage from "./NotFoundPage";
import {BrowserRouter,Switch,Route} from "react-router-dom"
import HomePage from "./HomePage";
import Addbook from "./Addbook";
import Book from "./Book";

function App() {
  return (
      <section id="todo">
        <BrowserRouter>
          <Switch>
            <Route path="/signin"  render={Login} />
            <Route exact path="/" render={Register} />
            <Route exact path="/home" render={HomePage} />
            <Route exact path="/book" render={Book} />
            <Route exact path="/add" render={Addbook} />

            <Route component={NotFoundPage}/>
          </Switch>
        </BrowserRouter>
      </section>
  );
}

export default App;
