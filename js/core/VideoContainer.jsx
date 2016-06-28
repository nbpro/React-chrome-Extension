var React = require('react');

var VideoList = [1,2,3,4,5,6,6,6,7];

var VideoContainer = React.createClass({
    getInitialState: function() {
        return {
            videoList :VideoList
        };
    },
    render : function(){
        var indents = [];
        for (var i = 0; i < this.state.videoList.length; i++) {
            indents.push(<div className='box-videos' key={i}></div>);
        }
        return(<div>{indents}</div>)
    }
})
module.exports = VideoContainer;
