let search = React.createClass({

    displayName: "Search Something",

    propTypes: {
        searchItem: React.PropTypes.array
    },

    getInitialState:function(){
        return {
            arrayItems: this.props.searchItem,
            checked: false,
            str:""
        }
    },
    sortList: function(event){
        this.setState({checked: event.target.checked}, this.processList);

    },
    findLetter: function(event) {
        this.setState({str: event.target.value}, this.processList);

    },
    processList: function(){
        let result = [...this.props.searchItem];
        if(this.state.str){
            result = result.filter(word => word.indexOf(this.state.str) !== -1);
        }
        if(this.state.checked){
            result.sort();
        }
        this.setState({arrayItems: result});
    },
    clear: function(event){
        this.setState({arrayItems: this.props.searchItem, checked:false, str: ""})
    },
    render: function(){

        let params = this.state.arrayItems.map( (el, idx) =>
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