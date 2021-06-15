"use strict";
let Product = React.createClass({
    displayName: "Product",

    render: function() {
         let arrProducts = [];
         for(let i = 0; i < this.props.products.length; i++){
             let products = this.props.products[i];
             let productCode =
                 React.DOM.tr({key: products.code},
                     React.DOM.td(null, products.name),
                     React.DOM.td(null, products.price),
                     React.DOM.td(null, products.URL),
                     React.DOM.td(null, products.in_stok)
                 );
             arrProducts.push(productCode);
         }
         return React.DOM.tbody(arrProducts);
    },
});