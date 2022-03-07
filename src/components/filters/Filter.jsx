
import {Link} from 'react-router-dom';

import './filter.sass';

const fitlers = [
    {
        content: 'All Genres',
        link: 'general',
    },
    {
        content: 'Business',
        link: 'Business & Economics',
    },
    {
        content: 'Science',
        link: 'science',
    },
    {
        content: 'psychology',
        link: '/search/psychology',
    },

]

const Filter = ({getOnlyWithStar}) => {


    const renderLink = fitlers.map(item => (
        <Link key={item.content} to={item.link}>
            <li className="filter__item">{item.content}</li>
        </Link>
    ))

    return (
        <div className='filter'>
            <h3 className="filter__title">Book by Genre</h3>
            <ul className="filter__list">
                {/* {renderLink} */}
                <li className="filter__item">All Genres</li>
                <li onClick={getOnlyWithStar} className="filter__item">Get with star</li>
                <li className="filter__item">Science</li>
                <li className="filter__item">Fiction</li>
                <li className="filter__item">Philosophy</li>
                <li className="filter__item">Biography</li>
            </ul>
        </div>
    )
}

export default Filter;