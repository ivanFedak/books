
import {useState} from 'react';
import {Link} from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import './header.sass'

const Header = () => {

    const [activeMenu,setActiveMenu] = useState(false);

    const toggleMenu = () => setActiveMenu(menu => !menu);
    const active = activeMenu ? 'active' : '';

    return(
        <div className='header'>
            <div className='header__container _container'>
                <div className="header__logo logo"><span>MY</span>BOOK</div>
                <MenuIcon onClick={toggleMenu} className='header__burger'/>
                <ul className={`header__menu ${active}`}>
                    <CloseIcon onClick={toggleMenu} className='header__close'/>
                    <li className='header__item'><Link to="/">Explorer</Link></li>
                    {/* <li className='header__item'>Shop</li> */}
                    <li className='header__item'><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
        </div>
    )
}


export default Header;