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
