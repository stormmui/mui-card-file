import React from "react";
import PropTypes from "prop-types";
// Both ways work
//import tileData from "./../data/repos/html5-node-diagram.json";
import tileData from "./../data/repos/ivy.json";
//import tileData from "./../data/repos/nodejs-sandboxed-fs.json";
//import tileData from "./../data/repos/tileData";
import Gh1CardGL from "./Gh1CardGL";

class Gh1CardGLWrapper extends React.Component {
  render() {
    return (
      <div>
        <Gh1CardGL tileData={tileData} />
      </div>
    );
  }
}

Gh1CardGLWrapper.propTypes = {
  tileData: PropTypes.object.isRequired
};

export default Gh1CardGLWrapper;
