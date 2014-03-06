/**
 *  @jsx React.DOM
 */

var React = require('react');


/**
 *  Discover
 *  ========
 *
 *  Simple list
 *
 *  Site:   /{activity}/discover
 */

var Document = require('../../public/document/Document.jsx');


/**
 *  [exports description]
 *
 *  @param  {[type]} app [description]
 *  @return {[type]}     [description]
 */
module.exports = function ( app ) {

  app.get('/:activity/discover', function ( req, res, next ) {

    var discover = Document({ path: 'discover', activity: req.params.activity });

    res.end( React.renderComponentToString( discover ) );
  });
};
