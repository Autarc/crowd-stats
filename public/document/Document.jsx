/** @jsx React.DOM */

/**
 *  Document
 *  ========
 *
 *
 */

var React = require('react');

var Header = require('./Header/Header.jsx'),
    Main   = require('./Main/Main.jsx'),
    Footer = require('./Footer/Footer.jsx');


var Document = React.createClass({

  render: function(){

    // TODO: check if title availbel then set, else ignore || - Funding
    // commenting on the inside the transform parser..
    // TODO: can't currently provide a doctype... ||  <!DOCTYPE HTML> || future fix !
    //
    // TODO: bug, as including a prop in the 'title' tag , !=  {this.props.title}
    //
    // charset property, defined as chartSet (line 28 ?)

    // depending on the 'header' - cookie information, send additional data + define language

    return (

      <html lang="en">
      <head>

        <meta charSet="utf-8" />

        <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
        <meta http-equiv="content-type" content="text/html, charset=utf-8" />

        <title>:: Crowd Stats ::</title>

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" type="text/css" href="style/vendor.css" />
        <link rel="stylesheet" type="text/css" href="style/document.css" />
        <link rel="stylesheet" type="text/css" href="style/elements.css" />

      </head>
      <body>

        <div className="page">

          <Header props={this.props} />
          <Main   props={this.props} />
          <Footer props={this.props} />

        </div>

        <script src="code/bundle.js"></script>
        <script src="//localhost:35729/livereload.js"></script>

      </body>
      </html>
    );
  }

});


module.exports = Document;
