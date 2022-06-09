import React from "react";
import ReactDOM from "react-dom/client";
import HemisphereDisplay from "./HemisphereDisplay";

class App extends React.Component {
  
  state = { latitude: null, longitude: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition (
      (position) => {
        this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude })
      },
      (error) => {
        this.setState({ errorMessage: error.message })
      }
    );
  }
  
  render() {
    if( this.state.errorMessage && !this.state.latitude ) {
      return(
        <div>
          { this.state.errorMessage }
        </div>
      )
    }

    if( !this.state.errorMessage && this.state.latitude ) {
      return(
        <HemisphereDisplay latitude={ this.state.latitude } longitude={ this.state.longitude }/>
      )
    }

    else {
      return(
        <div>
          Loading...
        </div>
      )
    }
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
