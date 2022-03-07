
import {useState,useEffect,useCallback} from 'react';
import {useHistory,useParams} from 'react-router-dom';

import Button from '../button/Button';

import SearchIcon from '@mui/icons-material/Search';

import './search.sass';

const Search = () => {

    const {keyword} = useParams();
    const [search, setSearch] = useState(keyword ? keyword : '');
    const history = useHistory();

    const goToSearch = useCallback(() => {
        if(search.length > 0) history.push(`/search/${search}`)
    //eslint-disable-next-line
    },[search])

    useEffect(() => {
        const enter = e => {
            e.preventDefault();
            if(e.keyCode === 13) goToSearch();
        }
        document.addEventListener('keyup',enter)
        return () => {document.removeEventListener('keyup',enter)}
    },[keyword,goToSearch])

    return (<>
        <div className='search'>
            <SearchIcon className='search__icon'/>
            <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} className='search__input' placeholder='Search Book'/>
            <Button onClick={goToSearch}>Search</Button>
        </div>
    </>)
}

export default Search;