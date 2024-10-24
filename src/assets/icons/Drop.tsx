/* eslint-disable max-len */
import { ISVGProps } from "../../interfaces/ISVGProps";

const Drop = ({ svgAttrs, pathAttrs }: ISVGProps): JSX.Element => {
  return (
    <svg
      width="19"
      height="32"
      viewBox="0 0 19 32"
      xmlns="http://www.w3.org/2000/svg"
      {...svgAttrs}
    >
      <path
        d="M9.6331 0C7.44189 12.7343 0.921753 15.3 0.921753 24.2279C0.921753 28.7073 5.3497 32 9.6331 32C14.0127 32 18.1741 28.9204 18.1741 24.6675C18.1741 16.0975 11.8975 12.7102 9.63317 0H9.6331ZM5.33968 15.9931C3.27967 21.5573 4.9636 27.3799 9.33621 29.2074C10.4549 29.6751 11.6733 29.7757 12.8653 29.6701C4.30986 33.3378 -0.82501 23.7901 5.33946 15.993L5.33968 15.9931Z"
        fill="#FE506B"
        {...pathAttrs}
      />
    </svg>
  );
};

Drop.displayName = "Drop";

export default Drop;
