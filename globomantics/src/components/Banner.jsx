import logo from './../assets/GloboLogo.png';
import { logo as BannerLogo } from './Banner.module.css';
import propTypes from 'prop-types';

const subtitleStyle = {
    fontStyle: 'italic',
    fontSize: 'x-large',
    color: 'coral',
};

const Banner = (props) =>{
    return (
        <>
        <header className="row mb-4" >
            <div className="col-3">
                <img src={logo}  alt="Globomantics Logo" className={BannerLogo} />
            </div>
            <div className="col-9 mt-5" style={subtitleStyle}>
                {props.headerText}
            </div>
        </header>
        </>
    );
}

Banner.propTypes = {
    headerText: propTypes.string.isRequired,
};


export default Banner;