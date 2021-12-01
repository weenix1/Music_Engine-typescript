import { Form, Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Song from "../interfaces/song";
import SongsInfo from "./SongsInfo";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [query, setQuery] = useState("");

  const getSongs = async (query: string) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );
      if (response.ok) {
        let data = await response.json();
        let newData = data.data;

        console.log(newData);
        setSongs(newData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log("songs", songs);
  useEffect(() => {
    getSongs(query);
  }, [query]);
  return (
    <Container className="home">
      <Row className="searchRow">
        <Col className="search col-12 " style={{ paddingTop: "5%" }}>
          <Form>
            <h4>Search for your Favorite Song</h4>
            <Form.Group controlId="formGroupEmail">
              <Form.Control
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="search"
                placeholder="Search for your favorite song..."
              />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Row>
            {songs &&
              songs.map((song) => <SongsInfo key={song.id} song={song} />)}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
