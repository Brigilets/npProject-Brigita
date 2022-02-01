import { Component } from "react";
import AppNavbar from "./AppNavbar";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
} from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems } from "../actions/itemActions";
import { addToCart, getCart } from "../actions/cartActions";

class Tickets extends Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    this.props.getItems();
  }

  isItemInCart = (itemId, cartItems) => {
    console.log("itemId", itemId);
    console.log("cartItems", cartItems);

    const itemInCart = cartItems.find(
      (cartItem) => cartItem.productId === itemId
    );
    console.log("item in cart", itemInCart);
    if (itemInCart) {
      return "Added to Cart";
    }
    return "Add To Cart";
  };

  onAddToCart = async (id, productId) => {
    await this.props.addToCart(id, productId, 1);
  };

  render() {
    const user = this.props.user;
    const { items } = this.props.item;
    console.log("From Tickets", this.props);
    return (
      <div>
        <AppNavbar />
        <Container>
          <div className="row">
            {items.map((item) => (
              <div key={item.title} className="col-md-4">
                <Card className="mb-4">
                  <CardBody>
                    <CardTitle tag="h5">{item.title}</CardTitle>
                    <CardSubtitle tag="h6"> {item.price}€</CardSubtitle>
                    <CardText>{item.category}</CardText>
                    {this.props.isAuthenticated ? (
                      <Button
                        color="success"
                        size="sm"
                        onClick={this.onAddToCart.bind(
                          this,
                          user._id,
                          item._id
                        )}
                      >
                        {!this.props.cart.cart
                          ? "Add To Cart"
                          : this.isItemInCart(
                              item._id,
                              this.props.cart.cart.items
                            )}
                      </Button>
                    ) : null}
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
  static propTypes = {
    getCart: PropTypes.func.isRequired,
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    addToCart: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };
}

const mapStateToProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  cart: state.cart,
});

export default connect(mapStateToProps, { getItems, addToCart, getCart })(
  Tickets
);
