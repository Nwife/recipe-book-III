import { useTheme } from '../hooks/useTheme';
import sun from '../assets/mode_icon.svg';

//styles
import './ThemeSelector.css';

const themeColors = ['#58249c', '#249c8b', '#b70233'];

export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme();

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark');
    }
    console.log(mode);

    return (
        <div className="theme-selector">
            <div className="mode-toggle">
                <img
                  src={sun}
                  alt="darklight toggle"
                  onClick={toggleMode}
                  style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
                />
            </div>
            <div className="theme-buttons">
                {themeColors.map(color => (
                    <div 
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{ background: color }}
                    />
                ))}
            </div>    
        </div>
    )
}
