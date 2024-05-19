import { api } from '../../lib/axios'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "./styles.css";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

const postSchema = yup.object({
  title: yup.string().required("* informe o titulo"),
  description: yup.string().required("* o campo descrição não pode ser vazio"),
  content: yup.string().required("* o campo conteúdo não pode ser vazio")
})

export function Form({ title, textButton }) {

  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(postSchema)
  });

  function handleCreatePost(data){
     api.post('/posts', data);
     reset();
     navigate('/');
  }

  return (
    <form onSubmit={handleSubmit(handleCreatePost)}>
      <h2>{ title }</h2>
      <div className="field">
        <input placeholder="Título" {...register("title")}/>
        { errors.title?.message }
      </div>

      <div className="field">
        <input placeholder="Descrição" {...register("description")}/>
        { errors.description?.message }
      </div>

      <div className="field">
        <textarea placeholder="Conteúdo" {...register("content")}/>
        { errors.content?.message }
      </div>

      <button type="submit">{ textButton }</button>
    </form>
  );
}
