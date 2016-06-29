var React = require('react');

var VideoList = [1,2,3,4,5,6,6,6,7];
var VideoSubContainer = require('./VideoSubContainer.jsx');

var VideoContainer = React.createClass({
    getInitialState: function() {
        return {
            videoList :VideoList
        };
    },
    render : function(){
        var indents = [];
        for (var i = 0; i < this.state.videoList.length; i++) {
            indents.push(
                    <div  className="video-flex-container" key={i}>
                        <VideoSubContainer/><VideoSubContainer/>
                    </div>
            );
        }
        return(
            <div className='box-videos'>{indents}</div>

        )
    }
});
module.exports = VideoContainer;
