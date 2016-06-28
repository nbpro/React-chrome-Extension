var React = require('react');
var ContainerSubView = require('./ContainerSubView.jsx');



var Content = React.createClass({

    getInitialState: function() {
        return {
            content: "This is get Initial State",
        };
    },
    handleClick : function () {
        return(console.log("click handled captured"));
    },
    render: function(){
        return(
            <div className="main">
                <ContainerSubView/>
            </div>
        )
    }
});

module.exports = Content;
