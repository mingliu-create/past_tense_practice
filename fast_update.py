import json
import random

# Use absolute paths
INPUT_FILE = r'd:\家教\past_tense\public\questions.json'
OUTPUT_FILE = r'd:\家教\past_tense\public\questions.json'

subjects = [('She', 'she'), ('He', 'he'), ('They', 'they'), ('We', 'we'), ('You', 'you'), ('I', 'I'), ('It', 'it'), ('Mary', 'she'), ('Tom', 'he'), ('The students', 'they')]
patterns = [
    ('be', [('is', 'isn\\'t'), ('isn\\'t', 'is'), ('are', 'aren\\'t'), ('aren\\'t', 'are')], ['at home', 'ready', 'happy', 'tired', 'busy', 'a doctor', 'the winner']),
    ('perfect', [('has', 'hasn\\'t'), ('hasn\\'t', 'has'), ('have', 'haven\\'t'), ('haven\\'t', 'have')], ['finished the work', 'gone home', 'seen the movie', 'done the cleaning', 'received the letter']),
    ('will', [('will', 'won\\'t'), ('won\\'t', 'will')], ['come tomorrow', 'help us', 'be there', 'finish soon', 'call you later']),
    ('modal', [('can', 'can\\'t'), ('can\\'t', 'can'), ('should', 'shouldn\\'t'), ('shouldn\\'t', 'should')], ['drive a car', 'speak English', 'wait here', 'take the test', 'swim well'])
]

def generate():
    with open(INPUT_FILE, 'r', encoding='utf-8') as f: data = json.load(f)
    new_tags = []
    
    # 1. 1000 standard diverse tags
    for i in range(1000):
        p_name, v_pairs, comps = random.choice(patterns)
        subj, pronoun = random.choice(subjects)
        verb, tag_v = random.choice(v_pairs)
        
        # Simple agreement check
        is_singular = subj in ['She', 'He', 'Mary', 'Tom', 'It']
        if p_name == 'be':
            if is_singular and verb not in ['is', 'isn\\'t']: continue
            if not is_singular and verb not in ['are', 'aren\\'t']: continue
        if p_name == 'perfect':
            if is_singular and verb not in ['has', 'hasn\\'t']: continue
            if not is_singular and verb not in ['have', 'haven\\'t']: continue
            
        comp = random.choice(comps)
        new_tags.append({
            'id': 6000 + len(new_tags), 'type': 'input', 
            's': f'{subj} ______ ({p_name}) {comp}, ______ (tag)?', 
            'a': [verb, f'{tag_v} {pronoun}']
        })
        
    # 2. 50  shall we
    for i in range(50):
        verb = random.choice(['go', 'start', 'dance', 'help'])
        new_tags.append({
            'id': 6000 + len(new_tags), 'type': 'input',
            's': f'Let\\'s ______ ({verb}), ______ (tag)?',
            'a': [verb, 'shall we']
        })
        
    # 3. 50 interpretive/negative
    for i in range(50):
        subj, pronoun = random.choice(subjects)
        neg = random.choice(['never', 'seldom'])
        verb_base = random.choice(['know', 'eat', 'see'])
        
        is_singular = subj in ['She', 'He', 'Mary', 'Tom', 'It']
        verb = f'{verb_base}s' if is_singular else verb_base
        tag = f'does {pronoun}' if is_singular else f'do {pronoun}'
        
        new_tags.append({
            'id': 6000 + len(new_tags), 'type': 'input',
            's': f'{subj} {neg} ______ ({verb_base}) it, ______ (tag)?',
            'a': [verb, tag]
        })

    data['tags'] = new_tags[:1100]
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f: json.dump(data, f, indent=2, ensure_ascii=False)
    print(f'Done: {len(new_tags[:1100])} tags updated.')

generate()
