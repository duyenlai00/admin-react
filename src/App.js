import './App.css';
import Nav from "./Nav";
import Header from "./Header";
// import Footer from "./Footer";
import AuthorDetail from './AuthorDetail';
import UpdateAuthor from './UpdateAuthor';
import BookDetail from './BookDetail';
import UpdateBook from './UpdateBook';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
function App(props) {
  return (
     <Router>
      <div className="App">
        <Nav/>
        <Header/>
        <Switch>
          <Route exact path="/author" component={AuthorDetail} />
          <Route exact path="/author/update/:id" component={UpdateAuthor} />
          <Route exact path="/book" component={BookDetail} />
          <Route exact path="/book/update/:id" component={UpdateBook} />
        </Switch>
        {/* <Footer/> */}
      </div>
    </Router>

  );
}

export default App;
