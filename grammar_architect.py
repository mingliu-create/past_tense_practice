import json
import random

OUTPUT_FILE = r"d:\家教\past_tense\public\questions.json"

SUBJECTS = [
    ("I", "I", "singular"),
    ("You", "you", "plural"),
    ("He", "he", "singular"),
    ("She", "she", "singular"),
    ("It", "it", "singular"),
    ("We", "we", "plural"),
    ("They", "they", "plural"),
    ("Tom", "he", "singular"),
    ("Mary", "she", "singular"),
    ("The teacher", "she", "singular"),
    ("The doctor", "he", "singular"),
    ("The cat", "it", "singular"),
    ("The students", "they", "plural"),
    ("My parents", "they", "plural"),
]

GRAMMAR_SUBJECTS = [subject for subject in SUBJECTS if subject[0] != "It"]

VERBS = [
    ("finish", "finished", "finished", "finishing", "the report"),
    ("watch", "watched", "watched", "watching", "a movie"),
    ("drink", "drank", "drunk", "drinking", "some coffee"),
    ("write", "wrote", "written", "writing", "the letter"),
    ("clean", "cleaned", "cleaned", "cleaning", "the house"),
    ("read", "read", "read", "reading", "the book"),
    ("cook", "cooked", "cooked", "cooking", "dinner"),
    ("start", "started", "started", "starting", "the project"),
    ("climb", "climbed", "climbed", "climbing", "the mountain"),
    ("water", "watered", "watered", "watering", "the garden"),
    ("drive", "drove", "driven", "driving", "the car"),
    ("practice", "practiced", "practiced", "practicing", "English"),
    ("play", "played", "played", "playing", "the guitar"),
    ("buy", "bought", "bought", "buying", "the cake"),
    ("sing", "sang", "sung", "singing", "the song"),
    ("cross", "crossed", "crossed", "crossing", "the bridge"),
    ("learn", "learned", "learned", "learning", "a new language"),
    ("use", "used", "used", "using", "the computer"),
    ("mop", "mopped", "mopped", "mopping", "the floor"),
    ("repair", "repaired", "repaired", "repairing", "the window"),
]

SIMPLE_TIMES = [
    "yesterday",
    "last night",
    "last weekend",
    "two days ago",
    "this morning",
    "on Monday",
    "in 2019",
    "during the summer vacation",
]

SIMPLE_CONTEXTS = [
    "after school",
    "before dinner",
    "after the meeting",
    "when the class ended",
    "before the rain started",
    "after lunch",
]

PERFECT_SIGNALS = [
    "before the party started",
    "before the bus arrived",
    "by the time we got home",
    "before her parents came back",
    "before the movie began",
    "by the time the teacher checked",
]

CONTINUOUS_DURATIONS = [
    "for two hours",
    "for most of the afternoon",
    "since early morning",
    "all day",
    "for a long time",
    "for three hours",
]

CONTINUOUS_ENDINGS = [
    "before the rain stopped",
    "before dinner was ready",
    "before the lights went out",
    "until the bus finally came",
    "before the guests arrived",
    "until her phone rang",
]

TAG_COMPLEMENTS = [
    "late again",
    "ready for class",
    "busy today",
    "at home now",
    "your new neighbor",
    "careful with money",
    "in the library",
    "afraid of dogs",
    "good at math",
    "on time today",
]

TAG_DO_ACTIONS = [
    "like spicy food",
    "play tennis on Sundays",
    "need more time",
    "know the answer",
    "enjoy science class",
    "walk to school every day",
    "remember the rule",
    "have enough free time",
    "help with housework",
    "watch the news every night",
]

TAG_PAST_ACTIONS = [
    "finish the report on time",
    "call you last night",
    "see Kevin at the station",
    "lock the door before dinner",
    "bring the tickets yesterday",
    "clean the room after school",
    "watch the game on TV",
    "hear the news this morning",
    "leave the office early",
    "visit the museum on Saturday",
]

TAG_FUTURE_ACTIONS = [
    "join the meeting tomorrow",
    "call the office tonight",
    "arrive before noon",
    "help with the project next week",
    "be here on time tomorrow",
    "take the test next Friday",
    "leave early tomorrow",
    "come back soon",
    "visit us this weekend",
    "finish the work tomorrow",
]

TAG_HAVE_OBJECTS = [
    "a new bike",
    "two sisters",
    "enough money",
    "a lot of homework",
    "a piano at home",
    "a headache",
    "an English class on Friday",
    "a dog named Coco",
    "three exams this week",
    "a map of the city",
]

TAG_PERFECT_ACTIONS = [
    "finished the homework",
    "seen that movie",
    "done the dishes",
    "forgotten the key",
    "already eaten lunch",
    "just arrived home",
    "never visited Tainan",
    "written the email",
    "lost the ticket",
    "heard that song before",
]

IMPERATIVE_POSITIVE = [
    "Close the window",
    "Open your book to page ten",
    "Take a seat",
    "Pass me the salt",
    "Help me with this box",
    "Be careful on the stairs",
    "Remember to lock the door",
    "Keep this secret",
    "Wait for me outside",
    "Turn off the light",
]

IMPERATIVE_NEGATIVE = [
    "Don't be late again",
    "Don't open that door",
    "Don't forget your umbrella",
    "Don't make so much noise",
    "Don't touch the wet paint",
    "Don't tell anyone yet",
    "Don't leave your bag here",
    "Don't use my computer",
]

LETS_ACTIONS = [
    "go home now",
    "start the game",
    "take a short break",
    "ask the teacher",
    "clean the classroom first",
    "order some pizza",
    "leave early today",
    "try another example",
    "wait a few minutes",
    "review the answers",
]

NEGATIVE_ADVERBS = ["never", "seldom", "rarely", "hardly ever"]

CONTINUOUS_VERBS = [
    verb for verb in VERBS if verb[0] not in {"buy", "finish", "start"}
]


def shuffled_cycle(items):
    pool = list(items)
    while True:
        random.shuffle(pool)
        for item in pool:
            yield item


def present_form(base):
    irregular = {"have": "has"}
    if base in irregular:
        return irregular[base]
    if base.endswith(("s", "sh", "ch", "x", "z", "o")):
        return f"{base}es"
    if base.endswith("y") and len(base) > 1 and base[-2] not in "aeiou":
        return f"{base[:-1]}ies"
    return f"{base}s"


def sentence_key(item):
    return item["s"]


def mid_subject(subject):
    if subject == "I":
        return "I"
    if subject in {"Tom", "Mary"}:
        return subject
    lowered_pronouns = {"You": "you", "He": "he", "She": "she", "It": "it", "We": "we", "They": "they"}
    if subject in lowered_pronouns:
        return lowered_pronouns[subject]
    return subject[:1].lower() + subject[1:]


def question_subject(subject):
    if subject == "I":
        return "I"
    if subject in {"Tom", "Mary"}:
        return subject
    lowered_pronouns = {"You": "you", "He": "he", "She": "she", "It": "it", "We": "we", "They": "they"}
    if subject in lowered_pronouns:
        return lowered_pronouns[subject]
    return subject[:1].lower() + subject[1:]


def unique_generate(count, start_id, builder):
    items = []
    seen = set()
    idx = 0
    attempts = 0
    limit = count * 40
    while len(items) < count and attempts < limit:
        attempts += 1
        sentence, answers = builder()
        if sentence in seen:
            continue
        seen.add(sentence)
        items.append({"id": start_id + idx, "type": "input", "s": sentence, "a": answers})
        idx += 1
    if len(items) != count:
        raise RuntimeError(f"Could not generate {count} unique items for id {start_id}.")
    return items


def build_simple():
    subject, _, _ = random.choice(GRAMMAR_SUBJECTS)
    base, past, _, _, obj = random.choice(VERBS)
    time = random.choice(SIMPLE_TIMES)
    context = random.choice(SIMPLE_CONTEXTS)
    pattern = random.randint(0, 5)

    if pattern == 0:
        return f"{subject} ______ ({base}) {obj} {time}.", [past]
    if pattern == 1:
        return f"{subject} didn't ______ ({base}) {obj} {time}.", [base]
    if pattern == 2:
        return f"Did {question_subject(subject)} ______ ({base}) {obj} {time}?", [base]
    if pattern == 3:
        return f"{context.capitalize()}, {subject} ______ ({base}) {obj}.", [past]
    if pattern == 4:
        return f"When the class ended, {subject} ______ ({base}) {obj}.", [past]
    return f"{subject} ______ ({base}) {obj} before dinner yesterday.", [past]


def build_perfect():
    subject, _, _ = random.choice(GRAMMAR_SUBJECTS)
    base, _, pp, _, obj = random.choice(VERBS)
    signal = random.choice(PERFECT_SIGNALS)
    follow_subject, _, _ = random.choice(GRAMMAR_SUBJECTS)
    _, follow_past, _, _, follow_obj = random.choice(VERBS)
    pattern = random.randint(0, 5)

    if pattern == 0:
        return f"{subject} ______ (have/perfect) {pp} {obj} {signal}.", ["had"]
    if pattern == 1:
        return f"{subject} had ______ ({base}/pp) {obj} {signal}.", [pp]
    if pattern == 2:
        return f"After {mid_subject(subject)} ______ (have/perfect) {pp} {obj}, everyone relaxed.", ["had"]
    if pattern == 3:
        return f"By the time the teacher arrived, {subject} had ______ ({base}/pp) {obj}.", [pp]
    if pattern == 4:
        return (
            f"{subject} ______ ({base}/perfect) {obj} before {mid_subject(follow_subject)} {follow_past} {follow_obj}."
        ), [f"had {pp}"]
    return (
        f"Because {mid_subject(subject)} ______ ({base}/perfect) {obj} earlier, {mid_subject(subject)} felt relieved."
    ), [f"had {pp}"]


def build_continuous():
    subject, _, _ = random.choice(GRAMMAR_SUBJECTS)
    base, _, _, ing, obj = random.choice(CONTINUOUS_VERBS)
    duration = random.choice(CONTINUOUS_DURATIONS)
    ending = random.choice(CONTINUOUS_ENDINGS)
    pattern = random.randint(0, 4)

    if pattern == 0:
        return f"{subject} ______ ({base}/continuous) {obj} {duration} {ending}.", [f"had been {ing}"]
    if pattern == 1:
        return f"{subject} had been ______ ({base}/ing) {obj} {duration} {ending}.", [ing]
    if pattern == 2:
        return f"Before dinner was ready, {subject} ______ ({base}/continuous) {obj} {duration}.", [f"had been {ing}"]
    if pattern == 3:
        return f"{subject} ______ ({base}/continuous) {obj} all morning before the bus came.", [f"had been {ing}"]
    return f"By noon, {subject} had been ______ ({base}/ing) {obj} since early morning.", [ing]


def build_mixed():
    subject1, _, _ = random.choice(GRAMMAR_SUBJECTS)
    subject2, _, _ = random.choice([s for s in GRAMMAR_SUBJECTS if s[0] != subject1])
    base1, past1, pp1, ing1, obj1 = random.choice(VERBS)
    base2, past2, pp2, ing2, obj2 = random.choice(VERBS)
    cont_base1, _, _, cont_ing1, cont_obj1 = random.choice(CONTINUOUS_VERBS)
    cont_base2, _, _, cont_ing2, cont_obj2 = random.choice(CONTINUOUS_VERBS)
    pattern = random.randint(0, 5)

    if pattern == 0:
        return f"After {mid_subject(subject1)} ______ ({base1}/perfect) {obj1}, {mid_subject(subject2)} {past2} {obj2}.", [f"had {pp1}"]
    if pattern == 1:
        return f"{subject1} {past1} {obj1} because {mid_subject(subject2)} ______ ({base2}/perfect) {obj2} earlier.", [f"had {pp2}"]
    if pattern == 2:
        return f"By the time {mid_subject(subject1)} {past1} {obj1}, {mid_subject(subject2)} ______ ({base2}/perfect) {obj2}.", [f"had {pp2}"]
    if pattern == 3:
        return f"When the teacher arrived, {mid_subject(subject1)} ______ ({cont_base1}/continuous) {cont_obj1} for two hours.", [f"had been {cont_ing1}"]
    if pattern == 4:
        return f"Before {mid_subject(subject1)} {past1} {obj1}, {mid_subject(subject2)} had been ______ ({cont_base2}/ing) {cont_obj2} all morning.", [cont_ing2]
    return f"After {mid_subject(subject1)} had {pp1} {obj1}, {mid_subject(subject2)} ______ ({base2}) {obj2} immediately.", [past2]


def conjugate_action(action, singular):
    base, rest = action.split(" ", 1)
    verb = present_form(base) if singular else base
    return f"{verb} {rest}"


def past_action(action):
    irregular = {
        "see": "saw",
        "bring": "brought",
        "hear": "heard",
        "leave": "left",
        "visit": "visited",
        "finish": "finished",
        "call": "called",
        "lock": "locked",
        "clean": "cleaned",
        "watch": "watched",
    }
    base, rest = action.split(" ", 1)
    past = irregular[base]
    return f"{past} {rest}"


def build_tag():
    subject, pronoun, number = random.choice(SUBJECTS)
    singular = number == "singular" and subject != "You"
    do_singular = number == "singular" and subject not in {"I", "You"}
    family = random.choices(
        ["be", "do", "past", "future", "have", "imperative", "lets", "negative_adverb"],
        weights=[18, 14, 16, 14, 18, 8, 6, 6],
        k=1,
    )[0]

    if family == "be":
        comp = random.choice(TAG_COMPLEMENTS)
        neg = random.random() < 0.3
        if subject == "I":
            if neg:
                return f"I am not {comp}, ______ (tag)?", ["am I"]
            return f"I am {comp}, ______ (tag)?", ["aren't I"]
        be = "is" if singular else "are"
        neg_be = "isn't" if singular else "aren't"
        if neg:
            return f"{subject} {neg_be} {comp}, ______ (tag)?", [f"{be} {pronoun}"]
        return f"{subject} {be} {comp}, ______ (tag)?", [f"{neg_be} {pronoun}"]

    if family == "do":
        action = random.choice(TAG_DO_ACTIONS)
        neg = random.random() < 0.35
        aux = "does" if do_singular else "do"
        neg_aux = "doesn't" if do_singular else "don't"
        if neg:
            return f"{subject} {neg_aux} {action}, ______ (tag)?", [f"{aux} {pronoun}"]
        return f"{subject} {conjugate_action(action, do_singular)}, ______ (tag)?", [f"{neg_aux} {pronoun}"]

    if family == "negative_adverb":
        action = random.choice(TAG_DO_ACTIONS)
        adv = random.choice(NEGATIVE_ADVERBS)
        return f"{subject} {adv} {conjugate_action(action, do_singular)}, ______ (tag)?", [f"{'does' if do_singular else 'do'} {pronoun}"]

    if family == "past":
        action = random.choice(TAG_PAST_ACTIONS)
        neg = random.random() < 0.35
        if random.random() < 0.25:
            comp = random.choice(["tired after the trip", "at school yesterday", "in a hurry this morning", "angry about the delay"])
            be = "was" if singular or subject == "I" else "were"
            neg_be = "wasn't" if singular or subject == "I" else "weren't"
            if neg:
                return f"{subject} {neg_be} {comp}, ______ (tag)?", [f"{be} {pronoun}"]
            return f"{subject} {be} {comp}, ______ (tag)?", [f"{neg_be} {pronoun}"]
        if neg:
            return f"{subject} didn't {action}, ______ (tag)?", [f"did {pronoun}"]
        return f"{subject} {past_action(action)}, ______ (tag)?", [f"didn't {pronoun}"]

    if family == "future":
        action = random.choice(TAG_FUTURE_ACTIONS)
        neg = random.random() < 0.35
        if random.random() < 0.3:
            be = "am" if subject == "I" else "is" if singular else "are"
            neg_be = "am not" if subject == "I" else "isn't" if singular else "aren't"
            if neg:
                return f"{subject} {neg_be} going to {action}, ______ (tag)?", [f"{be if subject != 'I' else 'am'} {pronoun}"]
            return f"{subject} {be} going to {action}, ______ (tag)?", ["aren't I" if subject == "I" else f"{neg_be} {pronoun}"]
        if neg:
            return f"{subject} won't {action}, ______ (tag)?", [f"will {pronoun}"]
        return f"{subject} will {action}, ______ (tag)?", [f"won't {pronoun}"]

    if family == "have":
        neg = random.random() < 0.35
        if random.random() < 0.5:
            obj = random.choice(TAG_HAVE_OBJECTS)
            if do_singular:
                if neg:
                    return f"{subject} doesn't have {obj}, ______ (tag)?", [f"does {pronoun}"]
                return f"{subject} has {obj}, ______ (tag)?", [f"doesn't {pronoun}"]
            if neg:
                return f"{subject} don't have {obj}, ______ (tag)?", [f"do {pronoun}"]
            return f"{subject} have {obj}, ______ (tag)?", [f"don't {pronoun}"]
        action = random.choice(TAG_PERFECT_ACTIONS)
        aux = "has" if singular else "have"
        neg_aux = "hasn't" if singular else "haven't"
        if subject == "I":
            aux = "have"
            neg_aux = "haven't"
        if neg:
            return f"{subject} {neg_aux} {action}, ______ (tag)?", [f"{aux} {pronoun}"]
        return f"{subject} {aux} {action}, ______ (tag)?", [f"{neg_aux} {pronoun}"]

    if family == "imperative":
        if random.random() < 0.5:
            command = random.choice(IMPERATIVE_POSITIVE)
            return f"{command}, ______ (tag)?", [random.choice(["will you", "would you", "can you", "could you", "won't you"])]
        command = random.choice(IMPERATIVE_NEGATIVE)
        return f"{command}, ______ (tag)?", [random.choice(["will you", "would you", "can you"])]

    return f"Let's {random.choice(LETS_ACTIONS)}, ______ (tag)?", ["shall we"]


def generate_all():
    random.seed(42)
    return {
        "simple": unique_generate(1000, 1000, build_simple),
        "perfect": unique_generate(1000, 3000, build_perfect),
        "continuous": unique_generate(1000, 4000, build_continuous),
        "mixed": unique_generate(1000, 5000, build_mixed),
        "tags": unique_generate(1000, 6000, build_tag),
    }


def main():
    data = generate_all()
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print("Generated 5000 refreshed grammar questions.")


if __name__ == "__main__":
    main()
