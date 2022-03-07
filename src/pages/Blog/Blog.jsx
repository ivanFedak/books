
import Main from "../../components/main/Main";

import bgImg from '../../assets/img/bookBg.png';
import img1 from '../../assets/img/blog/01.png';
import img2 from '../../assets/img/blog/02.png';
import img3 from '../../assets/img/blog/03.png';
import img4 from '../../assets/img/blog/04.png';
import img5 from '../../assets/img/blog/05.png';
import img6 from '../../assets/img/blog/06.png';

import './blog.sass';

const Blog = () => {

    const blogDb = [
        {
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque consequat orci arcu habitasse hac cum dictumst. Urna, porta ornare ut quis.',
            img: img1,
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque consequat orci arcu habitasse hac cum dictumst. Urna, porta ornare ut quis.',
            img: img2,
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque consequat orci arcu habitasse hac cum dictumst. Urna, porta ornare ut quis.',
            img: img3,
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque consequat orci arcu habitasse hac cum dictumst. Urna, porta ornare ut quis.',
            img: img4,
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque consequat orci arcu habitasse hac cum dictumst. Urna, porta ornare ut quis.',
            img: img5,
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque consequat orci arcu habitasse hac cum dictumst. Urna, porta ornare ut quis.',
            img: img6,
        },
    ]

    const renderBlog = blogDb.map((item,i) => (
        <div key={i} className="blog__item item-blog">
            <div className="item-blog__img _ibg">
                <img src={item.img} alt="imag"/>
            </div>
            <div className="item-blog__content">
                <div className="item-blog__title">{item.title}</div>
                <div className="item-blog__descr">{item.description}</div>
            </div>
        </div>
    ));

    return (<>
        <Main 
            title="blog mybook" 
            description="lightweight article where discussing matters relating to the book"
            img={bgImg}
        />
        <div className="blog">
            <div className="blog__container _container">
                <div className="blog__grid">
                    {renderBlog}
                </div>  
            </div>    
        </div>
    </>)
}

export default Blog