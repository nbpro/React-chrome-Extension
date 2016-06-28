var React = require('react');
var VideoBox = require('./VideoContainer.jsx');

var ContainerSubView = React.createClass({
    render: function(){
        return(
            <div className="box-container">
                <VideoBox/>
            </div>
        )
    }
});

module.exports = ContainerSubView;