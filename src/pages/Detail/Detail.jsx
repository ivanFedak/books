
import {useState,useEffect} from "react";
import {useParams,useHistory} from 'react-router-dom';

import useBookApi from "../../api/bookApi";

import PageBackground from "../../components/pageBackground/PageBackground";
import BookCard from "../../components/bookCard/BookCard";
import LoadingPage from '../../service/loadingPage/LoadingPage';
import Modal from "../../components/modal/Modal";

import Button from '../../components/button/Button';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import noBg from '../../assets/img/noBook.png';

import './detail.sass';

const Detail = () => {

    const [recommend,setRecommend] = useState([]);
    const [book,setBook] = useState(null);
    const [modalActive, setModalActive] = useState(false);

    const {id,keyword} = useParams();
    const history = useHistory();
    const {getBySearch,getDetail} = useBookApi();

    useEffect(()=>{
        getBook();
        window.scrollTo(0,0);
    //eslint-disable-next-line
    },[id,history])


    const changeModal = () => setModalActive(modal => !modal);

    const getBook = () => {
        getDetail(id).then(res => setBook(res))
        getDetail(id)
            .then(res => 
                getBySearch(res.volumeInfo.title)
                    .then(res => setRecommend(res.items))
            )
    }
    const renderRecoment = recommend.slice(0,4).map(item => <BookCard item={item} key={item.id}/>)

    if(!book) return <LoadingPage/>

    const {epub,pdf,webReaderLink} = book.accessInfo;


    const _transformData = () => {

        const {title,authors,averageRating,imageLinks,description,publisher,publishedDate,language,categories,pageCount,printedPageCount} = book.volumeInfo;
        
        const name = title ? title : 'no title';
        const descr = description ? description : 'no description';
        const bg = imageLinks ? (imageLinks.medium || imageLinks.small || imageLinks.thumbnail) : noBg;
        const auth = authors ? authors[0] : 'No one'
        const rating = [];
        const published = publishedDate ? publishedDate : 'undefined data';
        const cateStr = categories ? categories.join('/') : 'no category';
        const cate = categories ? categories.join('/').split('/') : [];
        const lang = language ? language : 'undefined';
        const publishr = publisher ? publisher : 'no One';
        const readLink = webReaderLink ? webReaderLink : '';
        let pagesCount = null;
        let downloadText = '';
        let rate = null;
        const activeDownload = epub.acsTokenLink || pdf.acsTokenLink ? '' : 'disable';
        const activeEpub = epub.acsTokenLink ? '' : 'disable';
        const activePdf = pdf.acsTokenLink ? '' : 'disable';
        
        //////////////

        if(pageCount){
            if(printedPageCount){
                if(printedPageCount > pageCount) pagesCount = printedPageCount;
                else pagesCount = pageCount
            }else{
                pagesCount = pageCount;
            }
        }else pagesCount = '0';
    
        if(epub.acsTokenLink && pdf.acsTokenLink)downloadText = 'epub & pdf'
        else if(epub.accessInfo && !pdf.acsTokenLink)downloadText = 'epub'
        else if(pdf.accessInfo && !epub.acsTokenLink)downloadText = 'pdf'
        else downloadText = "no download"
        
        if(averageRating) for(var i = 0; i < Math.floor(averageRating); i++) rating.push(<StarIcon key={i} className='star'/>)
        rate = rating.length > 0 ? [...rating] : 'no rating'
        
        const renderGenres = cate.map((item,i) => <div key={i} className="more-detail__genre">{item}</div>);
        
        //////////////

        return {name,auth,rate,bg,descr,published,lang,renderGenres,cateStr,
                publishr,pagesCount,downloadText,readLink,activeDownload,activeEpub,activePdf};
    }
    const {name,auth,rate,bg,descr,published,lang,renderGenres,cateStr,
            publishr,pagesCount,downloadText,readLink,activeDownload,activeEpub,activePdf} = _transformData();
    
    
    return (<div>
        <PageBackground/>
        <div className="detail">
            <div className="detail__container _container">
                <ArrowBackIcon onClick={() => history.goBack()} className="detail__arrow"/>
                <div className="detail__wrapper">
                    <div className="detail__left">
                        <div className="detail__info info-detail">
                            <div className="info-detail__poster _ibg">
                                <img src={bg} alt="bg"/>
                            </div>
                            <div className="info-detail__content">
                                <div className="info-detail__data">
                                    <h3 className="info-detail__title">{name}</h3>
                                    <div className="info-detail__detail">
                                        <div className="info-detail__info">by <span>{auth}</span></div>
                                        <div className="info-detail__info">{published}</div>
                                    </div>
                                    <div className="info-detail__stars">
                                        {rate}
                                    </div>
                                    <div className="info-detail__detail">
                                        <div className="info-detail__info">{pagesCount} pages</div>
                                        <div className="info-detail__info">{lang}</div>
                                    </div>
                                </div>
                                <div className="info-detail__btns">
                                    <Button className={activeDownload} onClick={changeModal}>Download</Button>
                                    <a href={readLink}>
                                        <Button>read book</Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="detail__more more-detail">
                            <div className="more-detail__descr">
                                <h3 className="more-detail__title">Overview</h3>
                                <div className="more-detail__text" dangerouslySetInnerHTML={{__html: descr}}></div>
                                <div className="more-detail__genres">
                                    {renderGenres}
                                </div>
                            </div>
                            <div className="more-detail__addition">
                                <h3 className="more-detail__title">Additional information</h3>
                                <div className="more-detail__options">
                                    <div className="more-detail__option">
                                        <div className="more-detail__subtitle">Publisher</div>
                                        <div className="more-detail__info">{publishr}</div>
                                    </div>
                                    <div className="more-detail__option">
                                        <div className="more-detail__subtitle">Published Date</div>
                                        <div className="more-detail__info">{published}</div>
                                    </div>
                                    <div className="more-detail__option">
                                        <div className="more-detail__subtitle">Language</div>
                                        <div className="more-detail__info">{lang}</div>
                                    </div>
                                    <div className="more-detail__option">
                                        <div className="more-detail__subtitle">Genre</div>
                                        <div className="more-detail__info">{cateStr}</div>
                                    </div>
                                    <div className="more-detail__option">
                                        <div className="more-detail__subtitle">Page</div>
                                        <div className="more-detail__info">{pagesCount}</div>
                                    </div>
                                    <div className="more-detail__option">
                                        <div className="more-detail__subtitle">Download</div>
                                        <div className="more-detail__info">{downloadText}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detail__recommend">
                        {renderRecoment}
                    </div>
                </div>
            </div>
        </div>
        <Modal active={modalActive} changeModal={changeModal}>
            <div className="modal__btns">
                <a className={activeEpub} href={epub.acsTokenLink}>
                    <Button className={activeEpub}>Epub</Button>
                </a>
                <a className={activePdf} href={pdf.acsTokenLink}>
                    <Button className={activePdf}>Pdf</Button>
                </a>
            </div>    
        </Modal>
    </div>)
}

export default Detail;