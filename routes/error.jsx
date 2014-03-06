/**
 *  @jsx React.DOM
 */

var React = require('react');


/**
 *  Error
 *  =====
 *
 *  Site:   /error || 404
 */

var Document = require('../public/document/Document.jsx');


/**
 *  [exports description]
 *
 *  @param  {[type]} app [description]
 *  @return {[type]}     [description]
 */
module.exports = function ( app ) {

  app.use(function ( req, res ) {

    res.status(404);

    if ( req.accepts('html') ) {

      var error = Document({ path: 'error', url: req.url });

      return res.end( React.renderComponentToString( error ) );
    }

    if ( req.accepts('json') ) return res.json({ 'error': 'Data not available!' });

    res.type('txt').send('Not available!');
  });
};
