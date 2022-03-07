
import {Link} from 'react-router-dom';

import Button from '../../components/button/Button';
import './errorPage.scss';


const ErrorPage = () => {
    return (
        <div className="bookshelf__body">

        <div class="bookshelf_wrapper">
            <ul class="books_list">
                <li class="book_item first"></li>
                <li class="book_item second"></li>
                <li class="book_item third"></li>
                <li class="book_item fourth"></li>
                <li class="book_item fifth"></li>
                <li class="book_item sixth"></li>
            </ul>
            <div class="shelf"></div>
        </div>
        <div className="bookshelf__error">Error 404</div>
        <div className="bookshelf__btns">
            <Button><Link to='/'>Home</Link></Button>
            <Button><Link to='/blog'>Blog</Link></Button>
        </div>
    </div>)
}

export default ErrorPage;