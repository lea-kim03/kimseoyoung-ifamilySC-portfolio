import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./App.css";

function ErrorFallback({ error }) {
  return (
    <main className="page">
      <section className="profile-block">
        <p className="eyebrow">Render Error</p>
        <h1>페이지를 불러오지 못했습니다</h1>
        <p className="lead">
          브라우저에서 React 렌더링 오류가 발생했습니다. 아래 메시지를 확인해주세요.
        </p>
        <pre className="error-box">{error?.message || "Unknown error"}</pre>
      </section>
    </main>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <HashRouter>
        <App />
      </HashRouter>
    </ErrorBoundary>
  </StrictMode>
);

window.__KIM_APP_READY__ = true;
