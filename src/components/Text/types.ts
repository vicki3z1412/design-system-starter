export enum TextVariant {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  Body = 'body',
  Label = 'label'
}

export type TextProps = {
  children: string;
  variant?: TextVariant;
  bold?: boolean;
};
