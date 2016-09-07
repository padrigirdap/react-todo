var EventApplication = React.createClass({
  render: function() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>React to-do</h1>
          <p>Padrig Tuck</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <EventTable />
          </div>
        </div>
      </div>
    )
  }
});
