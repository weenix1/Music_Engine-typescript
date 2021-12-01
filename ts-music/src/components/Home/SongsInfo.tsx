import { Card, Button, Col } from "react-bootstrap";
import Song from "../interfaces/song";
import { useNavigate } from "react-router-dom";

interface SongsInfoProps {
  song: Song;
}
const SongsInfo = ({ song }: SongsInfoProps) => {
  const navigate = useNavigate();
  console.log("here is song", song);
  return (
    <>
      <Col xs={6} md={4} lg={3} style={{ padding: "2px" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={song.album.cover} />
          <Card.Body>
            <Card.Title onClick={() => navigate("/detail")}>
              {song.title}
            </Card.Title>
            <span>{song.album.title}</span>
            <span>{song.duration}</span>
          </Card.Body>
        </Card>
      </Col>
      ))
    </>
  );
};

export default SongsInfo;
