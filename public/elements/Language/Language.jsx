/**
 *  @jsx React.DOM
 */

var React = require('react');


/**
 *  Language
 *  ========
 *
 *
 */

var LanguageSelector = React.createClass({

  render: function(){

    return (

      <div>Language: </div>
    );
  }

});


var Language = React.createClass({

  render: function(){

    return (

      <LanguageSelector></LanguageSelector>
    );
  }

});


module.exports = Language;
