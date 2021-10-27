// import original module declarations
import 'styled-components';

type TypographyValues = {
  fontSize: string;
  fontWeight: number;
  fontStyle: string;
  lineHeight: string;
  letterSpacing?: string;
};

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
    };
    typography: {
      fontFamily: string;
      h1: TypographyValues;
      h2: TypographyValues;
      h3: TypographyValues;
      h4: TypographyValues;
      h5: TypographyValues;
      default: TypographyValues;
      label: TypographyValues;
    };
  }
}
