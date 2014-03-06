/**
 *  @jsx React.DOM
 */

var React = require('react');


/**
 *  {Activity}
 *  =========
 *
 *
 *  Site:   /{activity}
 */

var Document = require('../../public/document/Document.jsx');


/**
 *  [exports description]
 *
 *  @param  {[type]} app [description]
 *  @return {[type]}     [description]
 */
module.exports = function ( app ) {

  app.get('/:activity/', function ( req, res ) {

    // var params = req.params;
        // query  = req.query;

    var activity = Document({ path: 'activity', activity: req.params.activity })

    res.end( React.renderComponentToString( activity ) );
  });
};

//
