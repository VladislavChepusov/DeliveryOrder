import React from "react";
import Header from "../Components/Header";
import "../styles/myapp.css";
import NotFoundPage from "./NotFoundPage";
import config from "../config.json";
import { Client } from "../Logic/OrderApiModels";
import Content from "../Components/content";
import {
  MDBContainer,
} from "mdb-react-ui-kit";

export default class OrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Contents: null,
      isLoaded: false,
      error: false,
    };
  }

  // подгрузка данных
  componentDidMount(prevProps) {
    var connect = new Client(config.URL);
    var Data = connect.getOrderById(this.props.id);

    Data.then((res) => {
  

      this.setState({
        Contents: res,
        isLoaded: true,
        error: false,
      });


    
      //return res.id;
    }).catch((error) => {
      console.log("!!!!!Error", error);
      this.setState({
        error: true,
        isLoaded: true,
      });
    });
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <Header />
          <NotFoundPage />
        </>
      );
    } else if (!this.state.isLoaded) {
      return <div>Загрузка....</div>;
    } else {
      return (
        <>
          <Header />
          <MDBContainer
            fluid
            className="p-4 background-radial-gradient overflow-hidden"
            style={{ height: "100%" }}
          >
            <Content
              POSTINDEX={1}
              id={this.state.Contents.id}
              senderCity={this.state.Contents.senderCity}
              senderAddress={this.state.Contents.senderAddress}
              receiverCity={this.state.Contents.receiverCity}
              receiverAddress={this.state.Contents.receiverAddress}
              cargoWeight={this.state.Contents.cargoWeight}
              time={new Date(this.state.Contents.cargoPickupDate)}
            />
          </MDBContainer>

        </>
      );
    }
  }
}
