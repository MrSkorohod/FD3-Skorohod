"use strict";
let Product = React.createClass({
    displayName: "Product",
    // getInitialState: function(){
    //     return{
    //         selectedItemId: "",
    //         className: "checkedTd"
    //     }
    // },

    // checked: function(event){
    //     this.setState({selectedItemId: event.target.id});
    //     if(event.target.id === this.state.selectedItemId){
    //         event.target.className = this.state.className;
    //     }
    //
    //     console.log(this.state);
    // },


    render: function() {
        const button = React.DOM.button(null, `Delete`);
         let arrProducts = [];
         for(let i = 0; i < this.props.products.length; i++){
             let products = this.props.products[i];
             let productCode =
                 React.DOM.tr({key: products.code, onClick: this.props.clChecked, id: products.id},
                     React.DOM.td({className: "td"}, products.name),
                     React.DOM.td({className: "td"}, products.prise),
                     React.DOM.td({className: "td"}, products.URL),
                     React.DOM.td({className: "td"}, products.in_stok),
                     React.DOM.td({className: "td"}, button),
                 );
             arrProducts.push(productCode);
         }


         return React.DOM.tbody(null,arrProducts);
    },
});