import { Route, Switch, Redirect } from "react-router-dom";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import PageNotFound from "./components/PageNotFound";
import routes from "routes";

const App = () => (
    <Switch>
        <Route exact component={Product} path={routes.products.show} />
        <Route exact component={ProductList} path={routes.products.index} />
        <Redirect exact from={routes.root} to={routes.products.index} />
        <Route component={PageNotFound} path="*" />
    </Switch>
);

export default App;