import { Route, Switch, Redirect } from "react-router-dom";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import PageNotFound from "./components/PageNotFound";

const App = () => (
    <Switch>
        <Route exact component={ProductList} path="/products" />
        <Route exact component={Product} path="/products/:slug" />
        <Redirect exact from="/" to="/products" />
        <Route component={PageNotFound} path="*" />
    </Switch>
);

export default App;