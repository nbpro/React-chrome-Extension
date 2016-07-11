var React = require('react');

var VideoImage = require('./VideoBox.jsx');
var VideoDetail = require('./VideoDetails.jsx')

var VideoSubContainer = React.createClass({
    render: function(){
        return(<div className="video-list-box">
            <div className="video-single-container">
                <div className="video-sub-container-col-1">
                    <VideoImage videoLink={this.props.videoList.thumbnail_path}/>
                </div>
                <div className="video-sub-container-col-2">
                    <VideoDetail {...this.props.videoList}/>
                </div>
            </div>
        </div> )
        }
});


module.exports = VideoSubContainer;