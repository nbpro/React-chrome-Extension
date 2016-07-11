var React =  require('react');

var VideoDetails = React.createClass({
    render : function(){
        return(
            <div  className="video-details">
                <div className="video-details-row">
                    <div className="column1">{this.props.id}</div>
                    <div className="column2">{this.props.client_name}</div>
                </div>
                <div className="video-details-row">
                    <div className="column1">{this.props.id}</div>
                    <div className="column2">{this.props.client_name}</div>
                </div>
                <div className="video-details-row">
                    <div className="column1">{this.props.id}</div>
                    <div className="column2">{this.props.client_name}</div>
                </div>
                <div className="video-details-row">
                    <div className="column1">{this.props.id}</div>
                    <div className="column2">{this.props.client_name}</div>
                </div>
            </div>
        );
    }
});

module.exports = VideoDetails;