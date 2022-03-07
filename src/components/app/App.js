
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from '../../config/Routes';
import Footer from '../footer/Footer';

import './app.sass';

const App = () => {

    return(<Router>
        <main className="page">
            <Routes/>
        </main>
        <Footer/>
    </Router>)
}
export default App;