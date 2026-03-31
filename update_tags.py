import json
import random

INPUT_FILE = r"d:\家教\past_tense\public\questions.json"

PEOPLE = [
    ("I", "I", "singular"),
    ("you", "you", "plural"),
    ("he", "he", "singular"),
    ("she", "she", "singular"),
    ("it", "it", "singular"),
    ("we", "we", "plural"),
    ("they", "they", "plural"),
    ("Tom", "he", "singular"),
    ("Mary", "she", "singular"),
    ("the cat", "it", "singular"),
    ("the teacher", "she", "singular"),
    ("the doctor", "he", "singular"),
    ("my parents", "they", "plural"),
    ("the students", "they", "plural"),
]

PRESENT_BE_COMPLEMENTS = [
    "late again",
    "ready for the test",
    "busy today",
    "in the classroom",
    "your new neighbor",
    "careful with money",
    "afraid of dogs",
    "good at math",
]

PRESENT_DO_ACTIONS = [
    ("like spicy food", "do"),
    ("play tennis on Sundays", "do"),
    ("need more time", "do"),
    ("know the answer", "do"),
    ("enjoy science class", "do"),
    ("walk to school every day", "do"),
    ("remember the answer", "do"),
    ("have enough free time", "do"),
]

PAST_ACTIONS = [
    "finish the report on time",
    "call you last night",
    "see Kevin at the station",
    "lock the door before dinner",
    "bring the tickets yesterday",
    "clean the room after school",
    "watch the game on TV",
    "hear the news this morning",
]

FUTURE_ACTIONS = [
    "join the meeting tomorrow",
    "call the office tonight",
    "arrive before noon",
    "help with the project next week",
    "be here on time tomorrow",
    "take the test next Friday",
    "leave early tomorrow",
    "come back soon",
]

HAVE_MAIN_OBJECTS = [
    "a new bike",
    "two sisters",
    "enough money",
    "a lot of homework",
    "a piano at home",
    "a headache",
    "an English class on Friday",
    "a dog named Coco",
]

PERFECT_ACTIONS = [
    "finished the homework",
    "seen that movie",
    "done the dishes",
    "forgotten the key",
    "already eaten lunch",
    "just arrived home",
    "never visited Tainan",
    "written the email",
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
]

IMPERATIVE_NEGATIVE = [
    "Don't be late again",
    "Don't open that door",
    "Don't forget your umbrella",
    "Don't make so much noise",
    "Don't touch the wet paint",
    "Don't tell anyone yet",
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
]

NEGATIVE_ADVERBS = [
    ("never", "does"),
    ("seldom", "does"),
    ("rarely", "does"),
    ("hardly ever", "does"),
]


def shuffled_pool(items, count):
    pool = list(items)
    random.shuffle(pool)
    while len(pool) < count:
        extra = list(items)
        random.shuffle(extra)
        pool.extend(extra)
    return pool[:count]


def person_pool(count):
    return shuffled_pool(PEOPLE, count)


def make_item(idx, sentence, answers):
    return {"id": 6000 + idx, "type": "input", "s": sentence, "a": answers}


def present_be_items(count):
    items = []
    people = person_pool(count)
    comps = shuffled_pool(PRESENT_BE_COMPLEMENTS, count)
    negative_slots = set(random.sample(range(count), k=count // 4))
    for i in range(count):
        subj, pro, number = people[i]
        comp = comps[i]
        if subj == "I":
            if i in negative_slots:
                sentence = f"{subj} am not {comp}, ______ (tag)?"
                tag = "am I"
            else:
                sentence = f"{subj} am {comp}, ______ (tag)?"
                tag = "aren't I"
        elif number == "singular":
            if i in negative_slots:
                sentence = f"{subj.capitalize()} isn't {comp}, ______ (tag)?"
                tag = f"is {pro}"
            else:
                sentence = f"{subj.capitalize()} is {comp}, ______ (tag)?"
                tag = f"isn't {pro}"
        else:
            if i in negative_slots:
                sentence = f"{subj.capitalize()} aren't {comp}, ______ (tag)?"
                tag = f"are {pro}"
            else:
                sentence = f"{subj.capitalize()} are {comp}, ______ (tag)?"
                tag = f"aren't {pro}"
        items.append(make_item(i, sentence, [tag]))
    return items


def present_do_items(start_idx, count):
    items = []
    eligible = [p for p in PEOPLE if p[0] not in ("I", "it")]
    people = shuffled_pool(eligible, count)
    actions = shuffled_pool(PRESENT_DO_ACTIONS, count)
    negative_slots = set(random.sample(range(count), k=count // 3))
    for offset in range(count):
        subj, pro, number = people[offset]
        action, _ = actions[offset]
        aux = "does" if number == "singular" else "do"
        neg_aux = "doesn't" if number == "singular" else "don't"
        if offset in negative_slots:
            sentence = f"{subj.capitalize()} {neg_aux} {action}, ______ (tag)?"
            tag = f"{aux} {pro}"
        else:
            surface = conjugate_present_action(action) if number == "singular" else action
            sentence = f"{subj.capitalize()} {surface}, ______ (tag)?"
            tag = f"{neg_aux} {pro}"
        items.append(make_item(start_idx + offset, sentence, [tag]))
    return items


def negative_adverb_items(start_idx, count):
    items = []
    eligible = [p for p in PEOPLE if p[2] == "singular" and p[0] not in ("I", "it")]
    people = shuffled_pool(eligible, count)
    advs = shuffled_pool(NEGATIVE_ADVERBS, count)
    verbs = shuffled_pool(
        ["eat breakfast at home", "forget homework", "arrive late", "watch the news", "agree with me"],
        count,
    )
    for offset in range(count):
        subj, pro, _ = people[offset]
        adv, tag_aux = advs[offset]
        verb = verbs[offset]
        sentence = f"{subj.capitalize()} {adv} {conjugate_present_action(verb)}, ______ (tag)?"
        items.append(make_item(start_idx + offset, sentence, [f"{tag_aux} {pro}"]))
    return items


def past_items(start_idx, count):
    items = []
    people = person_pool(count)
    actions = shuffled_pool(PAST_ACTIONS, count)
    negative_slots = set(random.sample(range(count), k=count // 3))
    be_slots = set(random.sample(range(count), k=count // 4))
    past_be_comps = shuffled_pool(
        ["at school yesterday", "very tired after the trip", "angry about the delay", "in a hurry this morning"],
        count,
    )
    for offset in range(count):
        subj, pro, number = people[offset]
        if offset in be_slots:
            comp = past_be_comps[offset]
            if number == "singular" or subj == "I":
                if offset in negative_slots:
                    sentence = f"{subj.capitalize()} wasn't {comp}, ______ (tag)?"
                    tag = f"was {pro}"
                else:
                    sentence = f"{subj.capitalize()} was {comp}, ______ (tag)?"
                    tag = f"wasn't {pro}"
            else:
                if offset in negative_slots:
                    sentence = f"{subj.capitalize()} weren't {comp}, ______ (tag)?"
                    tag = f"were {pro}"
                else:
                    sentence = f"{subj.capitalize()} were {comp}, ______ (tag)?"
                    tag = f"weren't {pro}"
        else:
            action = actions[offset]
            if offset in negative_slots:
                sentence = f"{subj.capitalize()} didn't {action}, ______ (tag)?"
                tag = f"did {pro}"
            else:
                sentence = f"{subj.capitalize()} {past_form(action)}, ______ (tag)?"
                tag = f"didn't {pro}"
        items.append(make_item(start_idx + offset, sentence, [tag]))
    return items


def future_items(start_idx, count):
    items = []
    people = person_pool(count)
    actions = shuffled_pool(FUTURE_ACTIONS, count)
    negative_slots = set(random.sample(range(count), k=count // 3))
    going_to_slots = set(random.sample(range(count), k=count // 4))
    for offset in range(count):
        subj, pro, number = people[offset]
        action = actions[offset]
        if offset in going_to_slots:
            be = "am" if subj == "I" else "is" if number == "singular" else "are"
            neg_be = "am not" if subj == "I" else "isn't" if number == "singular" else "aren't"
            if offset in negative_slots:
                sentence = f"{subj.capitalize()} {neg_be} going to {action}, ______ (tag)?"
                tag = ("am I" if subj == "I" else f"{be} {pro}")
            else:
                sentence = f"{subj.capitalize()} {be} going to {action}, ______ (tag)?"
                tag = ("aren't I" if subj == "I" else f"{neg_be} {pro}")
        else:
            if offset in negative_slots:
                sentence = f"{subj.capitalize()} won't {action}, ______ (tag)?"
                tag = f"will {pro}"
            else:
                sentence = f"{subj.capitalize()} will {action}, ______ (tag)?"
                tag = f"won't {pro}"
        items.append(make_item(start_idx + offset, sentence, [tag]))
    return items


def have_items(start_idx, count):
    items = []
    people = person_pool(count)
    objects = shuffled_pool(HAVE_MAIN_OBJECTS, count)
    perfects = shuffled_pool(PERFECT_ACTIONS, count)
    main_verb_slots = set(random.sample(range(count), k=count // 2))
    negative_slots = set(random.sample(range(count), k=count // 3))
    for offset in range(count):
        subj, pro, number = people[offset]
        if offset in main_verb_slots:
            obj = objects[offset]
            if subj == "I" or number == "plural":
                if offset in negative_slots:
                    sentence = f"{subj.capitalize()} don't have {obj}, ______ (tag)?"
                    tag = f"do {pro}"
                else:
                    sentence = f"{subj.capitalize()} have {obj}, ______ (tag)?"
                    tag = f"don't {pro}"
            else:
                if offset in negative_slots:
                    sentence = f"{subj.capitalize()} doesn't have {obj}, ______ (tag)?"
                    tag = f"does {pro}"
                else:
                    sentence = f"{subj.capitalize()} has {obj}, ______ (tag)?"
                    tag = f"doesn't {pro}"
        else:
            action = perfects[offset]
            aux = "have" if subj == "I" or number == "plural" else "has"
            neg_aux = "haven't" if aux == "have" else "hasn't"
            if offset in negative_slots:
                sentence = f"{subj.capitalize()} {neg_aux} {action}, ______ (tag)?"
                tag = f"{aux} {pro}"
            else:
                sentence = f"{subj.capitalize()} {aux} {action}, ______ (tag)?"
                tag = f"{neg_aux} {pro}"
        items.append(make_item(start_idx + offset, sentence, [tag]))
    return items


def imperative_items(start_idx, count):
    items = []
    positive_count = count // 2
    positives = shuffled_pool(IMPERATIVE_POSITIVE, positive_count)
    negatives = shuffled_pool(IMPERATIVE_NEGATIVE, count - positive_count)
    positive_tags = ["will you", "would you", "can you", "could you", "won't you"]
    negative_tags = ["will you", "can you", "would you"]
    for offset in range(positive_count):
        command = positives[offset]
        tag = random.choice(positive_tags)
        items.append(make_item(start_idx + len(items), f"{command}, ______ (tag)?", [tag]))
    while len(items) < count:
        command = negatives[len(items) - positive_count]
        tag = random.choice(negative_tags)
        items.append(make_item(start_idx + len(items), f"{command}, ______ (tag)?", [tag]))
    return items


def lets_items(start_idx, count):
    items = []
    actions = shuffled_pool(LETS_ACTIONS, count)
    for offset in range(count):
        items.append(make_item(start_idx + offset, f"Let's {actions[offset]}, ______ (tag)?", ["shall we"]))
    return items


def past_form(action):
    irregular = {
        "see Kevin at the station": "saw Kevin at the station",
        "bring the tickets yesterday": "brought the tickets yesterday",
        "hear the news this morning": "heard the news this morning",
    }
    if action in irregular:
        return irregular[action]
    verb, rest = action.split(" ", 1)
    if verb.endswith("e"):
        return f"{verb}d {rest}"
    return f"{verb}ed {rest}"


def generate_tags():
    items = []
    items.extend(present_be_items(180))
    items.extend(present_do_items(len(items), 120))
    items.extend(negative_adverb_items(len(items), 40))
    items.extend(past_items(len(items), 180))
    items.extend(future_items(len(items), 140))
    items.extend(have_items(len(items), 180))
    items.extend(imperative_items(len(items), 100))
    items.extend(lets_items(len(items), 60))
    random.shuffle(items)
    for idx, item in enumerate(items):
        item["id"] = 6000 + idx
    return items


def conjugate_present_action(action):
    verb, rest = action.split(" ", 1)
    irregular = {
        "have": "has",
    }
    if verb in irregular:
        return f"{irregular[verb]} {rest}"
    if verb.endswith(("s", "sh", "ch", "x", "z", "o")):
        return f"{verb}es {rest}"
    if verb.endswith("y") and len(verb) > 1 and verb[-2] not in "aeiou":
        return f"{verb[:-1]}ies {rest}"
    return f"{verb}s {rest}"


def main():
    random.seed(42)
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)
    data["tags"] = generate_tags()
    with open(INPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"Updated {len(data['tags'])} tag questions.")


if __name__ == "__main__":
    main()
