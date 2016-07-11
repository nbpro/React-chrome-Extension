var React = require('react');

var VideoBox = React.createClass({
    render: function(){
        return(<div className="videoBox">
            <img width="180" height="150" src={this.props.videoLink}></img>
        </div>)
    }

});

module.exports = VideoBox;