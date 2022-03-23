import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                < div id='nav-change' className="col-12 nav" >
                    <div className="col-12 logo"></div>
                    <h2 className="col-12 name">ALIEN SPOTTER</h2>
                    <ul className='col-12'>
                        <li className='home-heading'><a href="/" className='index-page'>Home</a></li>
                        <li><a href="/ComTwo" className='page-two'>Infomation</a></li>
                        <li><a href="/ComThree" className='page-three'>Timeline</a></li>
                    </ul>
                </div >
            </div>
        </div>
    );
}

export default Header;