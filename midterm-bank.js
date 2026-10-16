// Individually authored from the supplied Week 1–7 scope; no name/verb substitution templates.
const choice = (s, answer, distractors, explanation) => ({ type: 'choice', s, a: [answer], choices: [answer, ...distractors], explanation });
const fill = (s, a, explanation) => ({ type: 'input', s, a, explanation });

export const MIDTERM_BANK = {
  tags: [
    {
      "type": "input",
      "s": "The spare batteries are in the top drawer, ______?",
      "a": [
        "aren't they"
      ],
      "explanation": "主句用 are；batteries 是複數，用 they，肯定接否定。",
      "scope": "be-positive"
    },
    {
      "type": "input",
      "s": "The aquarium is not open on Mondays, ______?",
      "a": [
        "is it"
      ],
      "explanation": "主句是否定的 is not，附加問句用 is it。",
      "scope": "be-negative"
    },
    {
      "type": "input",
      "s": "The parcel was delivered to the wrong address, ______?",
      "a": [
        "wasn't it"
      ],
      "explanation": "沿用 was；parcel 用 it。",
      "scope": "past-be"
    },
    {
      "type": "input",
      "s": "The players were not ready when the whistle blew, ______?",
      "a": [
        "were they"
      ],
      "explanation": "沿用主句 were，否定接肯定；players 用 they。",
      "scope": "past-be-negative"
    },
    {
      "type": "input",
      "s": "Your brother repairs bicycles at the weekend, ______?",
      "a": [
        "doesn't he"
      ],
      "explanation": "repairs 是一般動詞的第三人稱單數，用 doesn’t；brother 用 he。",
      "scope": "simple-present"
    },
    {
      "type": "input",
      "s": "The ferry does not stop at this island, ______?",
      "a": [
        "does it"
      ],
      "explanation": "主句用 does not，附加問句用 does it。",
      "scope": "simple-present-negative"
    },
    {
      "type": "input",
      "s": "We packed the first-aid kit before leaving, ______?",
      "a": [
        "didn't we"
      ],
      "explanation": "packed 是過去式，附加問句用 did，主詞維持 we。",
      "scope": "simple-past"
    },
    {
      "type": "input",
      "s": "The visitors did not touch the paintings, ______?",
      "a": [
        "did they"
      ],
      "explanation": "主句用 did not，附加問句用 did they。",
      "scope": "simple-past-negative"
    },
    {
      "type": "input",
      "s": "You are checking the departure board, ______?",
      "a": [
        "aren't you"
      ],
      "explanation": "沿用 are；肯定接否定，主詞維持 you。",
      "scope": "continuous"
    },
    {
      "type": "input",
      "s": "The clock is not working properly, ______?",
      "a": [
        "is it"
      ],
      "explanation": "沿用 is；否定接肯定，clock 用 it。",
      "scope": "continuous-negative"
    },
    {
      "type": "input",
      "s": "The builders have finished the new footbridge, ______?",
      "a": [
        "haven't they"
      ],
      "explanation": "have finished 的助動詞是 have；builders 用 they。",
      "scope": "perfect"
    },
    {
      "type": "input",
      "s": "The guide, Ms Wong, has not counted all the tickets, ______?",
      "a": [
        "has she"
      ],
      "explanation": "這裡的 guide 指女性；has not counted 的附加問句沿用 has。",
      "scope": "perfect-negative"
    },
    {
      "type": "input",
      "s": "The driver, Mr Lim, had checked the mirrors before reversing, ______?",
      "a": [
        "hadn't he"
      ],
      "explanation": "這裡的 driver 指男性；沿用 had checked 的 had。",
      "scope": "past-perfect"
    },
    {
      "type": "input",
      "s": "The children can swim without their floats, ______?",
      "a": [
        "can't they"
      ],
      "explanation": "沿用情態動詞 can；children 用 they。",
      "scope": "modal-can"
    },
    {
      "type": "input",
      "s": "You could not hear the announcement, ______?",
      "a": [
        "could you"
      ],
      "explanation": "could not 是否定，附加問句用 could you。",
      "scope": "modal-could"
    },
    {
      "type": "input",
      "s": "The caretaker, Mr Tan, will lock the gate at sunset, ______?",
      "a": [
        "won't he"
      ],
      "explanation": "這裡的 caretaker 指男性；will 的否定縮寫是 won’t。",
      "scope": "modal-will"
    },
    {
      "type": "input",
      "s": "We should leave a path clear for wheelchairs, ______?",
      "a": [
        "shouldn't we"
      ],
      "explanation": "沿用 should，肯定接否定。",
      "scope": "modal-should"
    },
    {
      "type": "input",
      "s": "Passengers must not lean against these doors, ______?",
      "a": [
        "must they"
      ],
      "explanation": "沿用 must，否定接肯定；passengers 用 they。",
      "scope": "modal-must"
    },
    {
      "type": "input",
      "s": "You would prefer a seat near the aisle, ______?",
      "a": [
        "wouldn't you"
      ],
      "explanation": "沿用 would，肯定接否定。",
      "scope": "modal-would"
    },
    {
      "type": "input",
      "s": "I am responsible for returning the library books, ______?",
      "a": [
        "aren't I"
      ],
      "explanation": "I am 的肯定主句，附加問句特別用 aren’t I。",
      "scope": "i-am"
    },
    {
      "type": "input",
      "s": "I am not standing in your way, ______?",
      "a": [
        "am I"
      ],
      "explanation": "I am not 的附加問句用 am I。",
      "scope": "i-am-not"
    },
    {
      "type": "input",
      "s": "Please leave the wet umbrellas outside, ______?",
      "a": [
        [
          "will you",
          "won't you"
        ]
      ],
      "explanation": "肯定祈使句可接 will you 或 won’t you。",
      "scope": "imperative"
    },
    {
      "type": "input",
      "s": "Keep this receipt until the refund arrives, ______?",
      "a": [
        [
          "will you",
          "won't you"
        ]
      ],
      "explanation": "祈使句省略主詞 you，可接 will you 或 won’t you。",
      "scope": "imperative"
    },
    {
      "type": "input",
      "s": "Do not remove the labels from the jars, ______?",
      "a": [
        "will you"
      ],
      "explanation": "否定祈使句用 will you。",
      "scope": "negative-imperative"
    },
    {
      "type": "input",
      "s": "Let's compare our measurements before handing in the report, ______?",
      "a": [
        "shall we"
      ],
      "explanation": "Let’s 表示共同提議，附加問句用 shall we。",
      "scope": "lets"
    },
    {
      "type": "input",
      "s": "Let me hold the ladder while you climb, ______?",
      "a": [
        [
          "will you",
          "won't you"
        ]
      ],
      "explanation": "Let me 是請對方允許或接受協助，接 will you／won’t you。",
      "scope": "let-me"
    },
    {
      "type": "input",
      "s": "Let him explain why the alarm went off, ______?",
      "a": [
        [
          "will you",
          "won't you"
        ]
      ],
      "explanation": "Let him 不等於 Let’s，接 will you／won’t you。",
      "scope": "let-him"
    },
    {
      "type": "input",
      "s": "You have a torch in your backpack, ______?",
      "a": [
        "don't you"
      ],
      "explanation": "have 表示擁有，依講義的一般動詞用法，用 do。",
      "scope": "have"
    },
    {
      "type": "input",
      "s": "The twins have got matching raincoats, ______?",
      "a": [
        "haven't they"
      ],
      "explanation": "have got 表示擁有，附加問句沿用 have。",
      "scope": "have-got"
    },
    {
      "type": "input",
      "s": "There is a spare key under the flowerpot, ______?",
      "a": [
        "isn't there"
      ],
      "explanation": "There is 的附加問句保留 there，肯定接否定。",
      "scope": "there-positive"
    },
    {
      "type": "input",
      "s": "There are not any dry towels left, ______?",
      "a": [
        "are there"
      ],
      "explanation": "There are not 的附加問句是 are there。",
      "scope": "there-negative"
    },
    {
      "type": "input",
      "s": "This is the entrance shown on our map, ______?",
      "a": [
        "isn't it"
      ],
      "explanation": "This 在附加問句中改用 it。",
      "scope": "this"
    },
    {
      "type": "input",
      "s": "That was the last bus to the village, ______?",
      "a": [
        "wasn't it"
      ],
      "explanation": "That 改用 it，並沿用 was。",
      "scope": "that"
    },
    {
      "type": "input",
      "s": "Everyone has handed in a permission slip, ______?",
      "a": [
        "haven't they"
      ],
      "explanation": "Everyone 指人，附加問句用 they；配合 they 用 have。",
      "scope": "everyone"
    },
    {
      "type": "input",
      "s": "Someone is waiting beside the ticket machine, ______?",
      "a": [
        "aren't they"
      ],
      "explanation": "Someone 指人，用 they；is 配合 they 改用 are。",
      "scope": "someone"
    },
    {
      "type": "input",
      "s": "Anyone can join the lunchtime chess club, ______?",
      "a": [
        "can't they"
      ],
      "explanation": "Anyone 在附加問句中用 they，沿用 can。",
      "scope": "anyone"
    },
    {
      "type": "input",
      "s": "No one was injured when the ceiling tile fell, ______?",
      "a": [
        "were they"
      ],
      "explanation": "No one 含否定意思，用肯定問句；指人用 they，配合 were。",
      "scope": "no-one"
    },
    {
      "type": "input",
      "s": "Nobody remembered to switch off the projector, ______?",
      "a": [
        "did they"
      ],
      "explanation": "Nobody 含否定意思；remembered 是過去式，用 did they。",
      "scope": "nobody"
    },
    {
      "type": "input",
      "s": "Nothing has changed since our last visit, ______?",
      "a": [
        "has it"
      ],
      "explanation": "Nothing 含否定意思，指事物用 it；沿用 has。",
      "scope": "nothing"
    },
    {
      "type": "input",
      "s": "Neither of the twins can reach the top shelf, ______?",
      "a": [
        "can they"
      ],
      "explanation": "Neither 含否定意思，問句用肯定；指兩位雙胞胎用 they，沿用 can。",
      "scope": "neither"
    },
    {
      "type": "input",
      "s": "There is no drinking water at the campsite, ______?",
      "a": [
        "is there"
      ],
      "explanation": "no 使主句帶否定意思，因此用肯定的 is there。",
      "scope": "no"
    },
    {
      "type": "input",
      "s": "None of this equipment needs batteries, ______?",
      "a": [
        "does it"
      ],
      "explanation": "None 含否定意思；equipment 不可數，用 it；needs 用 does。",
      "scope": "none"
    },
    {
      "type": "input",
      "s": "You could scarcely see the path in the fog, ______?",
      "a": [
        "could you"
      ],
      "explanation": "scarcely 表示幾乎不能，附加問句用肯定的 could you。",
      "scope": "scarcely"
    },
    {
      "type": "input",
      "s": "The neighbours hardly ever use their balcony, ______?",
      "a": [
        "do they"
      ],
      "explanation": "hardly ever 含否定意思；use 用 do，neighbours 用 they。",
      "scope": "hardly-ever"
    },
    {
      "type": "input",
      "s": "The lift never stops between floors, ______?",
      "a": [
        "does it"
      ],
      "explanation": "never 含否定意思；stops 用 does，lift 用 it。",
      "scope": "never"
    },
    {
      "type": "input",
      "s": "We seldom eat out during the school week, ______?",
      "a": [
        "do we"
      ],
      "explanation": "seldom 含否定意思，所以用肯定的 do we。",
      "scope": "seldom"
    },
    {
      "type": "input",
      "s": "Your sister needs to renew her bus pass, ______?",
      "a": [
        "doesn't she"
      ],
      "explanation": "need 在此是一般動詞，needs 的附加問句用 doesn’t she。",
      "scope": "need"
    },
    {
      "type": "input",
      "s": "The youngest climber, Amy, dared to cross the rope bridge, ______?",
      "a": [
        "didn't she"
      ],
      "explanation": "這裡的 climber 指女性；dared 是一般動詞過去式，用 didn’t she。",
      "scope": "dare"
    }
  ],
  phrasal: [
    choice("The freezer stopped working overnight. It ______, and all the ice cream melted.", "broke down", ["broke off","broke out","broke up"], 'break down：機器故障。'),
    choice("When she finally heard that her missing dog was safe, she ______ and could not stop crying with relief.", "broke down", ["broke off","broke out","broke up"], 'break down：情緒失控。'),
    choice("The back window was smashed. Someone had ______ the bakery while it was closed.", "broken into", ["broken off","broken out of","broken up"], 'break into：強行闖入。'),
    choice("As soon as the missing child walked onto the stage, the audience ______ applause.", "broke into", ["broke off","broke through","broke up"], 'break into applause：突然開始鼓掌。'),
    choice("Selling homemade short films helped the young director ______ the film industry.", "break into", ["break off","break out of","break up"], 'break into：成功進入某個行業。'),
    choice("The two companies ______ their agreement after the safety inspection revealed serious problems.", "broke off", ["broke down","broke into","broke out of"], 'break off：中止協議或關係。'),
    choice("Smoke was pouring from the kitchen when a fire ______ in the restaurant.", "broke out", ["broke down","broke off","broke up"], 'break out：突然發生。'),
    choice("The cage door was left open, and the hamster ______ its cage.", "broke out of", ["broke into","broke off","broke up"], 'break out of：逃離。'),
    choice("The rescue team used a heavy tool to ______ the locked barrier and reach the trapped hikers.", "break through", ["break into","break off","break out of"], 'break through：突破障礙。'),
    choice("Our school ______ for the summer holidays on the last Friday in June.", "breaks up", ["breaks down","breaks off","breaks into"], 'break up：學校開始放假。'),
    choice("After months of arguments, the couple decided to ______ rather than get married.", "break up", ["break down","break into","break out"], 'break up：分手。'),
    choice("His grandparents ______ their grandson after his parents died, teaching him to be patient and kind.", "brought up", ["called off","carried out","broke into"], 'bring someone up：養育。'),
    choice("I was passing my uncle’s house, so I ______ for a short visit before going home.", "called in", ["called off","called for","called on"], 'call in：順路短暫探訪。'),
    choice("Heavy snow made the roads unsafe, so the school ______ the trip.", "called off", ["called for","called on","called in"], 'call off：取消。'),
    choice("During the assembly, the principal ______ students to help keep the playground clean.", "called on", ["called off","called for","called in"], 'call on someone to do something：正式呼籲某人做某事。'),
    choice("The runners drank some water, then ______ with their training.", "carried on", ["carried out","called off","broke into"], 'carry on with：繼續。'),
    choice("Before selling the new medicine, researchers must ______ several safety tests.", "carry out", ["carry on","call off","bring up"], 'carry out：執行、進行。'),
    choice("This broken water pipe ______ an immediate repair; the floor is already flooding.", "calls for", ["calls off","calls on","calls in"], 'call for：需要。'),
    choice("The delivery van ______ on the motorway, so the driver had to wait for a mechanic.", "broke down", ["broke off","broke out","broke up"], '過去發生的故障，用 broke down。'),
    choice("The thief tried to ______ the museum through a small upstairs window.", "break into", ["break out of","break off","break up"], 'try to 後用原形片語。'),
    choice("We have ______ the outdoor performance because a storm is approaching.", "called off", ["called for","called on","called in"], 'have 後用過去分詞 called。'),
    choice("The instructions are clear enough for us to ______ the experiment without help.", "carry out", ["carry on","call off","bring up"], 'to 後用原形；carry out 表示進行。'),
    choice("Although her presentation was interrupted by a loud noise, she ______ with it once the room was quiet.", "carried on", ["carried out","called off","broke into"], '從 once the room was quiet 可知是過去敘述。'),
    choice("My aunt ______ three children on her own while working as a nurse.", "brought up", ["called off","carried out","broke into"], 'brought up：養育；bring 的過去式為 brought。'),
    choice("The partnership ended last year. The two firms ______ their business relationship after a legal dispute.", "broke off", ["broke down","broke into","broke out of"], 'break off 的過去式為 broke off。'),
    choice("When the singer forgot the words, several people ______ laughter despite trying to stay quiet.", "broke into", ["broke off","broke through","broke up"], 'break into laughter：突然笑出來。'),
    choice("A prison officer found a tunnel under the wall. Two prisoners had ______ during the night.", "broken out", ["broken down","broken off","broken up"], 'break out：逃離監獄。'),
    choice("The fallen tree blocked the road completely. Clearing it ______ specialist equipment.", "called for", ["called off","called on","called in"], 'call for：需要某項設備。'),
    choice("The museum is closed while engineers ______ a detailed inspection of the roof.", "carry out", ["carry on","call off","bring up"], 'carry out an inspection：進行檢查。'),
    choice("The chairperson ______ every team leader to submit a safety report by Friday.", "called on", ["called off","called for","called in"], 'call on someone to do something：要求或呼籲。'),
    choice("The children were ______ by their foster parents in a quiet coastal town.", "brought up", ["called off","carried out","broken into"], 'be brought up：被養育。'),
    choice("The actor ______ after reading the final message from his late father and could not finish his speech.", "broke down", ["broke off","broke out","broke up"], 'break down：因情緒激動而無法繼續。'),
    choice("Peace talks failed, and fighting ______ along the border the following morning.", "broke out", ["broke down","broke off","broke up"], 'break out：戰爭或衝突突然爆發。'),
    choice("The battering ram helped the firefighters ______ the barrier blocking the warehouse entrance.", "break through", ["break into","break off","break out of"], 'break through：突破障礙。'),
    choice("Can you ______ at the pharmacy on your way home? The pharmacist wants to speak to you briefly.", "call in", ["call off","call for","call on"], 'call in at：短暫到訪某處。'),
    choice("The organisers ______ the race yesterday because the track was flooded.", "called off", ["called for","called on","called in"], 'yesterday 表示過去；call off 為取消。')
  ],
  degree: [
    {
      "type": "input",
      "s": "The tray has just come out of the oven. It is ______ to touch without oven gloves. (hot)",
      "a": [
        "too hot"
      ],
      "explanation": "too + 形容詞 + to：過熱而不能徒手碰。",
      "scope": "too-adjective-to"
    },
    {
      "type": "input",
      "s": "I could not catch the last train because I reached the platform ______. (late)",
      "a": [
        "too late"
      ],
      "explanation": "too 放在副詞 late 前，表示到得太晚。",
      "scope": "too-adverb"
    },
    {
      "type": "input",
      "s": "This helmet slides over my eyes even with the strap tightened. It is ______ for me. (big)",
      "a": [
        "too big"
      ],
      "explanation": "too + 形容詞 + for + 對象，表示對我而言過大。",
      "scope": "too-for"
    },
    {
      "type": "input",
      "s": "The river current is ______ for beginners to swim across safely. The lifeguard has closed the swimming area. (strong)",
      "a": [
        "too strong"
      ],
      "explanation": "too + 形容詞 + for + 人 + to，程度過高而無法安全完成。",
      "scope": "too-for-to"
    },
    {
      "type": "input",
      "s": "The tour guide spoke ______ for us to write down the address, so we had to ask her to repeat it. (quickly)",
      "a": [
        "too quickly"
      ],
      "explanation": "too 修飾副詞 quickly，表示快得來不及記下。",
      "scope": "too-adverb-for-to"
    },
    {
      "type": "input",
      "s": "The puppy is only six weeks old. It is ______ to leave its mother. (young)",
      "a": [
        "too young"
      ],
      "explanation": "年齡太小而不能離開母親，用 too young to。",
      "scope": "too-adjective-to"
    },
    {
      "type": "input",
      "s": "The gate is narrower than our moving van. It is ______ for the van to pass through. (narrow)",
      "a": [
        "too narrow"
      ],
      "explanation": "too narrow for + 物 + to，保留 pass through。",
      "scope": "too-object-for-to"
    },
    {
      "type": "input",
      "s": "The bedtime story contains frightening scenes. It is ______ for small children. (scary)",
      "a": [
        "too scary"
      ],
      "explanation": "too + 形容詞 + for，不一定需要接 to。",
      "scope": "too-for"
    },
    {
      "type": "input",
      "s": "The microphone made the announcement ______ for anyone to understand, so the staff turned the volume down. (loud)",
      "a": [
        "too loud"
      ],
      "explanation": "由音量過大而聽不清判斷用 too loud。",
      "scope": "too-for-to"
    },
    {
      "type": "input",
      "s": "The handle is ______ for me to grip with one hand, so I have to use both hands. (thick)",
      "a": [
        "too thick"
      ],
      "explanation": "too thick for me to grip：太粗而不能單手握住。",
      "scope": "too-for-to"
    },
    {
      "type": "input",
      "s": "The drummer played ______ for the dancers to keep up, so they asked him to slow down. (fast)",
      "a": [
        "too fast"
      ],
      "explanation": "too + 副詞 + for + 人 + to。",
      "scope": "too-adverb-for-to"
    },
    {
      "type": "input",
      "s": "The pond has only a thin layer of ice. It is ______ to skate on safely. (thin)",
      "a": [
        "too thin"
      ],
      "explanation": "too thin to skate on；不可省略與 pond 搭配的 on。",
      "scope": "too-preposition"
    },
    {
      "type": "input",
      "s": "The box contains far more books than one child can carry. There are ______ books in it for her to lift it safely. (many)",
      "a": [
        "too many"
      ],
      "explanation": "可數複數 books 用 too many。",
      "scope": "too-many"
    },
    {
      "type": "input",
      "s": "The sauce is unpleasantly sweet because I added ______ honey. (much)",
      "a": [
        "too much"
      ],
      "explanation": "不可數 honey 用 too much。",
      "scope": "too-much"
    },
    {
      "type": "input",
      "s": "The instructor demonstrated each step slowly. She moved ______ for everyone to copy her. (slowly)",
      "a": [
        "slowly enough"
      ],
      "explanation": "enough 放在副詞 slowly 後，表示慢得足以跟上。",
      "scope": "enough-adverb"
    },
    {
      "type": "input",
      "s": "The climbing wall has easy handholds. It is ______ for beginners to use safely. (safe)",
      "a": [
        "safe enough"
      ],
      "explanation": "形容詞 + enough + for + 人 + to。",
      "scope": "enough-for-to"
    },
    {
      "type": "input",
      "s": "The child can now reach both pedals without stretching. Her legs are ______ to ride this bicycle. (long)",
      "a": [
        "long enough"
      ],
      "explanation": "enough 放在形容詞 long 後。",
      "scope": "enough-adjective-to"
    },
    {
      "type": "input",
      "s": "The blanket covers both of us comfortably. It is ______ for two people. (wide)",
      "a": [
        "wide enough"
      ],
      "explanation": "形容詞 + enough + for，表示足夠寬。",
      "scope": "enough-for"
    },
    {
      "type": "input",
      "s": "We need eight clean jars for the jam, and we have ten. We have ______ to store it all. (jars)",
      "a": [
        "enough jars"
      ],
      "explanation": "enough 放在可數名詞 jars 前。",
      "scope": "enough-count-noun"
    },
    {
      "type": "input",
      "s": "The printer needs five sheets for this form, and there are twenty in the tray. There is ______ to print it. (paper)",
      "a": [
        "enough paper"
      ],
      "explanation": "enough 放在不可數名詞 paper 前。",
      "scope": "enough-mass-noun"
    },
    {
      "type": "input",
      "s": "The battery lasts six hours, and our journey takes two. It has ______ for the whole journey. (power)",
      "a": [
        "enough power"
      ],
      "explanation": "enough + 名詞 + for + 範圍或用途。",
      "scope": "enough-noun-for"
    },
    {
      "type": "input",
      "s": "The hall has forty seats, and only thirty people are coming. There are ______ for everyone. (seats)",
      "a": [
        "enough seats"
      ],
      "explanation": "enough 在 seats 前；for everyone 表示供每個人使用。",
      "scope": "enough-count-noun-for"
    },
    {
      "type": "input",
      "s": "The camera can capture clear pictures in this light. The room is ______ to take photographs without a flash. (bright)",
      "a": [
        "bright enough"
      ],
      "explanation": "bright enough to：亮度足夠拍照。",
      "scope": "enough-adjective-to"
    },
    {
      "type": "input",
      "s": "The rescue boat reached the harbour before the storm. It travelled ______ to beat the bad weather. (quickly)",
      "a": [
        "quickly enough"
      ],
      "explanation": "enough 修飾副詞時放在副詞後。",
      "scope": "enough-adverb"
    },
    {
      "type": "input",
      "s": "We only have ten minutes, but the walk takes half an hour. We do not have ______ to get there on foot. (time)",
      "a": [
        "enough time"
      ],
      "explanation": "否定已在 do not；空格填 enough time，不再加 not。",
      "scope": "not-enough-noun"
    },
    {
      "type": "input",
      "s": "The ladder stops a metre below the window. It is not ______ to reach it. (tall)",
      "a": [
        "tall enough"
      ],
      "explanation": "not + 形容詞 + enough + to 表示程度不足。",
      "scope": "not-adjective-enough"
    },
    {
      "type": "input",
      "s": "Only the first row heard the speaker. He did not speak ______ for the people at the back to hear him. (loudly)",
      "a": [
        "loudly enough"
      ],
      "explanation": "not + 副詞 + enough；loudly 放在 enough 前。",
      "scope": "not-adverb-enough"
    },
    {
      "type": "input",
      "s": "The ticket costs twenty dollars, but I only have twelve. I have not got ______ to buy it. (money)",
      "a": [
        "enough money"
      ],
      "explanation": "have not got 已是否定，填 enough money。",
      "scope": "not-enough-mass-noun"
    },
    {
      "type": "input",
      "s": "We need six players for a team, but only four have arrived. There are not ______ to start the match. (players)",
      "a": [
        "enough players"
      ],
      "explanation": "not enough + 複數名詞，表示人數不足。",
      "scope": "not-enough-count-noun"
    },
    {
      "type": "input",
      "s": "The handle still feels sticky after painting. It is not ______ for us to touch yet. (dry)",
      "a": [
        "dry enough"
      ],
      "explanation": "not dry enough for us to touch：還不夠乾。",
      "scope": "not-enough-for-to"
    },
    {
      "type": "input",
      "s": "There is only one small sandwich for three hungry hikers. There is not ______ for all of them. (food)",
      "a": [
        "enough food"
      ],
      "explanation": "not enough + 不可數名詞 + for。",
      "scope": "not-enough-noun-for"
    },
    {
      "type": "input",
      "s": "The pianist missed the required mark for the advanced class. She did not play ______ to qualify. (well)",
      "a": [
        "well enough"
      ],
      "explanation": "enough 放在不規則副詞 well 後。",
      "scope": "not-adverb-enough"
    },
    {
      "type": "input",
      "s": "The path is clear and level, so it is ______ for a wheelchair. (smooth)",
      "a": [
        "smooth enough"
      ],
      "explanation": "smooth enough for + 物，表示路面足夠平順。",
      "scope": "enough-object-for"
    },
    {
      "type": "input",
      "s": "The zip will not close because I have packed ______ clothes into this suitcase. (many)",
      "a": [
        "too many"
      ],
      "explanation": "clothes 是複數名詞，數量過多用 too many。",
      "scope": "too-many"
    },
    {
      "type": "input",
      "s": "The plant roots are rotting because the pot contains ______ water. (much)",
      "a": [
        "too much"
      ],
      "explanation": "water 不可數，過量用 too much。",
      "scope": "too-much"
    },
    {
      "type": "input",
      "s": "The instructions use short words and clear pictures. They are ______ for a child to follow alone. (simple)",
      "a": [
        "simple enough"
      ],
      "explanation": "simple enough for a child to follow：簡單到孩子能自行照做。",
      "scope": "enough-for-to"
    }
  ],
  combine: [
    {
      "type": "sentence",
      "sentences": [
        "The toddler is very short.",
        "She cannot see over the garden wall."
      ],
      "keyword": "too",
      "a": [
        [
          "The toddler is too short to see over the garden wall."
        ]
      ],
      "scope": "too-adjective-to",
      "explanation": "too 放在形容詞／副詞前，表示程度過高而無法完成；對象不同時加入 for + 對象，to 後用原形動詞。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The parcel is very bulky.",
        "I cannot put it in my school bag."
      ],
      "keyword": "too",
      "a": [
        [
          "The parcel is too bulky for me to put in my school bag."
        ]
      ],
      "scope": "too-for-to",
      "explanation": "too 放在形容詞／副詞前，表示程度過高而無法完成；對象不同時加入 for + 對象，to 後用原形動詞。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The ground is very muddy.",
        "We cannot pitch our tent on it."
      ],
      "keyword": "too",
      "a": [
        [
          "The ground is too muddy for us to pitch our tent on."
        ]
      ],
      "scope": "too-preposition",
      "explanation": "too 放在形容詞／副詞前，表示程度過高而無法完成；對象不同時加入 for + 對象，to 後用原形動詞。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The drummer played very loudly.",
        "The singer could not hear the piano."
      ],
      "keyword": "too",
      "a": [
        [
          "The drummer played too loudly for the singer to hear the piano."
        ]
      ],
      "scope": "too-adverb-for-to",
      "explanation": "too 放在形容詞／副詞前，表示程度過高而無法完成；對象不同時加入 for + 對象，to 後用原形動詞。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The cyclist was moving very fast.",
        "He could not stop before the puddle."
      ],
      "keyword": "too",
      "a": [
        [
          "The cyclist was moving too fast to stop before the puddle."
        ]
      ],
      "scope": "too-adverb-to",
      "explanation": "too 放在形容詞／副詞前，表示程度過高而無法完成；對象不同時加入 for + 對象，to 後用原形動詞。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The kitten is very weak.",
        "It cannot climb out of the box."
      ],
      "keyword": "too",
      "a": [
        [
          "The kitten is too weak to climb out of the box."
        ]
      ],
      "scope": "too-adjective-to",
      "explanation": "too 放在形容詞／副詞前，表示程度過高而無法完成；對象不同時加入 for + 對象，to 後用原形動詞。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The water in the pool is very cold.",
        "The children cannot swim in it."
      ],
      "keyword": "too",
      "a": [
        [
          "The water in the pool is too cold for the children to swim in."
        ]
      ],
      "scope": "too-preposition",
      "explanation": "too 放在形容詞／副詞前，表示程度過高而無法完成；對象不同時加入 for + 對象，to 後用原形動詞。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The opening is very small.",
        "The delivery robot cannot pass through it."
      ],
      "keyword": "too",
      "a": [
        [
          "The opening is too small for the delivery robot to pass through."
        ]
      ],
      "scope": "too-object-for-to",
      "explanation": "too 放在形容詞／副詞前，表示程度過高而無法完成；對象不同時加入 for + 對象，to 後用原形動詞。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The instructions were read very quickly.",
        "We could not write them down."
      ],
      "keyword": "too",
      "a": [
        [
          "The instructions were read too quickly for us to write down."
        ]
      ],
      "scope": "too-passive-adverb",
      "explanation": "too 放在形容詞／副詞前，表示程度過高而無法完成；對象不同時加入 for + 對象，to 後用原形動詞。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The doorbell rang very softly.",
        "My grandfather could not hear it."
      ],
      "keyword": "too",
      "a": [
        [
          "The doorbell rang too softly for my grandfather to hear."
        ]
      ],
      "scope": "too-adverb-for-to",
      "explanation": "too 放在形容詞／副詞前，表示程度過高而無法完成；對象不同時加入 for + 對象，to 後用原形動詞。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The curry is very spicy.",
        "My little brother cannot eat it."
      ],
      "keyword": "too",
      "a": [
        [
          "The curry is too spicy for my little brother to eat."
        ]
      ],
      "scope": "too-for-to",
      "explanation": "too 放在形容詞／副詞前，表示程度過高而無法完成；對象不同時加入 for + 對象，to 後用原形動詞。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The suitcase is very wide.",
        "It cannot fit in the overhead locker."
      ],
      "keyword": "too",
      "a": [
        [
          "The suitcase is too wide to fit in the overhead locker."
        ]
      ],
      "scope": "too-adjective-to",
      "explanation": "too 放在形容詞／副詞前，表示程度過高而無法完成；對象不同時加入 for + 對象，to 後用原形動詞。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The lecture ended very late.",
        "We could not catch the last ferry."
      ],
      "keyword": "too",
      "a": [
        [
          "The lecture ended too late for us to catch the last ferry."
        ]
      ],
      "scope": "too-adverb-for-to",
      "explanation": "too 放在形容詞／副詞前，表示程度過高而無法完成；對象不同時加入 for + 對象，to 後用原形動詞。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The screen is very dim.",
        "The class cannot read the labels on it."
      ],
      "keyword": "too",
      "a": [
        [
          "The screen is too dim for the class to read the labels on."
        ]
      ],
      "scope": "too-preposition",
      "explanation": "too 放在形容詞／副詞前，表示程度過高而無法完成；對象不同時加入 for + 對象，to 後用原形動詞。"
    },
    {
      "type": "sentence",
      "sentences": [
        "There are a great many parcels.",
        "The courier cannot deliver them all today."
      ],
      "keyword": "too",
      "a": [
        [
          "There are too many parcels for the courier to deliver today.",
          "There are too many parcels for the courier to deliver all today."
        ]
      ],
      "scope": "too-many",
      "explanation": "too 放在形容詞／副詞前，表示程度過高而無法完成；對象不同時加入 for + 對象，to 後用原形動詞。"
    },
    {
      "type": "sentence",
      "sentences": [
        "There is a great deal of smoke in the room.",
        "We cannot see the exit clearly."
      ],
      "keyword": "too",
      "a": [
        [
          "There is too much smoke in the room for us to see the exit clearly."
        ]
      ],
      "scope": "too-much",
      "explanation": "too 放在形容詞／副詞前，表示程度過高而無法完成；對象不同時加入 for + 對象，to 後用原形動詞。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The bench is very narrow.",
        "It is unsuitable for three adults."
      ],
      "keyword": "too",
      "a": [
        [
          "The bench is too narrow for three adults."
        ]
      ],
      "scope": "too-for",
      "explanation": "too 放在形容詞／副詞前，表示程度過高而無法完成；對象不同時加入 for + 對象，to 後用原形動詞。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The rucksack is very heavy.",
        "It is unsuitable for a small child."
      ],
      "keyword": "too",
      "a": [
        [
          "The rucksack is too heavy for a small child."
        ]
      ],
      "scope": "too-for",
      "explanation": "too 放在形容詞／副詞前，表示程度過高而無法完成；對象不同時加入 for + 對象，to 後用原形動詞。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The new volunteer is sufficiently confident.",
        "She can lead the warm-up activity."
      ],
      "keyword": "enough",
      "a": [
        [
          "The new volunteer is confident enough to lead the warm-up activity."
        ]
      ],
      "scope": "enough-adjective-to",
      "explanation": "enough 放在形容詞／副詞後、名詞前；保留原句的肯定或否定，以及必要的 for + 對象。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The soup is sufficiently cool.",
        "The children can taste it now."
      ],
      "keyword": "enough",
      "a": [
        [
          "The soup is cool enough for the children to taste now."
        ]
      ],
      "scope": "enough-for-to",
      "explanation": "enough 放在形容詞／副詞後、名詞前；保留原句的肯定或否定，以及必要的 for + 對象。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The window opens sufficiently wide.",
        "The cat can climb through it."
      ],
      "keyword": "enough",
      "a": [
        [
          "The window opens wide enough for the cat to climb through."
        ]
      ],
      "scope": "enough-adverb-for-to",
      "explanation": "enough 放在形容詞／副詞後、名詞前；保留原句的肯定或否定，以及必要的 for + 對象。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The announcer spoke sufficiently clearly.",
        "Everyone could understand the change of platform."
      ],
      "keyword": "enough",
      "a": [
        [
          "The announcer spoke clearly enough for everyone to understand the change of platform."
        ]
      ],
      "scope": "enough-adverb-for-to",
      "explanation": "enough 放在形容詞／副詞後、名詞前；保留原句的肯定或否定，以及必要的 for + 對象。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The athlete ran sufficiently quickly.",
        "She qualified for the final."
      ],
      "keyword": "enough",
      "a": [
        [
          "The athlete ran quickly enough to qualify for the final."
        ]
      ],
      "scope": "enough-adverb-to",
      "explanation": "enough 放在形容詞／副詞後、名詞前；保留原句的肯定或否定，以及必要的 for + 對象。"
    },
    {
      "type": "sentence",
      "sentences": [
        "We have a sufficient number of blankets.",
        "We can give one to every camper."
      ],
      "keyword": "enough",
      "a": [
        [
          "We have enough blankets to give one to every camper."
        ]
      ],
      "scope": "enough-count-noun",
      "explanation": "enough 放在形容詞／副詞後、名詞前；保留原句的肯定或否定，以及必要的 for + 對象。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The team has a sufficient amount of wood.",
        "It can build a small shelter."
      ],
      "keyword": "enough",
      "a": [
        [
          "The team has enough wood to build a small shelter."
        ]
      ],
      "scope": "enough-mass-noun",
      "explanation": "enough 放在形容詞／副詞後、名詞前；保留原句的肯定或否定，以及必要的 for + 對象。"
    },
    {
      "type": "sentence",
      "sentences": [
        "There is a sufficient amount of space in the garage.",
        "We can store the bicycles there."
      ],
      "keyword": "enough",
      "a": [
        [
          "There is enough space in the garage for us to store the bicycles.",
          "There is enough space in the garage for us to store the bicycles there."
        ]
      ],
      "scope": "enough-noun-for-to",
      "explanation": "enough 放在形容詞／副詞後、名詞前；保留原句的肯定或否定，以及必要的 for + 對象。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The tunnel is sufficiently high.",
        "The maintenance truck can drive through it."
      ],
      "keyword": "enough",
      "a": [
        [
          "The tunnel is high enough for the maintenance truck to drive through."
        ]
      ],
      "scope": "enough-object-for-to",
      "explanation": "enough 放在形容詞／副詞後、名詞前；保留原句的肯定或否定，以及必要的 for + 對象。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The picnic table is sufficiently long.",
        "It can seat our whole family."
      ],
      "keyword": "enough",
      "a": [
        [
          "The picnic table is long enough to seat our whole family."
        ]
      ],
      "scope": "enough-adjective-to",
      "explanation": "enough 放在形容詞／副詞後、名詞前；保留原句的肯定或否定，以及必要的 for + 對象。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The water is not sufficiently clean.",
        "We cannot drink it safely."
      ],
      "keyword": "enough",
      "a": [
        [
          "The water is not clean enough for us to drink safely."
        ]
      ],
      "scope": "not-enough-for-to",
      "explanation": "enough 放在形容詞／副詞後、名詞前；保留原句的肯定或否定，以及必要的 for + 對象。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The rope is not sufficiently long.",
        "It cannot reach the bottom of the well."
      ],
      "keyword": "enough",
      "a": [
        [
          "The rope is not long enough to reach the bottom of the well."
        ]
      ],
      "scope": "not-enough-adjective-to",
      "explanation": "enough 放在形容詞／副詞後、名詞前；保留原句的肯定或否定，以及必要的 for + 對象。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The actor did not speak sufficiently loudly.",
        "The audience could not hear him."
      ],
      "keyword": "enough",
      "a": [
        [
          "The actor did not speak loudly enough for the audience to hear him."
        ]
      ],
      "scope": "not-enough-adverb-for-to",
      "explanation": "enough 放在形容詞／副詞後、名詞前；保留原句的肯定或否定，以及必要的 for + 對象。"
    },
    {
      "type": "sentence",
      "sentences": [
        "We do not have a sufficient number of paintbrushes.",
        "We cannot give one to every child."
      ],
      "keyword": "enough",
      "a": [
        [
          "We do not have enough paintbrushes to give one to every child."
        ]
      ],
      "scope": "not-enough-count-noun",
      "explanation": "enough 放在形容詞／副詞後、名詞前；保留原句的肯定或否定，以及必要的 for + 對象。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The campers do not have a sufficient amount of fuel.",
        "They cannot cook another meal."
      ],
      "keyword": "enough",
      "a": [
        [
          "The campers do not have enough fuel to cook another meal."
        ]
      ],
      "scope": "not-enough-mass-noun",
      "explanation": "enough 放在形容詞／副詞後、名詞前；保留原句的肯定或否定，以及必要的 for + 對象。"
    },
    {
      "type": "sentence",
      "sentences": [
        "There is not a sufficient amount of room on the shelf.",
        "We cannot put the large globe there."
      ],
      "keyword": "enough",
      "a": [
        [
          "There is not enough room on the shelf for us to put the large globe there.",
          "There is not enough room on the shelf for us to put the large globe."
        ]
      ],
      "scope": "not-enough-noun-for-to",
      "explanation": "enough 放在形容詞／副詞後、名詞前；保留原句的肯定或否定，以及必要的 for + 對象。"
    },
    {
      "type": "sentence",
      "sentences": [
        "The doorway is sufficiently wide.",
        "It is suitable for a wheelchair."
      ],
      "keyword": "enough",
      "a": [
        [
          "The doorway is wide enough for a wheelchair."
        ]
      ],
      "scope": "enough-for",
      "explanation": "enough 放在形容詞／副詞後、名詞前；保留原句的肯定或否定，以及必要的 for + 對象。"
    },
    {
      "type": "sentence",
      "sentences": [
        "There is a sufficient amount of rice.",
        "It will feed all six guests."
      ],
      "keyword": "enough",
      "a": [
        [
          "There is enough rice to feed all six guests."
        ]
      ],
      "scope": "enough-mass-noun",
      "explanation": "enough 放在形容詞／副詞後、名詞前；保留原句的肯定或否定，以及必要的 for + 對象。"
    }
  ],
  present: [
    fill('The bakery opens at seven every morning. Its owner ______ (unlock) the front door before the first customers arrive.', ['unlocks'], '描述每日固定的工作。'),
    fill('Please wait outside the kitchen. The chef ______ (prepare) a special meal right now.', ['is preparing'], '描述說話當下正在進行的動作。'),
    fill('My sister usually ______ (cycle) to school, but her bicycle is being repaired today.', ['cycles'], 'usually 表示平常習慣。'),
    fill('Keep your voice down. The children ______ (record) their science presentation at the moment.', ['are recording'], 'at the moment 表示當下正在進行。'),
    fill('According to the timetable, the first ferry ______ (leave) at 6:30 tomorrow morning.', ['leaves'], '交通工具的固定時刻表。'),
    fill('We have booked the tickets and reserved a table. We ______ (meet) our cousins at the theatre tomorrow evening.', ['are meeting'], '已確定的私人安排。'),
    fill('Water ______ (expand) when it freezes, so a full glass bottle may crack in the freezer.', ['expands'], '描述一般事實。'),
    fill('I cannot use my desk this week. The decorators ______ (paint) my room until Friday.', ['are painting'], '本週的暫時性工作。'),
    fill('This key ______ (belong) to the science cupboard, not the music room.', ['belongs'], 'belong 表示所屬關係。'),
    fill('The customer ______ (weigh) the tomatoes on the scales right now to check the price.', ['is weighing'], 'weigh 在此為秤重量的動作。'),
    fill('The label says this bag of rice ______ (weigh) five kilograms.', ['weighs'], 'weigh 在此表示物品的重量。'),
    fill('I ______ (think) your solution is correct; the measurements match perfectly.', ['think'], 'think 表示認為、相信。'),
    fill('Do not interrupt me. I ______ (think) about how to solve the last part of the puzzle.', ['am thinking'], 'think about 表示正在思考。'),
    fill('The soup ______ (taste) salty, so please do not add any more salt.', ['tastes'], 'taste 描述食物的味道。'),
    fill('The chef ______ (taste) the soup right now to decide whether it needs more pepper.', ['is tasting'], 'taste 在此表示正在試味道。'),
    fill('These flowers ______ (smell) wonderful even from across the room.', ['smell'], 'smell 描述花的氣味。'),
    fill('The customer ______ (smell) each candle at the moment before choosing one to buy.', ['is smelling'], 'smell 在此表示主動聞香味。'),
    fill('The museum ______ (have) a large collection of old maps.', ['has'], 'have 表示擁有。'),
    fill('The staff cannot answer the phone now. They ______ (have) a meeting in the conference room.', ['are having'], 'have a meeting 表示進行活動。'),
    fill('We ______ (have) lunch right now. Can I call you when we have finished?', ['are having'], 'have lunch 表示正在用餐。'),
    fill('The new uniform ______ (fit) me perfectly; I do not need another size.', ['fits'], 'fit 表示尺寸合適。'),
    fill('The mechanic ______ (fit) a new tyre to the bicycle right now.', ['is fitting'], 'fit 表示正在安裝。'),
    fill('Your explanation ______ (sound) reasonable, but we should check the figures.', ['sounds'], 'sound 描述聽起來的感覺。'),
    fill('I ______ (understand) why the match was cancelled; the field is completely flooded.', ['understand'], 'understand 表示理解。'),
    fill('The children ______ (build) a model bridge at the moment. Please do not move the materials.', ['are building'], '正在建造模型。'),
    fill('My father ______ (work) at the post office. He has had the same job for twenty years.', ['works'], '描述長期職業。'),
    fill('For this month only, my father ______ (work) at a different branch while its manager is away.', ['is working'], 'for this month only 強調暫時安排。'),
    fill('These batteries ______ (cost) more than the ordinary ones because they last longer.', ['cost'], 'cost 表示價格。'),
    fill('The sign says the museum ______ (close) at five every day.', ['closes'], '固定開放時間。'),
    fill('The actors have their costumes on. They ______ (rehearse) the final scene now.', ['are rehearsing'], '正在排演。'),
    fill('Please leave me a seat. I ______ (come) to your concert tonight; I have already bought my ticket.', ['am coming'], '票已買好，屬已安排的活動。'),
    fill('My grandmother ______ (prefer) tea to coffee, so I always make her tea.', ['prefers'], 'prefer 表示偏好。'),
    fill('A normal adult heart ______ (beat) many thousands of times a day.', ['beats'], '描述一般生理事實。'),
    fill('Why ______ you ______ (wear) a raincoat indoors right now?', ['are', 'wearing'], '詢問當下穿著的動作；問句中 are 在主詞前。'),
    fill('How often ______ your sister ______ (visit) the public library during the school year?', ['does', 'visit'], 'how often 詢問習慣頻率；does 後用原形。'),
    fill('I ______ (not / know) the password. Please ask the receptionist.', ["do not know"], 'know 表示知道；否定使用 do not。'),
    fill('The volunteers ______ (not / clean) the hall right now; they are sorting the donated books instead.', ['are not cleaning'], 'right now 加上另一個正在進行的活動。'),
    fill('The store ______ (not / sell) fresh bread. It only sells household goods.', ['does not sell'], '描述商店平常提供的商品。'),
    fill('We ______ (not / use) the main entrance today because builders are repairing it.', ['are not using'], 'today 與維修背景表明暫時安排。'),
    fill('This bottle ______ (contain) a litre of drinking water.', ['contains'], 'contain 表示內含的東西。'),
    fill('The book ______ (include) a map at the back, so we do not need to buy one separately.', ['includes'], 'include 描述內容。'),
    fill('My uncle ______ (own) the small shop on the corner.', ['owns'], 'own 表示擁有。'),
    fill('I ______ (agree) with the safety officer; we must keep this door clear.', ['agree'], 'agree 表示同意。'),
    fill('Look at the wet footprints! The dog ______ (run) across the clean kitchen floor right now.', ['is running'], 'Look 與 right now 指向正在發生的動作。'),
    fill('You normally treat people kindly, but you ______ (be) very rude to the waiter right now. Please apologise.', ['are being'], 'be 在此表示當下的行為。'),
    fill('Our neighbour ______ (be) very generous. She donates to the food bank every month.', ['is'], '描述長期個性。'),
    fill('The fabric ______ (feel) rough against my skin; I would prefer a softer shirt.', ['feels'], 'feel 在此描述材質觸感。'),
    fill('The doctor ______ (feel) the patient’s wrist right now to check the pulse.', ['is feeling'], 'feel 在此表示主動觸摸檢查。'),
    fill('The house ______ (look) empty. There are no lights on and no furniture inside.', ['looks'], 'look 表示看起來的狀態。'),
    fill('The photographer ______ (look) at the pictures on her camera right now to choose the best one.', ['is looking'], 'look at 表示主動看照片。'),
    fill('I ______ (see) why you need a bigger desk; there is no space for your books.', ['see'], 'see 表示明白、理解。'),
    fill('My sister has a confirmed appointment. She ______ (see) the dentist at four this afternoon.', ['is seeing'], 'see 在此表示已安排的會面。'),
    fill('The machine ______ (need) a new filter; the old one is completely blocked.', ['needs'], 'need 表示需要。'),
    fill('I ______ (not / believe) that this message came from our bank; the address is wrong.', ['do not believe'], 'believe 表示相信。'),
    fill('At present, a team of engineers ______ (test) a new alarm system in the building.', [['is testing', 'are testing']], '描述當下測試；team 可視為單數整體，英式英語也可強調團隊成員而用複數。'),
    fill('The nurse ______ (usually / check) the medicine labels before giving them to patients.', ['usually checks'], '頻率副詞在一般動詞前；第三人稱單數加 s。'),
    fill('Our goalkeeper ______ (often / be) the first player to arrive for training.', ['is often'], '頻率副詞放在 be 後。'),
    fill('The library rules say visitors ______ (must / always / keep) their phones silent.', ['must always keep'], '頻率副詞放在情態動詞 must 後、主要動詞前。'),
    fill('We ______ (not / usually / buy) bottled water because we carry reusable bottles.', ['do not usually buy'], 'usually 放在否定助動詞與主要動詞之間。'),
    fill('The caretaker ______ (never / leave) the main gate unlocked overnight.', ['never leaves'], 'never 已帶否定意思，不再加 not。'),
    fill('The children ______ (seldom / watch) television on weekdays; they prefer to read.', ['seldom watch'], 'seldom 放在一般動詞前。'),
    fill('Why ______ you ______ (always / interrupt) me? It is annoying, and I cannot finish a sentence!', ['are', 'always interrupting'], 'always 配合正在反覆發生且令人不滿的行為。'),
    fill('The tickets are booked. Our parents ______ (fly) to Seoul next Tuesday.', ['are flying'], '已安排好的私人行程。'),
    fill('The programme lists the first talk at ten. The conference ______ (begin) at ten tomorrow morning.', ['begins'], '正式節目表的時間。')
  ]
};

for (const [unit, questions] of Object.entries(MIDTERM_BANK)) {
  questions.forEach((question, index) => { question.id = `midterm-${unit}-${index + 1}`; });
}
