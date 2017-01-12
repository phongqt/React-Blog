import React from 'react';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log(1);
  }

  render() {
    return (
      <div className="abc">
        {this.props.children}
      </div>
      )
  }

}
App.propTypes = {
  children: React.PropTypes.node
};
export default App;