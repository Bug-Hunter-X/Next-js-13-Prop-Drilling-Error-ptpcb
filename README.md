# Next.js 13 Prop Drilling Error

This repository demonstrates a common error encountered when working with props in Next.js 13 applications.  The issue involves unexpected behavior when passing props to a child component, resulting in an error or unexpected rendering behavior. 

## Problem

The `pages/index.js` file demonstrates a component that passes data to the `MyComponent`, but the component fails to receive the props as expected. This is a specific example that causes an error when using the experimental features of Next.js 13. 

## Solution

The `bugSolution.js` file contains the solution to this problem.  The fix involves using a different approach for passing the props, addressing the underlying issue that causes unexpected behavior with prop passing. Note that the original code has a typo in the props usage and the solution corrects that issue.