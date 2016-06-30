var React = require('react');
var $ = require('jquery');

var VideoList = [1,2,3,4,5,6,6,6,7];
var VideoSubContainer = require('./VideoSubContainer.jsx');

var VideoContainer = React.createClass({
    getInitialState: function() {
        this.videoList = [];
        return {
            videoList :this.videoList
        };
    },
    componentDidMount() {
        var that = this;
        $.ajax({url: "https://amagi.herokuapp.com/ui-test/api/v1/spots"})
            .then(function(data) {
                console.log(data);
                that.setState({
                  videoList : data
                });
            }).catch(function(err){
                console.log(err);
            });

    },
    render : function(){
        var indents = [];
        for (var i = 0; i < this.state.videoList.length; i += 2) {
            indents.push(
                    <div  className="video-flex-container" key={i}>
                        <VideoSubContainer videoList={this.state.videoList[i]}/>
                        <VideoSubContainer videoList={this.state.videoList[i+1]}/>
                    </div>
            );
        }
        return(
            <div className='box-videos'>{indents}</div>

        )
    }
});
module.exports = VideoContainer;
