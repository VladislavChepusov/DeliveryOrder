import Content from "./content";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
 
import React from "react";

export default class ListPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Contents: [],
    };
  }

  componentDidUpdate() {
    if (this.state.Contents !== this.props.POSTS) {
      this.setState({
        Contents: this.props.POSTS,
      });
    }
  }

  // подгрузка данных
  componentDidMount(prevProps) {
    this.setState({
      Contents: this.props.POSTS,
    });
  }

  render() {
    return (
      <>
        <Row >
          <Col >
            <Container >
              <Container>
                <div className="Main">
                  {this.state.Contents.map((_item, index) => (

                    <Content
                      POSTINDEX={index}
                      id={_item.id}
                      senderCity={_item.senderCity}
                      senderAddress={_item.senderAddress}
                      receiverCity={_item.receiverCity}
                      receiverAddress={_item.receiverAddress}
                      cargoWeight={_item.cargoWeight}
                      time={_item.cargoPickupDate}
                    />
                  ))}
                </div>
              </Container>
            </Container>
          </Col>
        </Row>
      </>
    );
  }
}