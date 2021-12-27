import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Main from './component/main/Main';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Recipe from './pages/Recipe';

function App() {
  return (
    <> 
    <Header />
      <main className='main container'>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path='/product/:id' component={Product} />
        <Route path='/recipe/:name' component={Recipe} />
        <Route component={NotFound} />
      </Switch>
      </main>
     <Footer />
    </>
  );
}

export default App;
