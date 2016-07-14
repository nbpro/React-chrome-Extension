var React =  require('react');
var VideoId = require('./VideoData/VideoId.jsx');

var VideoDetails = React.createClass({
    render : function(){
        return(
            <div className="video-details">
                <div className="row">
                       <VideoId  id={this.props.id}/>
                       <VideoId  id={this.props.brand_name}/>

                </div>
            </div>
        );
    }
});

module.exports = VideoDetails;