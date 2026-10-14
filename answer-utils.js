// Compare spelling and grammar without penalizing capitalization or end punctuation.
export function normalizeAnswer(value) {
  const contractions = {
    "can't": "cannot", "won't": "will not", "shan't": "shall not",
    "isn't": "is not", "aren't": "are not", "wasn't": "was not", "weren't": "were not",
    "don't": "do not", "doesn't": "does not", "didn't": "did not",
    "hasn't": "has not", "haven't": "have not", "hadn't": "had not",
    "couldn't": "could not", "wouldn't": "would not", "shouldn't": "should not",
    "mustn't": "must not", "needn't": "need not", "mightn't": "might not",
    "i'm": "i am", "you're": "you are", "we're": "we are", "they're": "they are",
    "i've": "i have", "you've": "you have", "we've": "we have", "they've": "they have",
    "i'll": "i will", "you'll": "you will", "he'll": "he will", "she'll": "she will",
    "we'll": "we will", "they'll": "they will", "let's": "let us"
  };
  return String(value).normalize('NFKC').toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/\b[a-z]+'[a-z]+\b/g, token => contractions[token] || token)
    .replace(/\bcan not\b/g, 'cannot')
    .replace(/[.,!?;:]/g, ' ')
    .replace(/\s+/g, ' ').trim();
}

export function answerMatches(value, accepted) {
  const answers = Array.isArray(accepted) ? accepted : [accepted];
  // 's and 'd are ambiguous; expand the learner's form against explicit answers.
  function forms(text) {
    const match = text.match(/\b(i|you|he|she|it|we|they|there|that|this)(['’][sd])\b/);
    if (!match) return [text];
    const expansions = match[2] === "'s" ? [' is', ' has'] : [' had', ' would'];
    return [text, ...expansions.flatMap(expansion =>
      forms(text.replace(match[0], match[1] + expansion)))];
  }
  const learnerForms = forms(normalizeAnswer(value));
  return answers.some(answer => forms(normalizeAnswer(answer)).some(form => learnerForms.includes(form)));
}

export function displayAnswers(answers) {
  return answers.map(answer => Array.isArray(answer) ? answer[0] : answer).join(' / ');
}
