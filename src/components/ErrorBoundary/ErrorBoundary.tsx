import { Component, ReactNode, ErrorInfo } from 'react';
import './ErrorBoundary.scss';

interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorStatus {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state: ErrorStatus = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error">
          error
          <br /> something is broken
        </div>
      );
    }

    return this.props.children;
  }
}
