import { Suspense } from 'react';
import UseSWRSuspenseCheck from './UseSWRSuspenseCheck';
import { ErrorBoundary } from 'react-error-boundary'; // ライブラリからインポート

function MyErrorBoundaryFallback({ error, resetErrorBoundary }) {
    // ここでエラー情報を使ってカスタムUIを表示できる
    return (
      <div role="alert">
        <p>何か問題が発生しました:</p>
        <pre style={{ color: 'red' }}>{error.message}</pre>
        <button onClick={resetErrorBoundary}>再試行</button>
      </div>
    );
  }

function UseSWRCheck2() {

  return (
    <div>
        <h1>SWR + Suspense + ErrorBoundaryのデモ</h1>
        {/* エラーハンドリングのためにErrorBoundaryとSuspenseを組み合わせるのが一般的 */}
        <ErrorBoundary FallbackComponent={MyErrorBoundaryFallback}>
            <Suspense fallback={<div>天気データを読み込み中...</div>}>
                <UseSWRSuspenseCheck />
            </Suspense>
        </ErrorBoundary>
    </div>
  );

}

export default UseSWRCheck2;