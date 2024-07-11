import { Component } from 'react';
import { ErrorStatus } from '../ErrorBoundary/ErrorBoundary';
import './ErrorButton.scss';

export class ErrorButton extends Component {
  state: ErrorStatus = { hasError: false };

  handleClick = () => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      throw new Error('Error triggered in ErrorButton');
    }

    return (
      <button className="error-button" onClick={this.handleClick}>
        error
      </button>
    );
  }
}
