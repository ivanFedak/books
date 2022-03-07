
import Header from '../header/Header';
import Search from '../search/Search';
import PageBackground from '../pageBackground/PageBackground';


import './main.sass';

const Main = ({title,description,img}) => {

    return (
        <div className="main">
            <PageBackground className="main__page"></PageBackground>
            <Header/>
            <div className="main__container _container">
                <div className="main__content">
                    <h1 className="main__title">{title}</h1>
                    <div className="main__subtitle">{description}</div>
                    <Search/>
                </div>
                <div className="main__decor">
                    <div className="main__img">
                        <img src={img} alt="girl"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;