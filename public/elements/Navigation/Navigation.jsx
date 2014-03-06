/** @jsx React.DOM */

/**
 *  Navigation
 *  ==========
 *
 *
 *  Structure:
 *
 *
 *   - Navigation
 *     - NavigationEntry
 *       - NavigationMap
 *         - NavigationLink
 *       - NavigationLink
 *       - NavigationBoundary

 *
 */

var React = require('react');

var RouterMixin = require('../../mixins/RouterMixin.jsx'),
    Link        = require('../Link/Link.jsx');



var NavigationBoundary = React.createClass({

  render: function(){

    return (

      <div>
        <div class="navigation-boundary-top"></div>
        <div class="navigation-boundary-bottom"></div>
      </div>
    );
  }
});



// var NavigationLink = Link;

// React.createClass({

//   handleClick: function ( e ) {

//     e.preventDefault();
//     e.stopPropagation();

//     console.log(e);
//   },


//   render: function(){

//     return (
//       <a href={this.props.route} onClick={this.handleClick}>{this.props.name}</a>
//     );
//   }

// });


var NavigationMap = React.createClass({

  render: function(){

    return (

      <ul> </ul>
    );
  }

});


// Navigation
var NavigationEntry = React.createClass({

  render: function(){

    return (
      <li>
        <Link href={this.props.route}>{this.props.name}</Link>
      </li>
    );
  }

});


 // <NavigationMap />
 // <NavigationBoundary />


// TODO:
//
//
// route: name  ||| matching


var DATA = [

  { 'name': 'about',     'route': '/about'   },
  { 'name': 'blog',      'route': '/blog'    },
  { 'name': 'contact',   'route': '/contact' },
  { 'name': 'create',    'route': '/new'      },
  { 'name': 'discover',  'route': '/discover' },
  { 'name': 'rising',    'route': '/rising/' },     // doesnt match this form, else it works
  { 'name': 'rising-list',  'route': '/rising/list' },
  { 'name': 'project',  'route': '/rising/view/project.json' }
];



var Navigation = React.createClass({

  mixins: [ RouterMixin ],

  componentWillMount: function(){

    this.addRoutes({

      '(:direct)(/:activity)(/:view)': this.defineProgress //(/:activity) // ''
      // '/*': this.defineProgress //(/:activity)
      // (/:optional)
      // "search/:query/p:page": search/obama/p2, passing "obama" and "2"
      //
      // "file/*path"     #file/nested/folder/file.txt
      //
      // "docs/:section(/:subsection)
    });
  },


// http://localhost:8080/#rising/view/1.json

  componentWillUnmount: function(){

    this.removeRoutes();
  },



  getDefaultProps: function(){

    return {

      data: DATA
    };
  },


  getInitialState: function(){  // define inital state - data set etc.

    return {

      data: []
    };
  },


  defineProgress: function ( direct, activity, view) {

    console.log(direct, activity, view );
    // this.setState({ });
  },



  // componentWillMount: function(){ // method called automatically before the component is rendered

  //   // console.log('wilMOunt');
  //   // this.set.State({ data: data });

  // },

  render: function(){

    var entries = {}; // object with keys - for ordering etc.

    this.props.data.forEach(function ( entry, id ) {  // array provides the index, prefix -keys are string etc

      entries[ 'entry-' + id ] = <NavigationEntry route={entry.route} name={entry.name} />;
    });


    return (

      <nav className="navigation">{entries}</nav>
    );
  }

});

module.exports = Navigation;







// var ProfilePic = React.createClass({
//   render: function() {
//     return (
//       <img src={'http://graph.facebook.com/' + this.props.username + '/picture'} />
//     );
//   }
// });

// var ProfileLink = React.createClass({
//   render: function() {
//     return (
//       <a href={'http://www.facebook.com/' + this.props.username}>
//         {this.props.username}
//       </a>
//     );
//   }
// });

// data - provided by the URL state then (index, document, navigation !)


// route, name, active, || define what it is, not 'value, href etc.'
// || these are technical implemtnation which could differ - so define the logocal components

   // <BSListGroupItem href={page.route} active={page.active}>
   //        {page.name}
   //      </BSListGroupItem>);


  // var results = this.props.results;
  //   return (
  //     <ol>
  //       {results.map(function(result) {
  //         return <li key={result.id}>{result.text}</li>;
  //       })}
  //     </ol>



// var HelloWorld = React.createClass({
//   render: function() {
//     return (
//       <p>
//         Hello, <input type="text" placeholder="Your name here" />!
//         It is {this.props.date.toTimeString()}
//       </p>
//     );
//   }
// });

// setInterval(function() {
//   React.renderComponent(
//     <HelloWorld date={new Date()} />,
//     document.getElementById('example')
//   );
// }, 500);

// here:
//
// -> props for Each Entry
// -> state defines which entries should be applied



        // {entries}





// onClick={this.handleClick}


  // getInitialState: function(){

  //   console.log('[INIT] - Navigation');

  //   return { data: {} };
  // },

  // // getInitialState: function() {
  // //   return {data: []};
  // // },

  // handleClick: function(){

  //   console.log(1);
  // },

//  for each entry
// or function definition ?

