import './index.css'
import logo from './productwhite.png'
function home(){
    window.scrollTo(0,0);
}
const Navbar = () => {
    return (
        <div id="holder">
            <div id="navbar">
                <div id='nav_left' onClick={home}>
                    <img src={logo} alt="Logo"/>
                    <h3>Leanpitch</h3>
                </div>
                <div id='nav_right'>
                    <button id='subs' onClick={()=>{alert("Subscribe button not functional yet")}}>Subscribe</button>
                    <button id='cont' onClick={()=>{alert("Contact Us button not functional yet")}}>Contact Us</button>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;