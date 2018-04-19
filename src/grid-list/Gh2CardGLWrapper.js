import React from "react";
import PropTypes from "prop-types";
//import Gh1CardGL from "./Gh1CardGL";

class Gh1CardGLWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    // const url = 'https://raw.githubusercontent.com/stormasm/mui-card-file/master/src/data/repos/ivy.json';
    const url = "https://hn.algolia.com/api/v1/search?query=redux";

    this.setState({ isLoading: true });

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => this.setState({ data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const hits = this.state.data.hits || [];

    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }

    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      /*
      <div>
        <Gh1CardGL tileData={this.state.data} />
      </div>
*/
      <div>
        {hits.map(hit => (
          <div key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </div>
        ))}
      </div>
    );
  }
}

Gh1CardGLWrapper.propTypes = {
  tileData: PropTypes.object.isRequired
};

export default Gh1CardGLWrapper;
