/**
 *  @jsx React.DOM
 */

var React = require('react');


/**
 *  Search
 *  ======
 *
 *  Site:   /search?q=
 */

var Document = require('../public/document/Document.jsx');


/**
 *  [exports description]
 *
 *  @param  {[type]} app [description]
 *  @return {[type]}     [description]
 */
module.exports = function ( app ) {

  app.get('/search', function ( req, res, next ) {


    if ( req.accepts('json') ) {

      console.log('fetch JSON data');

      return res.json({ 'TODO': 1 });
    }


    var search = Document({ path: 'search', query: req.query.q });

    res.end( React.renderComponentToString( search ) );
  });
};


    // var params = req.params,
        // query  = req.query;

