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

The project uses a static JSON bank at [questions.json](/d:/家教/past_tense/public/questions.json).

Current structure:

- `simple`: 1000 questions
- `perfect`: 1000 questions
- `continuous`: 1000 questions
- `mixed`: 1000 questions
- `tags`: 1000 questions

## Current Exercise Design

- Verb hints only show the base word to work from. Labels such as `/perfect`, `/continuous`, `/pp`, and `/ing` are not shown.
- Past Perfect Continuous items require the learner to write the full form `had been + V-ing`.
- Mixed items are written so the learner must decide the grammar from context, not from explicit labels.
- Question Tag items always contain exactly one blank.
- In Question Tags, the blank may appear in the main clause or in the tag.
- Imperatives and `Let's ...` now emphasize tag practice more strongly.
- `Let's ...` items focus on `shall we?`
- Question Tag subjects avoid gender-ambiguous nouns such as `teacher` and `doctor`.
- Present perfect Question Tag items are designed so the learner writes `has/have + past participle`, while time hints stay in the sentence.

## Recent Content Updates

- Expanded verb pool for `simple`, `perfect`, `continuous`, and `mixed` questions.
- Added more sentence templates so `past simple`, `past perfect`, and `past perfect continuous` do not all follow the same structure.
- Improved grammar consistency and cleaned up capitalization and awkward sentence patterns.
- Increased tricky Question Tag coverage, especially:
  - imperatives
  - `Let's ...`
  - `I am ..., aren't I?`
  - `have` as a main verb vs. `have` in perfect forms

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
