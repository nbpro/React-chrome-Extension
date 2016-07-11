var React = require('react');
var Store = require('./../Store.jsx');
var actions = require('./../action.jsx');

var Search = React.createClass({
    getInitialState : function(){
        return {
            messages: Store.getMessages(),
            newMessage: ''
        }
    },
    addMessage: function (event) {
        event.preventDefault();
        var input = this.refs.newMessage.getNode();
        actions.addMessage(input.value);
        this.setState({
            newMessage: ''
        });
    },
    componentWillMount: function () {
        Store.addChangeListener(this.changeState);
    },
    componentWillUnmount: function () {
        Store.removeChangeListener(this.changeState);
    },
    changeState: function () {
        this.setState({
            messages: Store.getMessages()
        });
    },
    updateNewMessage: function (event) {
        this.setState({
            newMessage: event.target.value
        });
    },
    render : function(){
        return(
            <div className="search-box">
                <form onSubmit={this.addMessage}>
                    <input  className="input-search" ref="newMessage" type="text" value={this.state.newMessage} onChange={this.updateNewMessage}  searchKeyword={this.state.channelId}></input>
                </form>
            </div>
        )}
});

module.exports = Search;