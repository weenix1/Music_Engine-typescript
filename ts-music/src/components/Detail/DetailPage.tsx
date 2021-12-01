import { Form, Container, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import Song from "../interfaces/song";
import { useParams } from "react-router-dom";

/* interface DetailPageProps {
  song: Song;
} */

const DetailPage = () => {
  const { id } = useParams();
  const [songs, setSongs] = useState<Song | null>(null);

  useEffect(() => {
    getSong();
  }, []);

  const getSong = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/track/" + id
      );
      if (response.ok) {
        let data = await response.json();
        console.log("HERE IS MY DATA", data);

        setSongs(data);
        // the comment has been sent succesfully!!
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return songs ? (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={songs.album.cover} />
            <Card.Body>
              <Card.Title>
                Song Title:
                {songs.title}
              </Card.Title>
              <span>Album Title:{songs.album.title}</span>
              <span>{songs.duration}</span>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  ) : null;
};

export default DetailPage;
