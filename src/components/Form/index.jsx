import { api } from '../../lib/axios'
import { useForm } from "react-hook-form";
import "./styles.css";

export function Form({ title, textButton }) {

  const { register, handleSubmit, reset } = useForm();

  function handleCreatePost(data){
     api.post('/posts', data)
     reset();
  }

  return (
    <form onSubmit={handleSubmit(handleCreatePost)}>
      <h2>{ title }</h2>
      <div className="field">
        <input placeholder="Título" {...register("title")}/>
      </div>

      <div className="field">
        <input placeholder="Descrição" {...register("description")}/>
      </div>

      <div className="field">
        <textarea placeholder="Conteúdo" {...register("content")}/>
      </div>

      <button type="submit">{ textButton }</button>
    </form>
  );
}
