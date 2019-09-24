import React, { SVGAttributes } from 'react';

export default (props: SVGAttributes<SVGElement>) => (
    <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g stroke="currentColor" fill="none" fillRule="evenodd">
            <path d="M14.5 0l5 5-5 5M19.5 5H0" />
        </g>
    </svg>
);
