import {react} from 'react';
import {NavLink} from 'react-router-dom';

const Footer= () =>{
	return(
		<footer class="page-footer black darken-3 depth-4">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Fipher's</h5>
                <p class="grey-text text-lighten-4"> Get your messages ciphered with just a click though fipher's (an emerging  firm that encode your messages through a more unique and secure algorithm) 
                Happy to help ):</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text"><i class="material-icons">fingerprint</i></h5>
                <ul>
            
                  <li><NavLink to='/'  class="white-text">Home</NavLink></li>
                  <li><NavLink to='/about' class="white-text">About </NavLink></li>
                  <li><NavLink to='/contact' class="white-text">Contact</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2020 Copyright Text

            </div>
          </div>
        </footer>
       )
} 
export default Footer; 