var React = require('react');

var header = 'header';
var searchBox = 'search-box-placeholder';
var Search = require('./core/search.jsx');
var Logo = require('./logo.jsx')

var Header = React.createClass({
    render: function(){
        return (
            <div className={header}>
                <div className="logo-box">
                    <Logo/>
                </div>
                <div className={searchBox}>
                    <Search/>
                </div>
            </div>
        );
    }
});

module.exports = Header;