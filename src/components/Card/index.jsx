import "./styles.css";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export function Card({ post, onDeletePost }) {

  const navigate = useNavigate();

  const trueLanguages = Object.entries(post.languages || {}).filter(([key, value]) => value === true).map(([key, value]) => key);

  return (
    <article className="cardContainer">
      <header>
        <h2>{post.title}</h2>
        <MdDelete size={28} color="#ed4337" onClick={() => onDeletePost(post.id)}/>
      </header>
      <p>
        {post.description}
      </p>

      <div className="detailsContainer">
        <div className="languages">
          <strong>Linguagem:</strong> {trueLanguages.length > 0 ? trueLanguages.join(', ') : 'Nenhuma linguagem selecionada'}
        </div>
        <div className="country">
          <strong>País:</strong> {post.country || 'Nenhum país selecionado'}
        </div>
      </div>

      <div className="buttonsContainer">
        <button onClick={() => navigate(`/post/${post.id}`)}>Ver publicação</button>
        <button onClick={() => navigate(`/updatePost/${post.id}`)}>Atualizar</button>
      </div>
    </article>
  );
}
