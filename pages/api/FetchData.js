import React from 'react';

class fetchData extends React.Component {

  

  componentDidMount() {
    // const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    const apiUrl = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';
    const apiInit = {
      headers: {
      Authorization: 'Api-Key q3MNxtfep8Gt',
      }};

    fetch(apiUrl, apiInit)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default fetchData;


//sourcetree oauth5