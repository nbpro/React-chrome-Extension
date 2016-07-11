var React = require('react');
var $ = require('jquery');

//var VideoList = [1,2,3,4,5,6,6,6,7];
var VideoSubContainer = require('./VideoSubContainer.jsx');
var Store = require('./../Store.jsx');
var actions = require('./../action.jsx');

var VideoContainer = React.createClass({
    getInitialState: function() {
        this.videoList = [];
        return {
            videoList :this.videoList,
            channelId : Store.getMessages(),
        };
    },
    componentDidMount() {
        var that = this;
        var channelId;
        if(channelId){
            channelId =this.state.channelId;
        }else{
            channelId="UCNJcSUSzUeFm8W9P7UUlSeQ";
        }
        var URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBAlkZZ_wErL-y1NDIaMgK1CwqDmyyHL64&channelId="+channelId;
        var URL1 = "https://amagi.herokuapp.com/ui-test/api/v1/spots";
        $.ajax({url: URL1})
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
