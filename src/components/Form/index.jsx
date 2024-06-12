import { useForm } from "react-hook-form";
import * as yup from "yup";
import "./styles.css";
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from "react";
import { api } from '../../lib/axios';
import { useParams } from "react-router-dom";

const postSchema = yup.object({
  title: yup.string().required("* informe o titulo"),
  description: yup.string().required("* o campo descrição não pode ser vazio"),
  content: yup.string().required("* o campo conteúdo não pode ser vazio")
});

export function Form({ title, textButton, onActionRequest }) {

  const { id } = useParams(); 

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(postSchema)
  });

  const [languages, setLanguages] = useState({ PHP: false, Java: false });
  const [country, setCountry] = useState('Angola');

  async function getDataUpdate(){
    const response = await api.get(`/posts/${id}`);
    reset(response.data);
  }

  useEffect(() => {
    getDataUpdate();
  }, []);

  const handleLanguageChange = (e) => {
    const { name, checked } = e.target;
    setLanguages(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit((data) => onActionRequest({ ...data, languages, country }))}>
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

      <h3>Linguagens:</h3>
      <div className="checkfield">
        <label>
          <input
            type="checkbox"
            name="PHP"
            checked={languages.PHP}
            onChange={handleLanguageChange}
          />
          PHP
        </label>
        <label>
          <input
            type="checkbox"
            name="Java"
            checked={languages.Java}
            onChange={handleLanguageChange}
          />
          Java
        </label>
      </div>

      <h3>País:</h3>
      <div className="selectfield">
        <select value={country} onChange={handleCountryChange}>
          <option value="Angola">Angola</option>
          <option value="Brasil">Brasil</option>
          <option value="USA">USA</option>
        </select>
      </div>

      <button type="submit">{ textButton }</button>
    </form>
  );
}
