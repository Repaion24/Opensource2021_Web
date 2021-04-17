import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {
    Jumbotron,
    Button,
    ListGroup,
    ListGroupItem,
    Tab,
    Tabs
} from 'react-bootstrap';

const Shoplist = (props) => {

    const {
        products,
        products1,
        products2,
        products3,
        PAGE_PRODUCT,
        PAGE_CART,
        page,
        cart,
        addToCart,
        RemoveFromCart,
        renderProducts,
        renderCart,
        renderCart1,
        navigateTo,
        modalOpen,
        openModal,
        closeModal,
        renderProducts1,
        renderProducts2,
        renderProducts3
    } = props;

    return (
        <div>
            {/* 여기는 All Tabs부분 */}
                <ListGroup variant="flush">
                    <table class="table table-hover">
                        {renderCart()}
                    </table>
                </ListGroup>
        </div>

    );
};

export default Shoplist;