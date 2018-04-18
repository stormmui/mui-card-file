// This was the ImageGridList prior to swapping out
// an img for a SimpleCard...

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import GridList, { GridListTile } from "material-ui/GridList";
// Both ways work
//import tileData from "./../data/repos/html5-node-diagram.json";
//import tileData from "./../data/repos/ivy.json";
//import tileData from "./../data/repos/nodejs-sandboxed-fs.json";
import tileData from "./../data/repos/tileData";
import Gh1Card from "./../cards/Gh1Card";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 600,
    height: 720
  },
  subheader: {
    width: "100%"
  }
});

function Gh1CardGL(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.avatar} cols={tile.cols || 1}>
            <Gh1Card tile={tile} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Gh1CardGL.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Gh1CardGL);
