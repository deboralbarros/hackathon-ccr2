import { Switch, Route } from "react-router-dom";

import InitialPage from "../pages/InitialPage";
import Home from "../pages/Home";
import Profile from "../pages/Profile"
import HomeProvider from "../pages/HomeProvider";
import Options from "../pages/Options";
import ProvidersOptions from "../pages/ProvidersOptions";
import SearchProviders from "../pages/SearchProviders";
import ProvidersList from "../pages/ProvidersList";
import Provider from "../pages/Provider";
import TransactionHistory from "../pages/TransactionHistory";
import CreateBid from "../pages/CreateBid";
import Customer from "../pages/Customer";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={InitialPage} />
    <Route path="/register" exact />
    <Route path="/login" exact />
    <Route path="/findcustomers" exact />
    <Route path="/initialpage" exact component={InitialPage}/>
    <Route path="/home" exact component={Home}/>
    <Route path="/homeprovider" exact component={HomeProvider}/>
    <Route path="/options" exact component={Options}/>
    <Route path="/profile" exact component={Profile}/>
    <Route path="/provider" exact component={Provider} />
    <Route path="/providersoptions" exact component={ProvidersOptions} />
    <Route path="/providerslist" exact component={ProvidersList} />
    <Route path="/startyourbusiness" exact />
    <Route path="/customer" exact component={Customer} />
    <Route path="/searchproviders" exact component={SearchProviders} />
    <Route path="/bidlist" exact component={ProvidersList} />
    <Route path="/searchbid" exact component={SearchProviders} />
    <Route path="/transactionhistory" exact component={TransactionHistory} />
    <Route path="/history" exact component={TransactionHistory} />
    <Route path="/createbid" component={CreateBid} />
  </Switch>
);

export default Routes;
