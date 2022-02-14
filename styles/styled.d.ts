import 'styled-components';
import { flattenDiagnosticMessageText } from 'typescript';

declare module 'styled-components' {
  export interface DefaultTheme {
    basicWidth: string;
    height: {
      content: string;
      nav: string;
    };
    color: {
      background: string | undefined;
    };

    flexMinin: (direction?: string, justify?: string, align?: string) => string;
  }
}
