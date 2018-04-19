import React from "react";
import PropTypes from "prop-types";
// Both ways work
//import tileData from "./../data/repos/html5-node-diagram.json";
//import tileData from "./../data/repos/ivy.json";
//import tileData from "./../data/repos/nodejs-sandboxed-fs.json";
//import tileData from "./../data/repos/tileData";
import Gh1CardGL from "./Gh1CardGL";

class Gh1CardGLWrapper extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {

    const url = "https://raw.githubusercontent.com/stormasm/mui-card-file/master/src/data/repos/ivy.json"

    this.setState({ isLoading: true });

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    return (
      <div>
        <Gh1CardGL tileData={this.state.data} />
      </div>
    );
  }
}

Gh1CardGLWrapper.propTypes = {
  tileData: PropTypes.object.isRequired
};

export default Gh1CardGLWrapper;
