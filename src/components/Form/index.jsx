import "./styles.css";

export function Form({ title, textButton }) {


  return (
    <form>
      <h2>{ title }</h2>
      <div className="field">
        <input placeholder="Título" />
      </div>

      <div className="field">
        <input placeholder="Descrição" />
      </div>

      <div className="field">
        <textarea placeholder="Descrição" />
      </div>

      <button>{ textButton }</button>
    </form>
  );
}
