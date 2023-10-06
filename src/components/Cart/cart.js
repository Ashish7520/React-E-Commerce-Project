import { Button } from "react-bootstrap";
import Modal from "../UI/Modal";
import classes from "./cart.module.css";

const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  let totalPrice = 0;

  cartElements.map((item) => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <Modal onClick={props.onClick}>
      <div className={classes.cartName}> Cart </div>
      <div className={classes.outerDiv}>
        <div>Item</div>
        <div>Price</div>
        <div>Quantity</div>
      </div>
      <div className={classes.bodyDiv}>
        <ul>
          {cartElements.map((item) => (
            <li key={item.title}>
              <div className={classes.itemImage}>
                <img src={item.imageUrl} alt={item.title} />
                {item.title}
              </div>
              <div className={classes.itemPrice}>{item.price}</div>
              <div className={classes.itemQuantity}>
                {item.quantity}
                <Button variant="secondary">Remove</Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.totalDiv}>Total Price: ${totalPrice}</div>
    </Modal>
  );
};

export default Cart;
