import React from 'react';
import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;
    const date = new Date()
    const year = date.getFullYear();

    return (
      <div className={styles.container}>
        <h1>COVID-19 TRACKING DASHBOARD</h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <h4 className={styles.footer}>© Copyright {year}: Demilade Oyedele</h4>
      </div>
    );
  }
}

export default App;