import Card from "react-bootstrap/Card";
import { Artworktype } from "../utils/types";
import { useNavigate } from "react-router-dom";

function DisplayCard(props: Artworktype & { page: number }) {
  const { thumbnail, title, id } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/artwork/${id}`, { state: { from: props.page } });
  };

  return (
    <Card className="m-1" onClick={handleClick}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          padding: "15px",
        }}
      >
        <Card.Img
          variant="top"
          src={thumbnail?.lqip}
          alt={thumbnail?.alt_text}
          style={{ width: "50px", height: "50px" }}
        />
        <Card.Title style={{ margin: 0 }}>{title}</Card.Title>
      </div>
    </Card>
  );
}

export default DisplayCard;
