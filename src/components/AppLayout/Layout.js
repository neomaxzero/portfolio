import styled from 'vue-styled-components';
import { secondary } from '@/components/theme';

export const LayoutContainer = styled.div`
  background: linear-gradient(135deg, #2a0a49 0%, #19203c 100%);
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-size: 2em;
  padding-bottom: 1em;
  color: white;
  font-family: 'Josefin Sans';
  font-weight: bold;
`;

export const Role = styled.span`
  font-size: 2em;
  padding-bottom: 0.8em;
  color: ${secondary};
  font-family: 'Josefin Sans';
  font-weight: light;
`;

export const Divisor = styled.div`
  height: 3em;
  margin-bottom: 2em;
  margin-left: 1em;
  margin-right: 1em;
  border-left: 1px solid white;
`;
export default LayoutContainer;
