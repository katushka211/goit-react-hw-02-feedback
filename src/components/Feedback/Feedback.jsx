export const FeedbackButtons = ({ values, onAddFeedback }) => {
  return values.map(value => (
    <button
      onClick={() => {
        onAddFeedback(value);
      }}
      type="button"
      key={value}
    >
      {value}
    </button>
  ));
};
