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
        <Card onClick={() => navigate("/detail")}>
          <Card.Img variant="top" src={song.album.cover} />
          <Card.Body>
            <Card.Title>
              Song Title:
              {song.title}
            </Card.Title>
            <span>Album Title:{song.album.title}</span>
            <span>{song.duration}</span>
          </Card.Body>
        </Card>
      </Col>
      ))
    </>
  );
};

export default SongsInfo;
