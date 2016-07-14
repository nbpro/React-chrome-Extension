var React = require('react');

var VideoId = React.createClass({
    render : function(){
        return(
            <div className="left">{this.props.id}</div>
        );
    }
});

module.exports = VideoId;