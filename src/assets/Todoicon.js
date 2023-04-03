import * as React from "react";
const SvgTodoicon = (props) => (
  <svg
    className="todoicon_svg__h-8 todoicon_svg__w-8 todoicon_svg__text-red-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx={8.5} cy={7} r={4} />
    <path d="m17 11 2 2 4-4" />
  </svg>
);
export default SvgTodoicon;
