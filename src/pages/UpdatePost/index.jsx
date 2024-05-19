import { useEffect } from "react";
import { Form } from "../../components/Form";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { api } from '../../lib/axios';

export function UpdatePost() {

  const navigate = useNavigate();
  const { id } = useParams();

  function handleUpdatePost(data){
    api.put(`/posts/${id}`, data);
    navigate('/');
  }

/*  useEffect(() => {
    api.get(`/posts/${id}`)
    .then(response => console.log(response.data))
  }, []) */

  return (
    <div>
      <Form title={"Editar publicação"} textButton={"Editar"} onActionRequest={handleUpdatePost} />
    </div>
  );
}
