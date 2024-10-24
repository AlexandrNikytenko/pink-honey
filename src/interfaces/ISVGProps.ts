export interface ISVGProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  svgAttrs?: React.SVGProps<SVGSVGElement>;
  pathAttrs?: React.SVGAttributes<SVGPathElement>;
  onClick?: () => void | null | string | number;
}
