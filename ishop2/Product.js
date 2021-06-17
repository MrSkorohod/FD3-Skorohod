"use strict";
let Product = React.createClass({
    displayName: "Product",
    // getInitialState: function(){
    //     return{
    //         selectedItemId: "",
    //         className: "checkedTd"
    //     }
    // },

    checked: function(event){
        this.props.cbChecked(event.currentTarget);
    },
    delete: function(event){
        event.stopPropagation();
        this.props.cbDeleteItem(event.target.closest(`tr`));
    },


    render: function() {
        let redColor;
        if(this.props.dataId === this.props.activeLine){
            redColor = `rgb(255, 85, 85)`;
        }
        else{
            redColor = `transparent`;
        }
        const button = React.DOM.button(null, `Delete`);
        return React.DOM.tr({key: this.props.code, onClick: this.checked, style: {backgroundColor: redColor} ,className: this.props.dataId},
            React.DOM.td({className: "td"}, this.props.name),
            React.DOM.td({className: "td"}, this.props.prise),
            React.DOM.td({className: "td"}, this.props.url),
            React.DOM.td({className: "td"}, this.props.in_stok),
            React.DOM.td({className: "td", onClick:this.delete}, button)
            );
    },
});