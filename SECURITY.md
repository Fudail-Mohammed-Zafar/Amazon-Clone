# Security Policy

## Supported versions

StockHub is a single-branch project — `main` is always the supported version. There are no maintained release branches, so fixes land on `main` and are deployed from there.

## Reporting a vulnerability

If you find a security issue — an authentication bypass, a way to access or modify data you shouldn't be able to, an injection vulnerability, exposed credentials, or anything similar — please **do not open a public GitHub issue**.

Instead, report it privately by emailing **fudail.zafar@gmail.com** with:

- A description of the issue and its potential impact
- Steps to reproduce it (a minimal example is ideal)
- Any relevant request/response details, if it's an API issue

You should get an acknowledgement within a few days. Please give a reasonable amount of time to investigate and ship a fix before disclosing publicly — this is a solo-maintained project, so turnaround won't be enterprise-fast, but reports are taken seriously.

## Scope

In scope: the code in this repository and its deployed instance at `thestockhub.vercel.app` — the React client, the Express/MongoDB API, authentication, and file upload handling.

Out of scope: third-party services StockHub depends on (MongoDB Atlas, ImageKit, Google Gemini) — please report issues in those directly to their respective providers.
