import { Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import Register from './pages/Register/Register'
import Products from './pages/Products/Products'
import Services from './pages/Services/Services'
import ItemDetails from './pages/ItemDetails/ItemDetails'
import navWrapper from './hoc/navWrapper'
import BusinessProfile from './pages/businessProfile/BusinessProfile'
import './App.css'

  
function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={navWrapper(LandingPage)} />
        <Route path='/register' exact component={Register} />
        <Route path='/products' exact component={Products} />
        <Route path='/services' exact component={Services} />
        <Route path='/item_details/:id' exact component={ItemDetails} />
        <Route path='/business_profile' exact component={BusinessProfile} />
      </Switch>
    </div>
  );
}

export default App;
