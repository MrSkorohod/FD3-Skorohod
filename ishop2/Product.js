"use strict";
let Product = React.createClass({
    displayName: "Product",
    getInitialState: function(){
        return{
            selectedItemId: "",
            className: "checkedTd"
        }
    },

    checked: function(event){
        this.props.clChecked(this.props.dataId);
    },


    render: function() {
        const button = React.DOM.button(null, `Delete`);
        return React.DOM.tr({key: this.props.code, onClick: this.checked},
            React.DOM.td({className: "td"}, this.props.name),
            React.DOM.td({className: "td"}, this.props.prise),
            React.DOM.td({className: "td"}, this.props.url),
            React.DOM.td({className: "td"}, this.props.in_stok),
            React.DOM.td({className: "td"}, button)
            );
    },
});