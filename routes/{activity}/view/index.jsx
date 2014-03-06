/**
 *  @jsx React.DOM
 */

var React = require('react');


/**
 *  {Activity}/view
 *  ===============
 *
 *
 *  Site:   /{activity}/view
 */

var Document = require('../../../public/document/Document.jsx');


/**
 *  [exports description]
 *  @param  {[type]} app [description]
 *  @return {[type]}     [description]
 */
module.exports = function ( app ) {

  app.get('/:activity/view/:id?.:type?', function ( req, res, next ) {

    var params = req.params;


    if ( !req.accepts('html') || params.type ) {  // TODO: accept || type -> content negotation + URL extnesion

      if ( req.accepts('json') || params.type == 'json' ) return res.json( getData( activity, id ) );

      return console.log(params.type);
    }

    // regular website
    var view = Document({ path: 'view', activity: params.activity, id: params.id });

    res.end( React.renderComponentToString( view ) );
  });


  /**
   *  [getData description]
   *
   *  @param  {[type]} activity [description]
   *  @param  {[type]} id       [description]
   */
  function getData ( activity, id ) {

    // return JSON data - RAW data, unfiltered, or project data to draw the result set ?

    return {


    };
  }

};
