let Ishop = React.createClass({
    defaultName: "TableShop",

    getInitialState: function(){
        return{
            selectedItemId: 0,
            className: "checkedTd",
            products: [...products]
        }
    },

    checkedTr: function(clickedItem){
        this.setState({selectedItemId: clickedItem.className})
    },
    deleteTr: function(clickedItem){
        const deleteProductsArr = this.state.products.filter(element => {
            return element.id !== clickedItem.className
        });
        this.setState({products:deleteProductsArr})
    },

     render: function () {
        let arrProduct = this.state.products.map( elem =>
            React.createElement(Product, {key:elem.code,
                dataId: elem.id,
                name: elem.name,
                prise: elem.prise,
                url: elem.url,
                in_stok: elem.in_stok,
                cbChecked: this.checkedTr,
                activeLine: this.state.selectedItemId,
                cbDeleteItem: this.deleteTr})
        );
        return React.DOM.table({className: "table"},
            React.DOM.thead(null,
                React.DOM.tr(null,
                    React.DOM.th({className: "th"}, `Name`),
                    React.DOM.th({className: "th"}, `Prise`),
                    React.DOM.th({className: "th"}, `URL`),
                    React.DOM.th({className: "th"}, `In stok`),
                    React.DOM.th({className: "th"}, `Control`))
                ),
            React.DOM.tbody(null,arrProduct));
     },
});