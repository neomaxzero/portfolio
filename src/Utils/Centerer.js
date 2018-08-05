import styled from 'vue-styled-components';

const centererProps = { column: Boolean };

export default styled('div', centererProps)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  top: 0;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
`;
