import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Bariol';
        src: url(/fonts/bariol/bariol_regular.ttf);
      }
      `}
  />
);

export default Fonts;
