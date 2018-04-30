// This was the ImageGridList prior to swapping out
// an img for a SimpleCard...

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import GridList, { GridListTile } from "material-ui/GridList";
import GhCardNoImage from "./../cards/Gh1CardNoImage";
import GhCard from "./../cards/Gh1Card";

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

function GhCardGL(props) {
  const { classes, tileData, repoName, viewName } = props;

  if (viewName === "view1") {
    return (
      <div>
        <div>
          <h3>Repo: {repoName}</h3>
          <h4>View: {viewName}</h4>
        </div>

        <div className={classes.root}>
          <GridList cellHeight={250} className={classes.gridList} cols={3}>
            {tileData.map(tile => (
              <GridListTile key={tile.avatar} cols={tile.cols || 1}>
                <GhCard tile={tile} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h3>Repo: {repoName}</h3>
        <h4>View: {viewName}</h4>
      </div>

      <div className={classes.root}>
        <GridList cellHeight={250} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.avatar} cols={tile.cols || 1}>
              <GhCardNoImage tile={tile} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

GhCardGL.propTypes = {
  classes: PropTypes.object.isRequired,
  tileData: PropTypes.array.isRequired,
  repoName: PropTypes.string.isRequired,
  viewName: PropTypes.string.isRequired
};

export default withStyles(styles)(GhCardGL);
