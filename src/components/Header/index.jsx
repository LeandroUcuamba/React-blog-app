import './styles.css'
import Logo from '../../../public/vite.svg' 

export function Header() {
    return (
        <header>
            <img src={Logo} alt="" />
        </header>
    )
}