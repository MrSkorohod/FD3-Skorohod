let Ishop = React.createClass({
    defaultName: "TableShop",

    getInitialState: function(){
        return{
            selectedItemId: "",
            className: "checkedTd"
        }
    },

    checked: function(event){
        this.setState({selectedItemId: event.target.id});
        if(event.target.id === this.state.selectedItemId){
            event.target.className = this.state.className;
        }

        console.log(this.state);
    },

     render: function () {
        return React.DOM.table({className: "table"},
            React.DOM.thead(null,
                React.DOM.tr(null,
                    React.DOM.th({className: "th"}, `Name`),
                    React.DOM.th({className: "th"}, `Prise`),
                    React.DOM.th({className: "th"}, `URL`),
                    React.DOM.th({className: "th"}, `In stok`),
                    React.DOM.th({className: "th"}, `Control`))
                ),
            React.createElement(Product, {products: this.props.products, clChecked: this.checked}))
     },
});