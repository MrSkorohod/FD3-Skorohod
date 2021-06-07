var tableShop = React.createClass({
    displayName: "tableShop",

    // getDefaultProps: function() {
    //     return {name: "Undefined shop", products: []}
    // },

    render: function() {

        var productsCode = [];
        for (var i = 0; i < this.props.products.length; i++) {
            var product = this.props.products[i];
            var productCode =
                React.DOM.div({key: product.code},
                    React.DOM.div({className: "headProduct"}, product.name),
                    React.DOM.div({className: "prise"}, `Prise: ${product.prise}`),
                    React.DOM.img({src: `${product.image}`, className: "image"}, null),
                    React.DOM.div({className: "inStock"}, `In Stock: ${product.in_stok}`),
                );
            productsCode.push(productCode);
        }

        return React.DOM.div({className: "mainTable"},
            React.DOM.div({className: "header"}, this.props.name),
            React.DOM.div({className: "productTable"}, productsCode));
    }
});