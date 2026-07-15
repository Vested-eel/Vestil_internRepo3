# Reflection on Formik

## How does Formik simplify form management compared to handling state manually?

- Formik automatically manages form state (values, touched fields, errors) so I don’t have to write repetitive `useState` logic for each input. It also handles submission and validation in a structured way, reducing boilerplate code.

## What are the benefits of using Formik’s validation instead of writing validation logic manually?

- Formik integrates with Yup, which provides a clean, declarative way to define validation rules. Instead of writing custom `if/else` checks for each field, I can describe the rules once in a schema. This makes validation easier to maintain, more consistent, and less error‑prone.
