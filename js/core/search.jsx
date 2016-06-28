var React = require('react');

var Search = React.createClass({
    render : function(){
        return(
            <div className="search-box">
                <input  className="input-search" type="text" placeholder=" Search here "></input>
            </div>
        )}
});

module.exports = Search;