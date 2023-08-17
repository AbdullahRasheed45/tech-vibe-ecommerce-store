import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { userRequest } from "../requestMethod";
import { clearCart } from "../redux/cartRedux"; // Import the action

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Add useDispatch hook
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
         // Dispatch the action to clear the cart
      } catch (error) {
        console.error("Error creating order:", error);
      }
    };
    data && createOrder();
  }, [cart, data, currentUser, dispatch]);

  const goToHomepage = () => {
    navigate("/");
    dispatch(clearCart());
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successful. Your order is being prepared...`}
      <button
        style={{ padding: 10, marginTop: 20, cursor: "pointer" }}
        onClick={goToHomepage}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;
