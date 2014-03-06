/**
 *  @jsx React.DOM
 */

var React = require('react');


/**
 *  Contact
 *  =======
 *
 *  Anscrhift etc.
 *
 *  Site:   /contact
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

    var contact = Document({ path: 'contact' });

    res.end( React.renderComponentToString( contact ) );
  });
};
