import React from 'react';
import Header from 'components/layouts/partials/Header.jsx';
import Footer from 'components/layouts/partials/Footer.jsx';

class Master extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <Header/>
        <main>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default Master;
