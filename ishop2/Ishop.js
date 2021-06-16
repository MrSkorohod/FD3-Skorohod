let Ishop = React.createClass({
    defaultName: "TableShop",

    getInitialState: function(){
        return{
            selectedItemId: 0,
            className: "checkedTd"
        }
    },

    checkedTr: function(target){
        this.setState({selectedItemId: target});
        target.className = this.state.className;
        console.log(this.state);
    },

     render: function () {
        let arrProduct = this.props.products.map( elem =>
            React.createElement(Product, {key:elem.code,
                dataId: elem.id,
                name: elem.name,
                prise: elem.prise,
                url: elem.url,
                in_stok: elem.in_stok,
                clChecked: this.checkedTr})
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