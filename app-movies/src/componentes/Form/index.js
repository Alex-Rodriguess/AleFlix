import { useState } from "react";
import { categorias } from "../Category";
import styles from "./Form.module.css";

function Form() {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [videos, setVideos] = useState([]);
  const [errors, setErrors] = useState("");

  function valideUrl(url) {
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/;

    if (!regex.test(url) || url.lenght < 43) {
      setErrors("ERRO: URL inválida");
      return false;
    } else {
      return url.substring(32, 43); // id do vídeo
    }
  }

  function onSave(e) {
    e.preventDefault();
    console.log(url, category);

    // validar category
    if (!category || category === "-") {
      setErrors("ERRO: Escolha uma categoria!");
      return;
    } else {
      setErrors("");
    }

    // validar url
    const urlVideo = valideUrl(url);
    if (urlVideo && category) {
      // salvar os dados
      // Guardar a url e a categoria
      const newVideo = { url, category };
      setVideos([...videos, newVideo]);
      localStorage.setItem("videos", JSON.stringify([...videos, newVideo]));
      // limpar o form
      setUrl("");
      setCategory("");
    } else {
      setErrors("ERRO: URL inválida");
    }
  }

  return (
    <>
      <section className={styles.container}>
        <h2>Cadastro de Vídeo</h2>
        <form onSubmit={onSave}>
          <div>
            <label>URL do vídeo</label>
            <input
              type="text"
              placeholder="Insira a URL do vídeo"
              required="required"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              minLength="43"
              maxLength="43"
            />
          </div>
          <div>
            <label>Categoria</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="-">Selecione uma categoria</option>
              {categorias.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </div>
          <div>
            <button>Cadastrar</button>
          </div>
          <div>{errors}</div>
        </form>
      </section>
    </>
  );
}

export default Form;