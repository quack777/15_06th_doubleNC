import { url } from 'inspector';
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  basicWidth: '375px',
  height: {
    content: '812px',
    nav: '93px',
  },
  color: {
    background: '#F1F3F4',
  },

  flexMinin: (direction = 'row', justify = 'center', align = 'center') => `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`,
};
