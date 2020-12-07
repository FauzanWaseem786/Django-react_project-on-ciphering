
import './App.css';
import Navbar from './components/navbar'
import Home_Page from './components/page'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
  
    <BrowserRouter>

      <div className="App">
        
        <Navbar/>
        <Switch>
            <Route exact path='/' component={Home_Page}/>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          
        </Switch>

            
      </div>


      <Footer/> 
    </BrowserRouter>
      
 
   
  );
}

export default App;
