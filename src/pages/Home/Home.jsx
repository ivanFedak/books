
import Main from '../../components/main/Main';
import BookGrid from '../../components/bookGrid/BookGrid';

import img from '../../assets/img/girl.png';

import './Home.sass';

const Home = () => {
    return (<>
        <Main 
        title="READ AND ADD YOUR INSIGHT" 
        description="find your favorite book and read it here for free"
        img={img}
        />
        <div className="home">
            <div className="home__container _container">
                <BookGrid/>
            </div>
        </div>
    </>)
};

export default Home;