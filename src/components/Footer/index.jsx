import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <span>
        <a
          href="https://jeffreyalvr.dev"
          target="_blank"
          rel="noopener noreferrer"
          title="Clique para abrir o meu GitHub"
        >
          @jeffreyalvr
        </a>
      </span>
      <p className="disclaimer">
        Imagens buscadas através da API pública{" "}
        <a href="https://unsplash.com/">Unsplash</a>.
      </p>
      <p className="disclaimer">
        Todos os dados pertencem aos seus respectivos donos.
      </p>
    </footer>
  );
};

export default Footer;
