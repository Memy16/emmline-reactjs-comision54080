import cart from "../assets/CartWidget.png";

export const CartWidget = () => {
    return (
    <div id="cart-widget">
        <img src={cart} alt="Carrito de Compras" width={60} />
        <span>4</span>
    </div>
    );
};
