import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing all the themes
import ThemeFour from "../themes/theme-four";
import Blogs from "../components/Blogs/blogs";
import Main from "../components/BlogDetails/main";

class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={ThemeFour} />
            <Route exact path="/blog-details/" component={Main} />
            <Route exact path="/blogs/" component={Blogs} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;
