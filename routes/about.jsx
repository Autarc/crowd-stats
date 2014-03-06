/**
 *  @jsx React.DOM
 */

var React = require('react');


/**
 *  About
 *  =====
 *
 *  Site:   /about
 */

var Document = require('../public/document/Document.jsx');


/**
 *  [exports description]
 *
 *  @param  {[type]} app [description]
 *  @return {[type]}     [description]
 */
module.exports = function ( app ) {

  app.get('/about', function ( req, res ) {

    var about = Document({ path: 'about' });

    res.end( React.renderComponentToString( about ) );
  });
};
