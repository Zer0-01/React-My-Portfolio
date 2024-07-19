import Image from "react-bootstrap/Image";
import Profile from "../assets/anas.jpeg";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";

function Home() {
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center align-items-center pt-5 pb-3">
          <Image src={Profile} roundedCircle width={200} height={200} />
        </div>
        <h2 className="d-flex justify-content-center align-items-center">
          Anas Zulkifli bin Mohd Jeffry
        </h2>
        <p className="text-justify">
          Motivated and detail-oriented Bachelor of Computer Science
          (Multimedia) with Honours student at Universiti Putra Malaysia (UPM).
          Experienced in a variety of programming languages including Dart,
          Java, Swift, HTML, CSS, JavaScript, and TypeScript. Experienced in
          utilizing frameworks such as Flutter, SwiftUI, and React to develop
          robust and scalable applications. Seeking a Software Engineer position
          to leverage my skills and contribute to innovative projects in a
          dynamic tech environment.
        </p>
      </Container>
      <Container>
        <Row className="justify-content-evenly">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Flutter Parent Application</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Flutter Recipe Shot</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Flutter Attendance System</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          
        </Row>
      </Container>
    </div>
  );
}

export default Home;
