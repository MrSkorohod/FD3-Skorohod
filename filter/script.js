let search = React.createClass({

    displayName: "Search Something",

    propTypes: {
        searchItem: React.PropTypes.array
    },

    getInitialState:function(){
        return {arrayItems: this.props.searchItem, checked: false, str:""}
    },
    sortList: function(event){
        let newList = [...this.props.searchItem];
        event.target.checked
            ?this.setState({arrayItems: newList.sort(), checked: true}):
            this.setState({arrayItems: this.props.searchItem, checked:false});
    },
    findLetter: function(event) {
        let newList = [...this.props.searchItem];
        this.setState({arrayItems: newList.filter(word => word.includes(event.target.value)), str: event.target.value})
    },
    clear: function(event){
        this.setState({arrayItems: this.props.searchItem, checked:false, str: ""})
    },
    render: function(){

        var params = this.state.arrayItems.map( (el, idx) =>
            React.DOM.option({key: idx},el)
        );

        return React.DOM.div(null,
            React.DOM.div(null,
                React.DOM.input({type:'checkbox', onChange:this.sortList, checked:this.state.checked}),
                React.DOM.input({type: 'text', onChange: this.findLetter, value:this.state.str}),
                React.DOM.input({type: 'button', defaultValue: 'Clear', onClick:this.clear})),
            React.DOM.select({size:6}, params)
        )
    }


});