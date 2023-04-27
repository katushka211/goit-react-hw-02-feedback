import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { FeedbackButtons } from './Feedback/Feedback';
import { StatisticsInfo } from './Statistics/Statistics';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = value => {
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const values = Object.keys(this.state);
    return (
      <>
        <GlobalStyle />
        <Section title="Please live feedback">
          <FeedbackButtons
            values={values}
            onAddFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          <StatisticsInfo
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
