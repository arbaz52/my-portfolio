import React from 'react';

interface BoldHeadingProps extends Partial<Element> {
    children: any;
}
const BoldHeading = (props: BoldHeadingProps) => {
    return (
        <h1 className={`font-weight-bolder ${props.className}`}>
            {props.children}
        </h1>
    )
}

interface SubHeadingProps extends Partial<Element> {
    children: any;
}
const SubHeading = (props: SubHeadingProps) => {
    return (
        <span className={`font-weight-bold ${props.className}`}>
            {props.children}
        </span>
    )
}

export { BoldHeading, SubHeading }