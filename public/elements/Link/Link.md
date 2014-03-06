

One great benefit of using React components with a tightly-coupled routes-to-handlers mechanism is that setting navbar buttons to "active" can be completely hidden away from day-to-day development. It's common webapp behavior that shouldn't clutter up actual business logic. Here's example NavBar code:

var NavBar = React.createClass({
  render: function() {
    var BSListGroupItemNodes = this.props.pages.map(function(page) {
      return (
        <BSListGroupItem href={page.route} active={page.active}>
          {page.name}
        </BSListGroupItem>);
    });
    return (
      <BSListGroup>
        {BSListGroupItemNodes}
      </BSListGroup>
    );
  }
});
