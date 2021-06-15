let Ishop = React.createClass({
    defaultName: "TableShop",

     render: function () {
        return React.DOM.table(null,
            React.DOM.thead(null,
                React.DOM.tr(null,
                    React.DOM.th(null, `Name`),
                    React.DOM.th(null, `Prise`),
                    React.DOM.th(null, `URL`),
                    React.DOM.th(null, `In stok`))
                ),
            React.createElement(Product, {products: this.props.products}))
     },
});