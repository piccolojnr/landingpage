import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#000"
    strokeWidth={1.632}
    viewBox="0 0 24 24"
    ref={ref}
  >
    <path
      stroke="#fff"
      strokeLinejoin="round"
      d="M16.822 5.134A4.75 4.75 0 0 1 15.648 2h-.919m2.093 3.134a4.773 4.773 0 0 0 3.605 1.649v3.436a8.172 8.172 0 0 1-4.78-1.537v6.989c0 3.492-2.839 6.329-6.323 6.329-1.824 0-3.47-.78-4.626-2.02A6.31 6.31 0 0 1 3 15.67c0-3.44 2.756-6.245 6.17-6.32m7.652-4.216a5.512 5.512 0 0 1-.054-.035M6.985 17.352a2.859 2.859 0 0 1-.547-1.686 2.89 2.89 0 0 1 2.886-2.888c.297 0 .585.05.854.134v-3.51a6.418 6.418 0 0 0-.854-.06c-.051 0-.462.027-.513.027M14.724 2H12.21l-.005 13.777a2.89 2.89 0 0 1-2.881 2.782 2.898 2.898 0 0 1-2.343-1.203"
    />
  </svg>
);
const TikTok = forwardRef(SvgComponent);
export default TikTok;
