import styled from 'vue-styled-components';
import { secondary } from '@/components/theme';

const header = styled.header`
  height: 3em;
  z-index: 2;
`;

export const options = styled.ul`
  list-style: none;
  color: ${secondary};
`;
export const item = styled.li`
  cursor: pointer;
  color: ${secondary};

  &:hover {
    color: white;
    transition: 1s ease;
  }
`;
export default header;
