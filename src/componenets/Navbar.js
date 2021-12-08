import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

//styles
import './Navbar.css';

import Searchbar from './Searchbar';

export default function Navbar() {
    const { color } = useTheme(); //gets the color property from the useTheme() customhook which wraps the useContext()hook
    return (
        <div className="navbar" style={{ background: color }}>
            <nav>
                <Link to="/" className="brand">
                    <h1>Recipe Book</h1>
                </Link>
                <Searchbar />
                <Link to="/create">Create Recipe</Link>
            </nav>
        </div>
    )
}
