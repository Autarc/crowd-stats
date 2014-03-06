/** @jsx React.DOM */

/**
 *  Header
 *  ======
 *
 *
 */

var React = require('react');

var Logo       = require('../../elements/Logo/Logo.jsx'),
    Navigation = require('../../elements/Navigation/Navigation.jsx'),
    Search     = require('../../elements/Search/Search.jsx'),
    Language   = require('../../elements/Language/Language.jsx');


var Header = React.createClass({

  render: function(){

    return (
      <header>
        <Logo />
        <Navigation path={this.props.path} />
        <Search />
        <Language />
      </header>
    );
  }

});



module.exports = Header;
