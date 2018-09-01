import styled from 'vue-styled-components';

const ulProps = { horizontal: Boolean };

export const duUl = styled('ul', ulProps)`
  & > li {
    &:not(:first-of-type) {
      margin-left: 1em;
    }

    display: ${props => (props.horizontal ? 'inline-block' : 'block')};
  }

  & > a {
    padding-top: 1em;
  }
`;

export default duUl;
