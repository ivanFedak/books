
import {Link} from 'react-router-dom';

import StarIcon from '@mui/icons-material/Star';
import noBook from '../../assets/img/noBook.png';

import './bookCard.sass';

const BookCard = ({item}) => {

    const {title,description,subtitle,imageLinks,categories,averageRating,authors} = item.volumeInfo;

    const _transformData = () => {

        let name = '';
        let desr = '';
        const cate = categories ? categories[0] : 'Undefined';
        const auth = authors ? authors[0] : 'No one';
        const bg = imageLinks ? imageLinks.thumbnail : noBook;
        const rating = [];

        /////////////////
    
        if(title) name = title.length > 40 ? `${title.slice(0,40)}...` : title;
        else name = "no title";
    
        if(description){
            if(description.length > 100) desr = `${description.slice(0,100)}...`;
            else desr = description;
        }else{
            if(subtitle) desr = subtitle;
            else desr = 'There\'s no desription';
        }
    
        if(averageRating){
            for(var i = 0; i < Math.floor(averageRating); i++) {
                rating.push(<StarIcon key={i} className='star star-card'/>)
            }
        }

        /////////////////

        return{name,desr,bg,cate,rating,auth}
    }

    const {name,desr,bg,cate,rating,auth} = _transformData();

    const link = `/detail/${item.id}`

    return (
        <Link className='book-card' to={link}>
            <div className='book-card__poster'>
                <img src={bg} alt="poster"/>
            </div> 
            <div className="book-card__content">
                <div className="book-card__title">{name}</div>
                <div className="book-card__author">by {auth}</div>
                <div className="book-card__rate">
                    <div className="book-card__stars">
                        {rating.length > 0 ? [...rating] : <div className="book-card__info">no rating</div>}
                    </div>
                    <div className="book-card__info">{cate}</div>
                </div>
                <div className="book-card__descr">{desr}</div>
            </div>
        </Link>
    )
};

export default BookCard;