/** @jsx React.DOM */

/**
 *  Link
 *  ====
 *
 *  Customized link version - which uses PJAX to load the content instead of complete re-load.
 *  Prevent the default click action.
 */

var React  = require('react'),
    Router = require('../../code/router');

/**
 *  TODO: use transferProps
 */


var Link = React.createClass({

  handleClick: function ( e ) {

    e.stopPropagation();
    e.preventDefault();

    Router.navigate( this.props.href, { trigger: true });
  },

  render: function(){

    return (
      <a href={this.props.href} onClick={this.handleClick}>{this.props.children}</a>
    );
  }

});

module.exports = Link;
