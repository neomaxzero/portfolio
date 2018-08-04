import styled from 'vue-styled-components';

export const LogoS = styled.img`
  height: 33%;
  opacity: 0.05;
  transform: rotate(180deg);
  animation: rotating-cw 6000s linear infinite;

  @keyframes rotating-cw {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes rotating-ccw {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }

  @keyframes rotating-360-cw {
    from {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(-180deg);
    }
  }
`;

export const Logo2nd = styled.img`
  height: 66%;
  opacity: 0.009;
  transform: rotate(180deg);
  animation: rotating-ccw 6000s linear infinite;
`;

export const Logo3rd = styled.img`
  height: 120%;
  opacity: 0.009;
  transform: rotate(180deg);
  animation: rotating-360-cw 6000s linear infinite;
`;

export default LogoS;
