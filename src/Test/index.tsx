import React from 'react';
import debug from 'debug';

const log = debug('reactUI:Test');

export interface TestInfo {
  infoString: string,
  infoNumber: number,
}

export interface TestProps {
  propsString: string,
  propsObject: TestInfo,
  propsNumber?: number,
}

export interface TestState {
  stateString: string,
}

export default class Test extends React.Component<TestProps, TestState> {
  static displayName = 'Test';

  constructor(props: TestProps) {
    super(props);
    this.state = {
      stateString: '',
    };
  }

  render() {
    const { stateString } = this.state;
    const { propsString, propsObject, propsNumber } = this.props;
    return (
      <div>
        <div>{stateString}</div>
        <div>{propsString}</div>
        <div>{propsObject}</div>
        <div>{propsNumber}</div>
      </div>
    )
  }
}