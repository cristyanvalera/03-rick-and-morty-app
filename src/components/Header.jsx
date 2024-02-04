import banner from '../assets/rym-02.png';
import './styles/header.css';

export const Header = () => {
    return (
        <header className='app-header'>
            <img src={banner} alt="banner" />
        </header>
    );
};
