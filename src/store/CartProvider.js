import { useState, useEffect } from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(null);
  const email = localStorage.getItem("email");

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(
          `https://e-commerce-website-d04f9-default-rtdb.firebaseio.com/cart${email}.json`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch cart items.");
        }

        const data = await response.json();
        if (data) {
          const cartIds = Object.keys(data);
          cartIds.forEach((item) => {
            console.log(item);
            setId(item);
          });

          const cartItems = Object.values(data);
          setItems(cartItems);
          console.log(cartItems);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error.message);
      }
    };

    fetchCartItems();
  }, [email]);

  const addItemHandler = async (item, idAPI) => {
    console.log(idAPI);
    console.log(item.id);
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (prevItem) => prevItem.title === item.title
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        prevItems.push({ ...item, quantity: 1 });
      }

      return [...prevItems];
    });

    const update = items.filter((data) => {
      return data.title == item.title;
    });

    if (update[0].quantity == 1) {
      const response = await fetch(
        `https://e-commerce-website-d04f9-default-rtdb.firebaseio.com/cart${email}.json`,
        {
          method: "POST",
          body: JSON.stringify(update[0]),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setId(data.name);
      } else {
        const error = await response.json();
        console.log(error);
      }
    } else {
      console.log("you are in patch block");
      const response = await fetch(
        `https://e-commerce-website-d04f9-default-rtdb.firebaseio.com/cart${email}/${id}.json`,
        {
          method: "PATCH",
          body: JSON.stringify({ quantity: update[0].quantity }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        const error = await response.json();
        console.log(error);
      }
    }
    console.log(update, "update");
  };

  const removeItemHandler = async (itemName) => {
    console.log(itemName);
    setItems((prevItems) => {
      console.log(prevItems);
      const updatedItems = prevItems
        .map((item) => {
          if (item.title === itemName) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);

      return updatedItems;
    });

    const update = items.filter((data) => {
      return data.title == itemName;
    });
    let obj = update[0];
    let data = { ...obj };
    data.quantity = data.quantity - 1;

    if (data.quantity == 0) {
      const response = await fetch(
        `https://e-commerce-website-d04f9-default-rtdb.firebaseio.com/cart${email}/${id}.json`,
        {
          method: "DELETE", // Change the method to DELETE for a delete request
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("Item deleted successfully.");
      } else {
        const error = await response.json();
        console.log("Error deleting item:", error);
      }
    } else {
      const response = await fetch(
        `https://e-commerce-website-d04f9-default-rtdb.firebaseio.com/cart${email}/${id}.json`,
        {
          method: "PATCH",
          body: JSON.stringify({ quantity: data.quantity }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        const error = await response.json();
        console.log(error);
      }
    }

    console.log(data, "update");
  };

  const cardContent = {
    item: items,
    totalAmount: 0,
    id: id,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <>
      <CartContext.Provider value={cardContent}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
