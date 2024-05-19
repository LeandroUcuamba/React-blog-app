import { useEffect, useState } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

export function OnePost() {

  const [post, setPost] = useState({});

  const {id} = useParams();

  useEffect(() => {
    api.get(`/posts/${id}`)
    .then(res => setPost(res.data))
    .catch(err => console.log(err))
  }, [])
  

  return (
    <article className="onePostContainer">
      <h2>{post.title}</h2>
      <p>
        {post.content}
      </p>
    </article>
  );
}
