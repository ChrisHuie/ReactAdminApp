import React from 'react';
import '../../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This app uses React, Redux, React Router and a variety of other useful libs</p>
      </div>
    );
  }
}

export default AboutPage;
