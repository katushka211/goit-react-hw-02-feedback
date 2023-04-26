import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // countTotalFeedback()

  // countPositiveFeedbackPercentage(){}

  render() {
    return (
      <>
        <GlobalStyle />
        <section>
          <h1>Please leave feedback</h1>
          <ul>
            <li>Good</li>
            <li>Neutral</li>
            <li>Bad</li>
          </ul>
        </section>
      </>
    );
  }
}
