var React = require('react');

var VideoImage = require('./VideoBox.jsx');

var VideoSubContainer = React.createClass({
    render: function(){
        return(<div className="video-list-box">
            <div className="video-single-container">
                <div className="video-sub-container-col-1">
                    <VideoImage/>
                </div>
                <div className="video-sub-container-col-2"></div>
            </div>
        </div> )
        }
});

module.exports = VideoSubContainer;