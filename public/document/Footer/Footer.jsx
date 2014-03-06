/**
 *  @jsx React.DOM
 */

var React = require('react');

/**
 *  Footer
 *  ======
 *
 *
 */

var Link = require('../../elements/Link/Link.jsx');


/**
 *  Footer
 *
 *
 */

var Footer = React.createClass({

  render: function(){

    return (

      <footer>

        <div className="block">

          <h3>Info</h3>

          <ul>
            <Link href="/news">News</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </ul>

        </div>

      </footer>
    );
  }

});

module.exports = Footer;
