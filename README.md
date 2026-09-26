# Snapshot Search Prototype

A small local search interface for filtering a fixed metadata dataset and presenting useful results clearly.

## Highlights

- Search across titles, categories and tags
- Show result counts and a useful empty state
- Keep the dataset local and predictable
- Render result cards from structured records
- Work without an API key or network request

## Technical approach

The project keeps the search model intentionally visible: a query is normalised, records are filtered, and the result view is rebuilt from the matching data. That makes the behaviour easy to inspect and extend.

## Run locally

Open index.html in a modern browser. No build step is required.

This is a focused exercise in search interaction, filtering logic and information display.
