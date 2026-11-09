import { createElement, lazy, Suspense, type ReactNode } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';

import Layout from './Layout';
import { Loader } from '../features/requests/components/Loading/Loader';

const RequestsPage = lazy(
  () => import('../features/requests/pages/RequestsPage'),
);

const CreateRequestPage = lazy(
  () => import('../features/requests/pages/CreateRequestPage'),
);

const RequestDetailsPage = lazy(
  () => import('../features/requests/pages/RequestDetailsPage'),
);

const withSuspense = (element: ReactNode) =>
  createElement(Suspense, { fallback: createElement(Loader) }, element);

export const router = createBrowserRouter([
  {
    element: createElement(Layout),
    children: [
      {
        path: '/',
        element: withSuspense(
          createElement(Navigate, {
            to: '/requests',
            replace: true,
          }),
        ),
      },
      {
        path: '/requests',
        element: withSuspense(createElement(RequestsPage)),
      },
      {
        path: '/requests/new',
        element: withSuspense(createElement(CreateRequestPage)),
      },
      {
        path: '/requests/:id',
        element: withSuspense(createElement(RequestDetailsPage)),
      },
      {
        path: '*',
        element: withSuspense(
          createElement(Navigate, {
            to: '/requests',
            replace: true,
          }),
        ),
      },
    ],
  },
]);
