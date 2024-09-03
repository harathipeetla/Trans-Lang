import {Link} from 'react-router-dom'
import { useLanguage } from '../../context'
import './index.css'

const Menu =()=>{
    const {language, translations} = useLanguage()
    const menuLabels = translations[language]

    return(
        <nav className='menu'>
            <Link to="/" className="nav-link">{menuLabels.home}</Link>
            <Link to ="/movies" className="nav-link">{menuLabels.movies}</Link>
            <Link to="/tv-shows" className="nav-link">{menuLabels.tvshows}</Link>
            <Link to="/sports" className="nav-link">{menuLabels.sports}</Link>
            <Link to="/live" className="nav-link">{menuLabels.live}</Link>
        </nav>
    )

}

export default Menu