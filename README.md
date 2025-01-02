# React Router Dom v6 Nested Route Issue with Wildcard Path

This repository demonstrates a bug in React Router Dom v6 where nested routes fail to render correctly when a parent route uses a wildcard path segment (`*`).  The issue arises when a route like `/contact/*` is present; child routes within `/contact` (e.g., `/contact/details`) will not render.

## Bug Description
Nested routes within a parent route that includes a wildcard path segment are not rendered.  This behavior is inconsistent with how nested routes should work, particularly when using the `Routes` component in React Router v6.

## Reproduction Steps
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe that the nested routes under `/contact` do not work as expected.

## Solution
The solution involves restructuring routes to avoid using wildcards in parent routes when nested routes are required.