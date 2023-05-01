import PropTypes from 'prop-types';
import { SectionFeedb } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <SectionFeedb>
      <h2>{title}</h2>
      {children}
    </SectionFeedb>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
