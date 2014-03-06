/**
 *  @jsx React.DOM
 */

var React = require('react');


/**
 *  Create
 *  ======
 *
 *  Define new views, // provide an interface for 'help'
 *
 *  Site:   /{activity}/create
 */

var Document = require('../../public/document/Document.jsx');


/**
 *  [exports description]
 *
 *  @param  {[type]} app [description]
 *  @return {[type]}     [description]
 */
module.exports = function ( app ) {

  app.get('/:activity/create', function ( req, res, next ) {

    var create = Document({ path: 'create', activity: req.params.activity });

    res.end( React.renderComponentToString( create ) );
  });
};
