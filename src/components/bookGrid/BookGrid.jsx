
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';

import useBookApi from '../../api/bookApi';

import {OutlineButton} from '../button/Button';
import BookCard from '../bookCard/BookCard';

import Skeleton from '../../service/Skeleton/Skeleton';

import './bookGrid.sass';

const BookGrid = () => {

    const [books,setBooks] = useState([]);
    const [page, setPage] = useState(0);
    const [totalBooks,setTotalBooks] = useState(0);

    const {keyword} = useParams();
    const {getBySearch,process} = useBookApi();


    useEffect(()=>{
        getBooks();
    //eslint-disable-next-line
    },[keyword])


    const getBooks = async () => {
        let response = null;
        if(keyword === undefined){
            const params = {startIndex: 0}
            response = await getBySearch('Tom sawyer',params)
        }else{
            response = await getBySearch(keyword)
        }
        setPage(0);
        setTotalBooks(response.totalItems);
        setBooks(response.items);
    }
    const loadMore = async () => {
        let response = null;
        if(keyword === undefined){
            const params = {startIndex: page + 10}
            response = await getBySearch('Mark Twain',params)
        }else{
            const params = {startIndex: page + 10}
            response = await getBySearch(keyword,params)
        }
        setBooks([...books,...response.items]);
        setPage(page + 10);
    }

    if(process === 'error') return <h3>Error...</h3>
    else if(process === 'loading') return <div className="book-grid__content"><Skeleton/></div>

    const renderCard = books.map(item => {
        const rand = Math.floor(Math.random() * 10000)
        return <BookCard key={item.id + rand} item={item}/>
    });
    


    return (<>
        <div className='book-grid'>
            <div className="book-grid__content">
                {renderCard}
            </div>
            <div className="book-grid__btn">
                {books.length < totalBooks  ? 
                    <OutlineButton onClick={loadMore}>Load More</OutlineButton> : null
                }
            </div>
        </div>
    </>)
};

export default BookGrid;