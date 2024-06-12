import './styles.css'
import Logo from '../../../public/vite.svg' 
import { useNavigate } from 'react-router-dom'

export function Header() {

    const navigate = useNavigate();

    return (
        <header>
            <img src={Logo} alt="" />
            <button onClick={() => navigate('/createPost')} >Criar Post</button>
        </header>
    )
}