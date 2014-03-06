/**
 *  @jsx React.DOM
 */

var React = require('react');


/**
 *  Main
 *  ====
 *
 *
 */

var Banner = React.createClass({

  render: function(){

    // image
    return (

      <div>
        <div>
          Banner<div>Box</div>
        </div>

      </div>
    );
  }

});


var Main = React.createClass({

  // {this.props.children}
  // different content -> regarding the path

// <Banner path={this.props.path} />
  render: function(){

    return (
      <main>
        <Banner />
      </main>
    );
  }
});

module.exports = Main;


// F5F5F5; // background color
