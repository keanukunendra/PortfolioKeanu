import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import DescriptionPage from "./pages/DescriptionPage";
import Footer from "./components/Footer";

export const listContext = React.createContext();

class App extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    axios.get("https://staging-krama.herokuapp.com/api/v1/places").then(res => {
      this.setState(() => ({
        list: res.data.slice(0, 8)
      }));
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.category !== this.state.category) {
      const category = this.state.category;
      axios
        .get("https://staging-krama.herokuapp.com/api/v1/" + category)
        .then(res => {
          this.setState({
            list: res.data.slice(0, 8)
          });
        });
    }
  }

  updateCategory = category => {
    this.setState({
      category
    });
  };

  render() {
    return (
      <listContext.Provider
        value={{
          list: this.state.list,
          updateCategory: category => this.updateCategory(category)
        }}
      >
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route path="/home" component={Home} />
              <Redirect exact from="/" to="/home" />
              <Route path="/about" component={Aboutus} />
              <Route
                path="/description/:category/:item_id"
                component={DescriptionPage}
              />
              <Route path="/contact" component={Contact} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </listContext.Provider>
    );
  }
}

export default App;
