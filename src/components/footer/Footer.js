
import {Link} from 'react-router-dom';

import './footer.sass';

const Footer = () => {

    return(
        <div className='footer'>
            <div className='footer__container _container'>
                <div className="footer__logo logo">2022 <span>MY</span>BOOK</div>
                <ul className="footer__menu">
                    <li className='footer__item'><Link to='/'>Explorer</Link></li>
                    {/* <li className='footer__item'>Shop</li> */}
                    <li className='footer__item'><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
        </div>
    ) 
}

export default Footer;