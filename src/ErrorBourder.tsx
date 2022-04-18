import React from "react";
import ErrorAppPage from "./pages/ErrorApp.page";

export class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    console.error(error);
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // TODO: Добавить логирование на стороне сервера
  }

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      return <ErrorAppPage />
    }

    return this.props.children;
  }
}
