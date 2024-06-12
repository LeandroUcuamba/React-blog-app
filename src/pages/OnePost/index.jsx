import { useEffect, useState } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

export function OnePost() {

  const [post, setPost] = useState({});

  const {id} = useParams();

  const trueLanguages = Object.entries(post.languages || {}).filter(([key, value]) => value === true).map(([key, value]) => key);

  useEffect(() => {
    api.get(`/posts/${id}`)
    .then(res => setPost(res.data))
    .catch(err => console.log(err))
  }, [id]) // Adicionamos id como dependência para que useEffect seja chamado sempre que o id for alterado

  return (
    <article className="onePostContainer">
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <div className="detailsContainer">
        <div className="languages">
        <strong>Linguagem:</strong> {trueLanguages.length > 0 ? trueLanguages.join(', ') : 'Nenhuma linguagem selecionada'}
        </div>
        <div className="country">
          <strong>País:</strong> {post.country || 'Nenhum país selecionado'}
        </div>
      </div>
    </article>
  );
}
