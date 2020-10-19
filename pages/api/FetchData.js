import React from 'react';
import List from '../../components/List'

class fetchData extends React.Component {

  state = {
    data: [],
  }

  componentDidMount() {
    // const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    const apiUrl = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';
    const apiInit = {
      headers: {
      Authorization: 'Api-Key q3MNxtfep8Gt',
      }};

    fetch(apiUrl, apiInit)
      .then((response) => response.json())
      //.then((data) => console.log(data));
      .then((data) => this.setState({ data }))
  }
  render() {
    const { data } = this.state;
    console.log(data)
    return <List items={data} />;
  }
}
export default fetchData;


//return <h1>my Component has Mounted, Check the browser 'console' </h1>;
