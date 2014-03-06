/**
 *  @jsx React.DOM
 */

var React = require('react');


/**
 *  Index
 *  =====
 *
 *  Site:   /
 *
 *  Overview, Teaser, Entry
 */

var Document = require('../public/document/Document.jsx');


/**
 *  [exports description]
 *
 *  @param  {[type]} app [description]
 *  @return {[type]}     [description]
 */
module.exports = function ( app ) {

  app.get('/', function ( req, res ) {

    var index = Document({ path: 'index' });

    res.end( React.renderComponentToString( index ) );
  });

};


    // var params = req.params,
        // query  = req.query;

// TODO: cache no dynamic sites (e.g. index)
