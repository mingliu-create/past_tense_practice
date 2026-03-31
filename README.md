# TenseMaster - English Grammar Practice

An interactive web app for practicing English grammar with a focus on:

- Past Simple
- Past Perfect
- Past Perfect Continuous
- Mixed past-tense questions
- Question Tags

Live site:
[https://past-tense-practice.vercel.app/](https://past-tense-practice.vercel.app/)

## Status

- Update date: 2026-04-01
- Status: Active

## Question Bank

The project uses a static JSON question bank at [public/questions.json](/d:/家教/past_tense/public/questions.json).

Current structure:

- `simple`: 1000 questions
- `perfect`: 1000 questions
- `continuous`: 1000 questions
- `mixed`: 1000 questions
- `tags`: 1000 questions

## Current Exercise Rules

- Verb hints now only show the word to fill from, not grammar labels like `/perfect`, `/continuous`, `/pp`, or `/ing`.
- Past Perfect Continuous questions require learners to fill the full form `had been + V-ing`.
- Mixed questions are designed to force tense choice from context instead of from labels.
- Question Tag items keep exactly one blank per sentence.
- In Question Tags, the blank may appear in the main clause or in the tag, not only at the end.
- Question Tag subjects avoid gender-ambiguous nouns such as `teacher` and `doctor`.

## Generation Scripts

- [grammar_architect.py](/d:/家教/past_tense/grammar_architect.py): regenerates the full question bank
- [update_tags.py](/d:/家教/past_tense/update_tags.py): tag-focused updates
- [fast_update.py](/d:/家教/past_tense/fast_update.py): local utility script kept in the repo

## Tech Stack

- Vite
- Vanilla JavaScript
- Static JSON data
- CSS

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build:

```bash
npm run build
```
