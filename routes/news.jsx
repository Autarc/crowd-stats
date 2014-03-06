/**
 *  @jsx React.DOM
 */

var React = require('react');


/**
 *  News
 *  ====
 *
 *  Site:   /news
 *
 *  TODO: provide markdown posts - (~ marked for easier updates)
 */

var Document = require('../public/document/Document.jsx');


/**
 *  [exports description]
 *
 *  @param  {[type]} app [description]
 *  @return {[type]}     [description]
 */
module.exports = function ( app ) {

  app.get('/news', function ( req, res ) {

    var news = Document({ path: 'news' });

    res.end( React.renderComponentToString( news ) );
  });
};
