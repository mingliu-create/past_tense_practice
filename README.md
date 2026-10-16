# TenseMaster - English Grammar Practice

An interactive web app for practicing English grammar with a focus on:

- Past Simple
- Past Perfect
- Past Perfect Continuous
- Mixed past-tense questions
- Question Tags

Live site:
[https://past-tense-practice.vercel.app/](https://past-tense-practice.vercel.app/)

## Science Revision

Use the subject selector, or open
<https://past-tense-practice.vercel.app/?subject=science>.
The original English practice remains available in the same app and repository.

Science covers the published Activity Book 6 (International 2nd Edition) Units 1–3:
human reproduction, plant reproduction and heredity. `science-data.js` provides
original content and links to the public curriculum samples and factual references.

- 60 bilingual scientific terms: English definitions, Chinese explanations,
  chapter filtering, term search, and hide/reveal for active recall.
- 11 original colour illustrations with bilingual labels: reproductive organs,
  placenta and cord, flower parts, pollination versus fertilisation, seed dispersal,
  germination, non-flowering/vegetative reproduction, inheritance, acquired traits,
  and family relationships. Galleries appear in glossary and review modes; each
  term card links to a related diagram. A dialog supports zoom, scrolling and SVG
  download. Definitions start collapsed to let learners begin with the images.
- 16 bilingual review points across the three chapters.
- 60 automatically checked definition-to-term questions, each with a word box.
- 81 original application questions: 25 human, 32 plant, 24 heredity.
  Formats are 45 multiple-choice, 14 true/false and 22 fill-in questions.
  Data tables, flower models and family trees support question interpretation.

Choose all three chapters for mixed practice or select one chapter.
Choose mixed types or focus on multiple-choice, true/false or fill-in questions.
Every Science fill-in question has a shuffled word box containing all required
answers and distractors. Learners can type or click a word to fill the active blank.
All questions use automatic scoring; there are no short-answer, self-assessment or
ordering questions. Explanations are shown after answering.
Reading and review modes do not change scores. Scores remain shared across subjects
under the original local-storage keys; switching subjects preserves progress totals.

The content distinguishes pollination from fertilisation, ovules from egg cells,
and fertilisation from implantation. It treats menstrual dates as a variable model,
distinguishes spore-producing plants from cone-bearing plants, and does not present
complex human traits as universally simple single-gene inheritance.

## Semester Practice

The semester selector defaults to **這學期（期中考）**. The new bank in
`midterm-bank.js` contains 220 individually written questions based on the
supplied Week 1–7 scope:

- Week 1–2: 48 question-tag fill-in questions, covering the supplied negative words and special tag rules.
- Week 3: 36 contextual phrasal-verb multiple-choice questions with four similar phrase options, covering all 13 listed verbs and their meanings.
- Week 4–5: 36 too/enough fill-in questions and 36 full-sentence combinations, covering adjective/adverb/noun placement, for + person/thing, to-infinitives and negative enough patterns.
- Week 6–7: 64 mixed questions including verb forms, stative/action meanings,
  arrangements, timetables, and frequency-adverb placement.

The current-semester combined practice mixes all 220 questions. The
previous-semester selector retains the original 5,000-question JSON bank and its
practice groups. Per-question headings show the question number and exercise
format without revealing the tense.

Sentence combinations require the specified keyword and the original subject.
`answer-utils.js` compares explicit accepted answers, allowing capitalization,
spacing, punctuation, and contractions. It does not award points for fragments
or for sentences that reverse the intended meaning. Explanations appear after
submission. For a sentence textarea, Ctrl+Enter submits; Enter creates a new line.

Scoring remains +10 per correct question, with x2 at 3 consecutive correct answers,
x3 at 7, and x5 at 12. An incorrect question deducts 5 (minimum total 0) and resets
the streak. Multi-blank questions are scored once only when every blank is correct.
Scores and accuracy retain their existing local-storage keys across semesters.

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
