import React from 'react';
export interface TestInfo {
    infoString: string;
    infoNumber: number;
}
export interface TestProps {
    propsString: string;
    propsObject: TestInfo;
    propsNumber?: number;
}
export interface TestState {
    stateString: string;
}
export default class Test extends React.Component<TestProps, TestState> {
    static displayName: string;
    constructor(props: TestProps);
    render(): JSX.Element;
}
