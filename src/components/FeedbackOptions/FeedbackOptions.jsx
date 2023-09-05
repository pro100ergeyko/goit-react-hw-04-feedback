import { FeedbackButtonList } from './FeedbackOptions.styled';
import { FeedbackButtonListItem } from '../FeedbackOptions/FeedbackButtonListItem/FeedbackOptionListItem';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackButtonList>
      {options.map(option => (
        <FeedbackButtonListItem
          key={option}
          buttonText={option}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </FeedbackButtonList>
  );
};
