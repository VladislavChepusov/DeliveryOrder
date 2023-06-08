import React from "react";
import Header from "../Components/Header";
import "../styles/myapp.css";
import NotFoundPage from "./NotFoundPage";
import config from "../config.json";
import { Client, OrderModel } from "../Logic/OrderApiModels";
import ListPost from "../Components/ListPost";
import {
  MDBContainer,

} from "mdb-react-ui-kit";
export default class OrderListPage extends React.Component {
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

    var Data = connect.getOrders();
    Data.then((res) => {
      this.setState({
        Contents: res,
        isLoaded: true,
        error: false,
      });
      //return res.id;
    }).catch((error) => {
      console.log("PageError", error);
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
            {this.state.Contents != null && (
              <ListPost POSTS={this.state.Contents} />
            )}
          </MDBContainer>
        </>
      );
    }
  }
}
