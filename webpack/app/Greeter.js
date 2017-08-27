import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.css';

class Greeter extends Component {
  render() {
    return (
      <div>
        ${config.greetText6}
      </div>
    );
  }
}

export default Greeter
