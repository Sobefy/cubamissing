import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../src/pages/landing";
import Contact from "../src/pages/contact";

export default function Home() {
  /**
   * We have to use React Router to be able to deploy to AWS S3, maybe there is an equivalent for NextJS.
   */
  return (
    <Router>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="*" component={Landing} />
      </Switch>
    </Router>
  );
}
