/**
 *  @jsx React.DOM
 */

var React = require('react');


/**
 *  Search
 *  ======
 *
 *
 */

var Link  = require('../Link/Link.jsx');

var SearchResults = React.createClass({

  render: function(){

    return (
      <ul></ul>
    );
  }

});




var SearchInput = React.createClass({ // query

  checkConfirm: function ( e ) {

    var keyCode = e.which;

    if ( keyCode == 13 ) this.props.sendRequest();
  },

  render: function(){

    return (
      <input type="text" value={this.props.value} placeholder="Search"
      onChange={this.props.setValue} onKeyUp={this.checkConfirm} />
    );
  }

});


// button etc. for show -> embed directly in the construct
var SearchButton = React.createClass({

  render: function(){

    // this.props.value

    return (
      <button onClick={this.props.sendRequest}>S</button>
    );
  }

});



var SearchForm = React.createClass({

  getInitialState: function(){

    return { 'value': '' };
  },


  setValue: function ( e ) {

    var value = e.target.value;

    this.setState({ 'value': value });
  },

  sendRequest: function() {

    console.log('request', this.state.value );


  },

  render: function(){

    return (
      <form accept-charset="UTF-8" action="/search" method="GET">
        <SearchInput setValue={this.setValue} sendRequest={this.sendRequest}
         value={this.state.value} />
        <SearchButton sendRequest={this.sendRequest} value={this.state.value} />
      </form>
    );
  }

});



var Search = React.createClass({

  render: function(){

    return (
      <div>
        <SearchForm />
        <SearchResults />
      </div>
    );
  }

});

module.exports = Search;
