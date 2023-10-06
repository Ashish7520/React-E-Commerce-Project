import { Button } from "react-bootstrap";
import Modal from "../UI/Modal";
import classes from "./cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  // const cartElements = [
  //   {
  //     title: "Colors",
  //     price: 100,
  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  //     quantity: 2,
  //   },
  //   {
  //     title: "Black and white",
  //     price: 50,
  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  //     quantity: 3,
  //   },
  //   {
  //     title: "Yellow and Black",
  //     price: 70,
  //     imageUrl:
  //       "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  //     quantity: 1,
  //   },
  // ];

  //

  // cartElements.map((item) => {
  //
  // });

  const cartCtx = useContext(CartContext);
  let totalPrice = 0;
  cartCtx.item.map((item) => {
    totalPrice += item.price * item.quantity;
  });

  const addCartHandler = (item) => {
    cartCtx.addItem({ ...item });
  };

  const removeCartHandler = (itemTitle) => {
    console.log(itemTitle);
    cartCtx.removeItem(itemTitle); // Assuming itemTitle is what you want to use to remove the item
  };

  const orderHandler = () => {
    console.log("true");
    alert("Are you sure");
  };

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
          {cartCtx.item.map((item) => (
            <li key={item.title}>
              <div className={classes.itemImage}>
                <img src={item.imageUrl} alt={item.title} />
                {item.title}
              </div>
              <div className={classes.itemPrice}>{item.price}</div>
              <div className={classes.itemQuantity}>
                <Button
                  variant="secondary"
                  onClick={() => addCartHandler(item)}
                >
                  +
                </Button>
                {item.quantity}
                <Button
                  variant="secondary"
                  onClick={() => removeCartHandler(item.title)}
                >
                  -
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.totalDiv}>Total Price: ${totalPrice}</div>
      <div className={classes.closeBtn}>
        <Button onClick={props.onClick} variant="secondary">
          Close
        </Button>
      </div>
      <div className={classes.orderBtn}>
        <Button onClick={orderHandler} variant="secondary">
          Order
        </Button>
      </div>
    </Modal>
  );
};

export default Cart;
