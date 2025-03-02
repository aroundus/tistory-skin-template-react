import { isRouteErrorResponse } from 'react-router-dom';

export function ErrorBoundary(error: unknown) {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status}</h1>
        <p>{error.data}</p>
      </div>
    );
  }

  if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <pre>{error.stack}</pre>
      </div>
    );
  }

  return (
    <div>
      <h1>Error</h1>
      <p>알 수 없는 오류입니다.</p>
    </div>
  );
}
