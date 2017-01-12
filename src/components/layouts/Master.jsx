import React from 'react';
import Header from 'components/layouts/partials/Header.jsx';
import Footer from 'components/layouts/partials/Footer.jsx';

class Master extends React.Component {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {}));
    return (
      <div className="wrapper">
        <Header/>
          <main>
            {childrenWithProps}
          </main>
        <Footer/>
      </div>
    );
  }
}

export default Master;
