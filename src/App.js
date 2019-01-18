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
    category: localStorage.getItem("category") || "places"
  };

  async componentDidMount() {
    const placeList = await axios
      .get("https://staging-krama.herokuapp.com/api/v1/places")
      .then(res => res.data.slice(0, 8));

    const eventList = await axios
      .get("https://staging-krama.herokuapp.com/api/v1/events")
      .then(res => res.data.slice(0, 8));

    this.setState({ placeList, eventList });
  }

  updateCategory = (category = "places") => {
    this.setState({
      category
    });
    localStorage.setItem("category", category);
  };

  render() {
    console.log(this.state);
    return (
      <listContext.Provider
        value={{
          category: this.state.category,
          list:
            this.state.category === "places"
              ? this.state.placeList
              : this.state.eventList,
          placeList: this.state.placeList,
          eventList: this.state.eventList,
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
