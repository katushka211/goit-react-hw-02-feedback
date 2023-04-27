import PropTypes from 'prop-types';
export const FeedbackButtons = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      onClick={() => {
        onLeaveFeedback(option);
      }}
      type="button"
      key={option}
    >
      {option}
    </button>
  ));
};

FeedbackButtons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
