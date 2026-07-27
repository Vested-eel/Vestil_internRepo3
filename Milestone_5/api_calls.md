# Reflection on Axios API Calls:

## Why is it useful to create a reusable Axios instance?

- It centralizes configuration (base URL, headers, timeouts) so every request uses the same setup. This reduces repetition and makes maintenance easier.

## How does intercepting requests help with authentication?

- Interceptors automatically attach tokens to requests, ensuring secure communication without manually adding headers each time.

## What happens if an API request times out, and how can you handle it?

- If a request exceeds the timeout, Axios throws an error. You can catch it and show a message like “Request timed out” or retry the request. This prevents the app from hanging indefinitely.
