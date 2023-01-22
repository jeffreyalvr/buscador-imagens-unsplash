import "./styles.css";

const ImageList = ({ results }) => {
  return (
    <div className="image-list">
      {!results
        ? null
        : results.map((result) => (
            <div className="image-item" key={result.id}>
              <img src={result.urls.raw} alt={result.description} />
            </div>
          ))}
    </div>
  );
};

export default ImageList;
