import logo from './logo.svg';
import './App.scss';
import Nav from './Nav/Nav';
import Home from './Exanple/Home';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';
import ListTodo from './Todos/ListTodo'
import MyComponent from './Exanple/MyComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Weather from './Exanple/weather';


import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {          // JSX
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>

            <Route path="/" exact>
              <Home />

            </Route>
            <Route path="/todo" >
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>


        {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      /> */}


      </div>
    </BrowserRouter>
  );
}

export default App;
