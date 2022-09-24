import './index.css'
import '../../make_responsive.css'

const Footer = () => {
    return (
        <div id='footer_holder'>
            <button id="message" onClick={()=>{alert("Comming soon!")}}>Send messa...</button>
        </div>
     );
}
 
export default Footer;