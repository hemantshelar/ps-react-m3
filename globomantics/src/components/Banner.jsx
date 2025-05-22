import logo from './../assets/GloboLogo.png';
import { logo as BannerLogo } from './Banner.module.css';

const subtitleStyle = {
    fontStyle: 'italic',
    fontSize: 'x-large',
    color: 'coral',
};

const Banner = () =>{
    return (
        <header className="row mb-4" >
            <div className="col-3">
                <img src={logo}  alt="Globomantics Logo" className={BannerLogo} />
            </div>
            <div className="col-9 mt-5" style={subtitleStyle}>
                Providing houses all over the world!
            </div>
        </header>
    );
}

export default Banner;