import { useParams } from "react-router-dom";
import OrderPage from "./OrderPage";

export const Order = () => {
  const { id } = useParams();
  return <OrderPage id={id} />;
};