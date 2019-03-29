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
