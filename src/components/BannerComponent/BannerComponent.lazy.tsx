import React, { lazy, Suspense } from 'react';

const LazyBannerComponent = lazy(() => import('./BannerComponent'));

const BannerComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBannerComponent {...props} />
  </Suspense>
);

export default BannerComponent;
