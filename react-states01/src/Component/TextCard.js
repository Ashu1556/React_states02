import "./TextCard.css";

const TextCard = ({ title, content, showColor }) => {
  return (
    <div
      style={{
        backgroundColor: showColor ? "black" : "white",
        color: showColor ? "white" : "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "10px",
        gap: "5px",
      }}
    >
      <div className="text-card">
        <h2 className="text-card-title">{title}</h2>
        <p className="text-card-content">{content}</p>
      </div>
      <div className="text-card">
        <h2 className="text-card-title">{title}</h2>
        <p className="text-card-content">{content}</p>
      </div>
      <div className="text-card">
        <h2 className="text-card-title">{title}</h2>
        <p className="text-card-content">{content}</p>
      </div>
      <div className="text-card">
        <h2 className="text-card-title">{title}</h2>
        <p className="text-card-content">{content}</p>
      </div>
      <div className="text-card">
        <h2 className="text-card-title">{title}</h2>
        <p className="text-card-content">{content}</p>
      </div>
      <div className="text-card">
        <h2 className="text-card-title">{title}</h2>
        <p className="text-card-content">{content}</p>
      </div>
      <div className="text-card">
        <h2 className="text-card-title">{title}</h2>
        <p className="text-card-content">{content}</p>
      </div>
      <div className="text-card">
        <h2 className="text-card-title">{title}</h2>
        <p className="text-card-content">{content}</p>
      </div>
    </div>
  );
};

export default TextCard;
