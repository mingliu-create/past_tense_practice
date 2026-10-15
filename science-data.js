// Original, age-appropriate revision aligned to the published Primary 6 Unit 1–3 outline.
// Definitions are paraphrased; the source textbook and workbook are not reproduced.
const term = (name, chinese, definition, meaning, aliases = []) => ({ name, chinese, definition, meaning, aliases });
export const SCIENCE_CHAPTERS = {
  humans: { title: '1 · Reproduction in Humans', chinese: '人類的生殖', terms: [
    term('reproduction', '生殖', 'The process by which living things produce new individuals of their own kind.', '生物產生同類新個體的過程，讓物種得以延續。'),
    term('sexual reproduction', '有性生殖', 'Reproduction involving the joining of a male reproductive cell and a female reproductive cell.', '雄性與雌性生殖細胞結合，產生新個體。重點是生殖細胞結合。'),
    term('sperm', '精子', 'The male reproductive cell that can join with an egg cell during fertilisation.', '男性生殖細胞，可在受精時與卵細胞結合。', ['sperm cell']),
    term('egg cell', '卵細胞', 'The female reproductive cell that can join with a sperm cell.', '女性生殖細胞；不是整個卵巢。', ['egg', 'ovum']),
    term('testes', '睪丸', 'The male reproductive organs that produce sperm.', '產生精子的男性生殖器官；單數是 testis。', ['testis']),
    term('ovary', '卵巢（人體）', 'A female reproductive organ in which egg cells develop and from which eggs are released.', '卵細胞發育及排出的器官。卵巢不是胎兒生長的地方。', ['ovaries']),
    term('sperm duct', '輸精管', 'A tube that carries sperm away from a testis towards the urethra.', '把精子由睪丸方向運送至尿道的管道；不負責製造精子。', ['vas deferens', 'sperm ducts']),
    term('penis', '陰莖', 'The male external reproductive organ through which semen can leave the body.', '男性外部生殖器官；精液可經此排出。'),
    term('vagina', '陰道', 'The muscular passage connecting the cervix to the outside of the body; it also forms part of the birth canal.', '連接子宮頸與體外的肌肉通道，也是產道的一部分。'),
    term('uterus', '子宮', 'The organ in which an embryo implants and a developing baby grows.', '胚胎著床、胎兒成長的器官；通常不是受精發生的地方。', ['womb']),
    term('oviduct', '輸卵管', 'A tube connecting the region of an ovary to the uterus, where human fertilisation usually occurs.', '運送卵細胞至子宮的管道；人體的受精通常在此發生。', ['fallopian tube', 'fallopian tubes', 'oviducts']),
    term('fertilisation', '受精', 'The fusion of the nuclei of a male reproductive cell and a female reproductive cell.', '雄性與雌性生殖細胞的細胞核融合；與排卵、著床不同。', ['fertilization']),
    term('zygote', '受精卵', 'The first cell formed when a sperm cell fertilises an egg cell.', '精卵受精後形成的第一個細胞，之後會分裂發育。', ['fertilised egg', 'fertilized egg']),
    term('embryo', '胚胎', 'An early developing organism formed as a zygote divides into more cells.', '受精卵分裂後形成的早期發育個體。'),
    term('fetus', '胎兒', 'A developing human from about nine weeks after fertilisation until birth.', '受精後約第九週起至出生前的發育階段；注意與從末次月經起算的孕週不同。', ['foetus']),
    term('placenta', '胎盤', 'An organ that enables exchange of oxygen, nutrients and wastes between a pregnant mother and her developing baby.', '讓母體與胎兒交換氧氣、養分和廢物；兩者的血液通常不直接混合。'),
    term('umbilical cord', '臍帶', 'The structure containing blood vessels that connects a developing baby to the placenta.', '內有血管，連接胎兒與胎盤；不是連接胎兒到母親胃部的管道。'),
    term('ovulation', '排卵', 'The release of an egg cell from an ovary.', '卵細胞由卵巢排出的過程；排卵本身不等於受精。'),
    term('menstruation', '月經', 'The shedding of the uterine lining, with blood passing out through the vagina when pregnancy has not occurred.', '未懷孕時，子宮內膜脫落並伴隨血液經陰道排出；不只是把卵排走。', ['period', 'menstrual period']),
    term('menstrual cycle', '月經週期', 'The repeating sequence of changes in the ovaries and uterine lining, counted from the first day of one period to the first day of the next.', '從一次月經首日到下次月經首日的週期；長度因人、因次而異，不一定是28天。'),
    term('puberty', '青春期', 'The stage of development during which the body matures towards reproductive capability.', '身體逐漸具備生殖能力的發育階段，時間和變化速度因人而異。'),
    term('identical twins', '同卵雙胞胎', 'Two offspring that develop when one early embryo separates into two.', '由同一個受精卵形成的早期胚胎分成兩個，遺傳資訊非常相近。'),
    term('fraternal twins', '異卵雙胞胎', 'Two offspring formed when two separate eggs are fertilised by two separate sperm.', '兩個卵細胞分別被兩個精子受精形成，遺傳上的相似程度如一般手足。', ['non-identical twins', 'non identical twins'])
  ], points: [
    ['器官與功能', 'Testes produce sperm; ovaries contain developing eggs. The uterus supports the developing baby.', '睪丸產生精子；卵細胞在卵巢中發育；胎兒在子宮成長。不要把製造、運送和發育的地方混為一談。'],
    ['受精與著床', 'Fertilisation usually occurs in an oviduct. The early embryo then travels to the uterus and implants in its lining.', '受精通常在輸卵管發生，早期胚胎移至子宮並在內膜著床。'],
    ['胎兒如何獲得需要的物質', 'Exchange takes place through the placenta; the umbilical cord links the baby with the placenta.', '養分及氧氣由胎盤交換，再經臍帶血管運送。胎兒的廢物朝反方向運送。'],
    ['月經週期', 'Egg release, uterine-lining changes and menstruation are different events within a cycle.', '排卵、內膜增厚、月經是不同事件。課堂常用28天模型，但實際週期和排卵日並不固定。'],
    ['生殖與物種延續', 'Reproduction produces new individuals; growth increases the size and development of an existing individual.', '生殖產生新個體；成長是原有個體長大。個體不一定要繁殖才能存活，但物種需要繁殖延續。']
  ] },
  plants: { title: '2 · Reproduction in Plants', chinese: '植物的繁殖', terms: [
    term('stamen', '雄蕊', 'The male reproductive part of a flower, made up of an anther and a filament.', '花的雄性生殖構造，由花藥和花絲組成。'),
    term('anther', '花藥', 'The part of a flower that produces pollen grains.', '產生花粉粒的部分；不是花絲。'),
    term('filament', '花絲', 'The stalk that holds up an anther.', '支撐花藥的細長構造。'),
    term('pistil', '雌蕊', 'A female reproductive structure of a flower, including the stigma, style and ovary.', '包含柱頭、花柱和子房的雌性生殖構造；小學課程也常使用 carpel。', ['carpel']),
    term('stigma', '柱頭', 'The part of a flower that receives pollen during pollination.', '授粉時接收花粉的部位；不能與花藥混淆。'),
    term('style', '花柱', 'The structure between the stigma and the ovary through which a pollen tube can grow.', '連接柱頭與子房，花粉管可沿此生長。'),
    term('ovary', '子房（花）', 'The part of a flower that contains ovules and usually develops into a fruit after fertilisation.', '內含胚珠；受精後通常發育成果實。同一英文 ovary 在人體指卵巢。', ['flower ovary', 'plant ovary']),
    term('ovule', '胚珠', 'A structure inside a flower’s ovary that contains an egg cell and can develop into a seed after fertilisation.', '位於子房內，含卵細胞；受精後可發育為種子。胚珠不等於卵細胞。'),
    term('pollen grain', '花粉粒', 'A tiny structure produced in an anther that carries or produces the male reproductive cells of a flowering plant.', '由花藥產生，攜帶或產生雄性生殖細胞。花粉粒不等於整個精細胞。', ['pollen', 'pollen grains']),
    term('petal', '花瓣', 'A flower part that often helps attract animal pollinators through its colour or scent.', '有些花以花瓣的顏色或氣味吸引傳粉動物；並非所有花瓣都鮮豔。', ['petals']),
    term('sepal', '萼片', 'A flower part that protects the flower while it is a bud.', '在花蕾階段保護花的構造。', ['sepals']),
    term('pollination', '授粉', 'The transfer of pollen from an anther to a stigma of a flower of the same species.', '花粉由花藥移至同種植物花朵的柱頭；不是精卵融合。'),
    term('self-pollination', '自花授粉', 'Transfer of pollen to a stigma in the same flower or another flower on the same plant.', '花粉移到同一朵花，或同一株植物另一朵花的柱頭。', ['self pollination']),
    term('cross-pollination', '異花授粉', 'Transfer of pollen between flowers on two different plants of the same species.', '花粉在同種但不同株植物的花之間轉移。', ['cross pollination']),
    term('fertilisation', '受精（植物）', 'The fusion of a male reproductive-cell nucleus with an egg-cell nucleus inside an ovule.', '雄性生殖細胞核與胚珠內的卵細胞核融合；在授粉之後發生。', ['fertilization']),
    term('seed', '種子', 'A structure containing a plant embryo, a protective coat and usually stored food.', '含植物胚、保護性的種皮，通常還有儲存的養分。受精後的胚珠可形成種子。', ['seeds']),
    term('fruit', '果實', 'A structure that usually develops from a flower’s ovary and protects its seeds.', '通常由子房發育而成，保護種子，也可幫助散播。'),
    term('seed dispersal', '種子散播', 'The spreading of seeds away from the parent plant and from one another.', '種子遠離母株並彼此分散，減少競爭並到達新地方。'),
    term('germination', '萌發', 'The process in which a seed begins to grow into a young plant under suitable conditions.', '種子在適當條件下開始長成幼苗的過程；不是授粉。'),
    term('seed coat', '種皮', 'The protective outer covering of a seed.', '種子外層的保護構造。'),
    term('seedling', '幼苗', 'A young plant that has developed from a germinating seed.', '由萌發的種子長出的幼小植物。'),
    term('spore', '孢子', 'A reproductive cell that can develop into a new organism under suitable conditions without first joining with another cell.', '可在適當條件下發育的生殖細胞；蕨類與蘚苔會產生孢子，不會開花結果。', ['spores']),
    term('asexual reproduction', '無性生殖', 'Reproduction without the fusion of male and female reproductive cells.', '沒有雄性、雌性生殖細胞融合的生殖方式，通常只涉及一個親代。'),
    term('vegetative reproduction', '營養繁殖', 'A form of asexual reproduction in which a new plant grows from a root, stem or leaf of a parent plant.', '新植物由親代的根、莖或葉等部位長出，例如草莓走莖。', ['vegetative propagation'])
  ], points: [
    ['花的構造', 'Anthers make pollen; stigmas receive it. Ovules are inside the ovary.', '花藥產生花粉，柱頭接收花粉；胚珠在子房內，卵細胞在胚珠內。'],
    ['授粉與受精', 'Pollen transfer is pollination. Fusion of reproductive-cell nuclei is fertilisation.', '先區分搬運花粉和生殖細胞核融合，兩個名詞不是同義字。'],
    ['番茄的生活史', 'Flowering and pollination are followed by fertilisation, fruit and seed development, and seed dispersal.', '授粉後，合適的花粉可進一步完成受精；胚珠形成種子，子房發育成果實。番茄果實裡有多顆種子。'],
    ['散播與競爭', 'Wings and hairs can aid wind dispersal; buoyancy aids water dispersal; hooks and edible fruits can involve animals.', '散播可減少與母株、其他幼苗爭奪光、水、空間和礦物質。各種散播方式要配合果實或種子的特徵判斷。'],
    ['萌發實驗', 'Most seeds need water, oxygen and a suitable temperature to germinate. Light needs vary between species.', '常見萌發實驗的三個條件為水、氧氣與適當溫度。不是所有種子都必須照光；土壤也不是萌發的必備條件。幼苗之後需要光來製造養分。'],
    ['無花植物', 'Ferns and mosses produce spores. Cone-bearing plants such as pines produce seeds without flowers.', '不能把所有無花植物都說成靠孢子繁殖。蕨類、蘚苔產生孢子；松樹以球果內的種子繁殖。營養繁殖則不涉及生殖細胞融合。']
  ] },
  heredity: { title: '3 · Heredity', chinese: '遺傳', terms: [
    term('heredity', '遺傳', 'The passing of biological characteristics from parents to offspring through reproduction.', '生物特徵經生殖由親代傳給後代的現象；不是看著父母做而學會。', ['inheritance']),
    term('characteristic', '特徵', 'A feature of a living thing that can be described or measured.', '可以描述或測量的生物特徵，例如自然髮色或身高。', ['trait', 'characteristics']),
    term('inherited characteristic', '遺傳特徵', 'A characteristic influenced by genetic information passed from parents to offspring.', '受親代傳下的遺傳資訊影響的特徵，例如血型。許多特徵也受環境影響。', ['inherited trait', 'inherited characteristics']),
    term('non-inherited characteristic', '非遺傳特徵', 'A feature acquired through experience or environmental effects rather than passed on genetically.', '由經驗或環境造成、不是以遺傳資訊傳下的特徵，例如傷疤、學會騎車。', ['acquired characteristic', 'acquired trait', 'non inherited characteristic', 'non-inherited trait']),
    term('genetic information', '遺傳資訊', 'Biological instructions carried in DNA that can be passed from parents to offspring.', '由DNA攜帶、可經生殖傳遞的生物指令；並非所有資訊都能由外觀直接看出。'),
    term('gene', '基因', 'A section of DNA that carries instructions contributing to how an organism develops or functions.', 'DNA上的一段資訊，影響生物的發育或功能。許多特徵由多個基因與環境共同影響。', ['genes']),
    term('DNA', '去氧核糖核酸', 'The molecule that stores genetic information in living things.', '儲存遺傳資訊的分子；可把它想成承載生物指令的材料。', ['deoxyribonucleic acid']),
    term('variation', '變異／個體差異', 'Differences in characteristics among individuals of the same species.', '同一物種個體間的特徵差異；可能與遺傳、環境或兩者都有關。'),
    term('family tree', '家族樹', 'A diagram showing relationships between members of a family across generations.', '表示家族成員、親子及世代關係的圖。讀圖時要根據連線和圖例。', ['pedigree', 'pedigree chart']),
    term('offspring', '後代', 'The young produced by a parent or parents through reproduction.', '由親代經生殖產生的新個體，不是只有人類的小孩。', ['young']),
    term('generation', '世代', 'A level in a family line, such as grandparents, parents or children.', '家族血緣關係中的一個層級，例如祖父母、父母、子女。'),
    term('environment', '環境', 'The surroundings and external conditions that affect a living thing.', '生物周圍的條件，包括光、水、營養與生活經驗等，可能影響特徵的表現。'),
    term('observable characteristic', '可觀察特徵', 'A feature that can be noticed or measured through observation.', '可經觀察或測量得知的特徵，如自然髮色；血型不能只靠看外表判斷。', ['observable trait'])
  ], points: [
    ['遺傳與學習', 'Blood group is inherited; learning to swim is not inherited as a learned skill.', '父母會游泳不代表孩子出生就會；技能需要學習。遺傳的資訊不是父母後天學會的每一件事。'],
    ['相似不等於完全相同', 'Sexual reproduction combines genetic information from both parents; siblings can receive different combinations.', '子女取得父母雙方的遺傳資訊，因此會相似，但通常不完全一樣。兄弟姊妹的資訊組合也可能不同。'],
    ['特徵不只受一個原因影響', 'Height and growth can be influenced by both inherited information and environmental factors such as nutrition.', '身高等特徵並非只由遺傳或只由飲食決定。不要把所有外觀特徵當成簡單的單基因二選一。'],
    ['讀家族樹', 'Identify the key, trace parent–child lines, and compare generations before answering.', '先看圖例，再找伴侶和親子連線，最後確認世代。圖中的左右位置本身不能決定親戚關係。'],
    ['植物也有遺傳', 'Plants can pass on characteristics to their offspring, and growth conditions can also affect appearance.', '植物也會把特徵傳給後代；同種植物長得不同，不一定全是遺傳，也可能受到光、水或養分影響。']
  ] }
};

export const SCIENCE_SOURCES = [
  ['課程大綱與活動形式：Activity Book 6 公開試閱', 'https://learninghouse.ca/wp-content/uploads/2025/05/sc1007-sample.pdf'],
  ['Heredity：Textbook 6 公開試閱', 'https://learninghouse.ca/wp-content/uploads/2025/05/sc1006-sample.pdf'],
  ['Heredity：Teacher’s Guide 6 公開試閱', 'https://learninghouse.ca/wp-content/uploads/2025/05/sc1008-sample.pdf'],
  ['NHS：月經週期、排卵與生殖器官', 'https://www.nhs.uk/conditions/periods/fertility-in-the-menstrual-cycle/'],
  ['NICHD：胎盤與臍帶', 'https://www.nichd.nih.gov/health/topics/factsheets/labor-delivery'],
  ['RHS：種子萌發', 'https://www.rhs.org.uk/propagation/how-to-sow-seeds-indoors'],
  ['NHGRI：遺傳名詞', 'https://www.genome.gov/genetics-glossary'],
  ['MedlinePlus Genetics：遺傳與環境', 'https://medlineplus.gov/genetics/understanding/inheritance/heritability/']
];

const fill = (s, a, explanation, extra = {}) => ({ type: 'input', s, a, explanation, ...extra });
const choice = (s, correct, wrong, explanation, extra = {}) => ({ type: 'choice', s, a: [correct], choices: [correct, ...wrong], explanation, ...extra });
const order = (s, steps, explanation, extra = {}) => ({ type: 'order', s, a: steps, steps, explanation, ...extra });
const explain = (s, model, rubric, explanation, extra = {}) => ({ type: 'explain', s, model, rubric, explanation, ...extra });

// Original schematic diagrams/tables. They are learning models, not textbook artwork.
export const SCIENCE_FIGURES = {
  flower: `<svg viewBox="0 0 640 310" role="img" aria-label="Simplified flower model: A points to an oval at the top of a thin stalk on the left; B to the tip of the central tube; C to the wall of the swollen base; D to a small circle inside that base."><g fill="none" stroke="currentColor" stroke-width="3"><path d="M290 200 Q160 190 190 80 Q230 20 300 130 M350 200 Q480 190 450 80 Q410 20 340 130" opacity=".35"/><path d="M285 150V230Q320 280 355 230V150 M300 150V75 M340 150V75"/><ellipse cx="320" cy="205" rx="35" ry="43"/><path d="M320 162V55 M300 55H340 M230 185V110 M410 185V110"/><ellipse cx="230" cy="100" rx="18" ry="10"/><ellipse cx="410" cy="100" rx="18" ry="10"/><circle cx="320" cy="215" r="9"/><path d="M130 85L208 98 M470 42L345 55 M480 220L360 205 M170 265L307 219"/></g><g fill="currentColor" font-size="25" font-weight="bold"><text x="95" y="85">A</text><text x="480" y="45">B</text><text x="490" y="225">C</text><text x="140" y="275">D</text></g></svg>`,
  family: `<div class="family-chart" role="img" aria-label="Family relationships: Ada and Ben are parents of Cara and Dan. Cara and Eli are parents of Fay and Gus. Dan and Hana are parents of Ian."><p><strong>Ada + Ben</strong></p><p>↓</p><div class="family-branches"><div><p><strong>Cara + Eli</strong></p><p>↓</p><p>Fay · Gus</p></div><div><p><strong>Dan + Hana</strong></p><p>↓</p><p>Ian</p></div></div></div>`,
  germination: `<div class="science-table-wrap"><table><caption>Same bean seeds; observations after 5 days</caption><thead><tr><th>Setup</th><th>Water</th><th>Air / oxygen</th><th>Temperature</th><th>Germinated</th></tr></thead><tbody><tr><td>A</td><td>Moist</td><td>Available</td><td>25°C</td><td>8 / 10</td></tr><tr><td>B</td><td>Dry</td><td>Available</td><td>25°C</td><td>0 / 10</td></tr><tr><td>C</td><td>Moist</td><td>Excluded</td><td>25°C</td><td>0 / 10</td></tr><tr><td>D</td><td>Moist</td><td>Available</td><td>4°C</td><td>0 / 10</td></tr></tbody></table></div>`,
  traits: `<div class="science-table-wrap"><table><caption>Observations of a family</caption><thead><tr><th>Person</th><th>Natural hair</th><th>Learned skill</th><th>Scar</th></tr></thead><tbody><tr><td>Mother</td><td>Curly</td><td>Swimming</td><td>Left knee</td></tr><tr><td>Father</td><td>Straight</td><td>Piano</td><td>None</td></tr><tr><td>Child</td><td>Curly</td><td>Not yet learned</td><td>None</td></tr></tbody></table></div>`
};

export const SCIENCE_BANK = {
  humans: [
    fill('Sperm are produced in the ______, not in the sperm ducts.', [['testes', 'testis']], '睪丸產生精子，輸精管負責運送。'),
    fill('An egg released from an ovary normally travels towards the uterus through a tube called the ______.', [['oviduct', 'fallopian tube']], '卵由卵巢排出後進入輸卵管。'),
    fill('Human fertilisation usually occurs in the ______. The baby later develops in the ______.', [['oviduct', 'fallopian tube'], ['uterus', 'womb']], '受精的位置與胎兒生長的位置不同。'),
    fill('The release of an egg from an ovary is called ______.', ['ovulation'], '排卵不等於受精。'),
    fill('The first cell formed after a sperm fertilises an egg is a ______.', [['zygote', 'fertilised egg', 'fertilized egg']], '受精卵是受精後形成的第一個細胞。'),
    fill('The ______ connects a developing baby to the placenta.', ['umbilical cord'], '臍帶內的血管在胎兒與胎盤之間運送物質。'),
    fill('During ______, the uterine lining is shed and blood leaves through the vagina.', [['menstruation', 'a period', 'the menstrual period']], '月經包含脫落的子宮內膜和血液，不是只有卵細胞。'),
    fill('The male reproductive cell is the ______; the female reproductive cell is the ______.', [['sperm', 'sperm cell'], ['egg', 'egg cell', 'ovum']], '兩種生殖細胞各提供遺傳資訊。'),
    choice('Which structure is the usual place where an embryo implants?', 'Uterine lining', ['Ovary', 'Sperm duct', 'Stomach lining'], '著床在子宮內膜；受精通常在輸卵管。'),
    choice('Which pair correctly matches an organ and its main role in reproduction?', 'Testis — produces sperm', ['Uterus — produces sperm', 'Oviduct — stores food for the baby', 'Ovary — pumps blood through the umbilical cord'], '器官功能要分清：睪丸製造精子，子宮支持胎兒發育。'),
    choice('Why does a species need reproduction?', 'It replaces individuals over generations and allows the species to continue.', ['Every individual must reproduce to remain alive.', 'It changes every adult into a different species.', 'It only makes existing individuals larger.'], '繁殖對物種延續重要；個體能不繁殖而存活。'),
    choice('A diagram shows oxygen moving from the mother towards the fetus. Which route is appropriate?', 'Placenta → umbilical cord → fetus', ['Mother’s stomach → fetus’s stomach', 'Ovary → sperm duct → fetus', 'Fetus → umbilical cord → placenta'], '氧氣經胎盤交換並由臍帶血管運至胎兒。'),
    choice('Which statement correctly compares ovulation and fertilisation?', 'Ovulation releases an egg; fertilisation joins reproductive-cell nuclei.', ['Both mean the shedding of the uterine lining.', 'Ovulation is the joining of sperm and egg.', 'Fertilisation always occurs in an ovary.'], '排卵是卵排出，受精是生殖細胞核融合。'),
    choice('Which is the best description of the menstrual cycle?', 'Its length can vary; 28 days is a teaching model, not a rule for everyone.', ['It always lasts exactly 28 days in every person.', 'It starts when a baby is born.', 'It is another name for fertilisation.'], '週期有個體差異，不能把示意日數當成人人相同的規律。'),
    choice('One early embryo divides into two developing embryos. What can result?', 'Identical twins', ['Fraternal twins from two eggs', 'Two different species', 'A new egg in each sperm duct'], '同卵雙胞胎源自同一受精卵形成的早期胚胎。'),
    choice('Two separate eggs are fertilised by two separate sperm during one pregnancy. What can result?', 'Fraternal twins', ['Identical twins from one embryo', 'Asexual reproduction', 'Two babies with necessarily identical genetic information'], '異卵雙胞胎由兩次精卵結合形成，不保證外觀完全一樣。'),
    choice('A student says, “The baby eats the food in the mother’s stomach through a tube.” Which correction is accurate?', 'Nutrients are absorbed by the mother, exchanged at the placenta and carried to the baby.', ['The baby is connected directly to the mother’s stomach.', 'The ovary digests food for the baby.', 'The uterus makes all nutrients from air.'], '胎兒不與母親的胃直接相連。'),
    choice('Which statement about the placenta is accurate?', 'It permits exchange of substances without normally mixing maternal and fetal blood directly.', ['It is the organ that produces the mother’s eggs.', 'It replaces the baby’s entire body.', 'It makes fertilisation occur inside the stomach.'], '胎盤是物質交換處，母體和胎兒血液通常不直接混合。'),
    order('Put these events in the order followed by an egg that is fertilised and develops into a baby.', ['An egg is released from an ovary.', 'Fertilisation occurs in an oviduct.', 'The early embryo implants in the uterine lining.', 'The developing baby grows in the uterus.', 'The baby is born.'], '這是成功受精並持續發育的例子；不是每顆排出的卵都會受精。'),
    order('Order these stages from the beginning of development.', ['Sperm and egg-cell nuclei fuse.', 'A zygote forms.', 'An early embryo develops through cell division.', 'The fetal stage follows.', 'Birth occurs.'], '受精後先形成受精卵，再經分裂形成胚胎，之後進入胎兒階段。'),
    order('Trace the direction of oxygen delivery in this simplified model.', ['Oxygen enters the mother’s blood through her lungs.', 'Oxygen is exchanged across the placenta.', 'Oxygen travels in fetal blood through the umbilical cord.', 'Oxygen reaches the developing baby’s cells.'], '區分母體吸收、胎盤交換和胎兒血液運送。'),
    explain('Explain why the uterus and the ovary cannot be used as interchangeable labels in a reproductive-system diagram.', 'Egg cells develop in an ovary and can be released from it. An embryo implants in the uterine lining, and the baby develops in the uterus.', ['卵細胞在卵巢中發育／由卵巢排出。', '胚胎著床及胎兒成長的地方是子宮。'], '寫出兩者不同的功能，不能只說都是女性器官。'),
    explain('Why is menstruation not the same as fertilisation?', 'Menstruation is the shedding of the uterine lining. Fertilisation is the fusion of sperm-cell and egg-cell nuclei.', ['月經涉及子宮內膜脫落及血液排出。', '受精涉及精卵細胞核融合。'], '要比較兩個過程，而非只列發生的時間。'),
    explain('A student believes reproduction and growth mean the same thing. Explain the difference using a human example.', 'Growth is an existing child getting larger and developing. Reproduction produces a new individual, such as a baby.', ['成長是原有個體長大、發育。', '生殖是產生新個體。'], '能以嬰兒出生和孩子長大區分即可，不要求逐字相同。'),
    explain('Explain how a fetus receives oxygen without breathing air through its own lungs before birth.', 'Oxygen is exchanged from the mother’s blood across the placenta. It is then carried in fetal blood through the umbilical cord to the fetus.', ['指出胎盤是氧氣交換處。', '指出臍帶血管把氧氣運到胎兒。'], '不要說胎兒直接呼吸母親肚子裡的空氣。')
  ],
  plants: [
    fill('Pollen grains are produced by the ______ and are received by the ______.', ['anther', 'stigma'], '花藥產生，柱頭接收。'),
    fill('The ovary of a flower contains ______, each of which can contain an egg cell.', [['ovules', 'an ovule']], '胚珠在子房內；胚珠裡有卵細胞。'),
    fill('After fertilisation in a tomato flower, an ovule can become a ______ and the ovary can become a ______.', ['seed', 'fruit'], '胚珠→種子；子房→果實。'),
    fill('The spreading of seeds away from a parent plant is called ______.', ['seed dispersal'], '散播與萌發是不同過程。'),
    fill('A young plant emerging from a seed is a ______.', ['seedling'], '幼苗是種子萌發後形成的小植物。'),
    fill('The stalk supporting an anther is the ______.', ['filament'], '花絲支撐花藥；不把花絲當成產生花粉的部位。'),
    fill('The three general conditions commonly tested for seed germination are water, ______ and a suitable ______.', [['oxygen', 'air'], 'temperature'], '空氣中的氧氣供呼吸使用；適當溫度不是越熱越好。'),
    fill('Ferns produce ______ rather than flowers and fruits.', ['spores'], '蕨類產生孢子；不能把這套說法套用到所有無花植物。'),
    choice('Which event is pollination?', 'Pollen moving from an anther to a stigma', ['An egg nucleus fusing with a male-cell nucleus', 'A seed starting to grow', 'A ripe fruit splitting open'], '授粉是花粉轉移，受精是細胞核融合。'),
    choice('Pollen moves between flowers on two separate tomato plants. What is this called?', 'Cross-pollination', ['Self-pollination', 'Germination', 'Seed dispersal'], '不同株、同種植物花之間的授粉是異花授粉。'),
    choice('A bee carries pollen to another flower on the SAME plant. Which term applies?', 'Self-pollination', ['Cross-pollination between plants', 'Seed germination', 'Vegetative reproduction'], '同株不同花仍屬自花授粉。'),
    choice('A seed has a light body and a wing-like structure. Which dispersal method does this feature most strongly support?', 'Wind', ['Underground roots', 'Fertilisation', 'Being produced by an anther'], '翼狀構造增加被風帶走的機會。'),
    choice('A fruit floats and has a water-resistant outer covering. Which dispersal method is supported?', 'Water', ['Pollination by bees', 'Movement through a pollen tube', 'Growth inside a human uterus'], '漂浮和防水構造有助水力散播。'),
    choice('A seed has tiny hooks that catch on an animal’s fur. How is it dispersed?', 'It is carried on the outside of the animal.', ['It becomes pollen inside the animal.', 'It flies by its own muscles.', 'It must be eaten and digested completely.'], '鉤刺可附著動物體表；與果實被吃下後散播不同。'),
    choice('Why is seed dispersal helpful?', 'It reduces competition for resources near the parent plant.', ['It guarantees that every seed survives.', 'It removes the need for water.', 'It changes every seed into a spore.'], '散播提高到新環境生長的機會，但不保證每顆種子成功。'),
    choice('A seedling grows on moist cotton without soil. Which conclusion is reasonable?', 'Soil is not required for the initial germination of this seed.', ['The seed needs no oxygen.', 'All plants can live forever without minerals.', 'The seed is not a living thing.'], '種子早期可使用儲存養分；不能由短期結果推論長期不需礦物質。'),
    choice('Which is a correct statement about non-flowering plants?', 'Ferns produce spores, while pine trees produce seeds in cones.', ['All non-flowering plants produce only spores.', 'All non-flowering plants have fruits.', 'All plants need petals to reproduce.'], '蕨類與松樹都不開花，但繁殖構造不同。'),
    choice('A strawberry runner grows into a new plant without fertilisation. Which process is involved?', 'Vegetative reproduction', ['Cross-pollination', 'Human ovulation', 'Seed formation after fertilisation'], '新植株從親代營養器官長出，屬無性生殖。'),
    choice('In the flower model, which label points to the part that produces pollen?', 'A', ['B', 'C', 'D'], 'A指花藥；B柱頭、C子房壁、D胚珠。', { figure: 'flower' }),
    choice('In the flower model, which label points to a structure that can develop into a seed?', 'D', ['A', 'B', 'C'], 'D指胚珠，受精後可形成種子。', { figure: 'flower' }),
    choice('In the flower model, which label marks the part that receives pollen?', 'B', ['A', 'C', 'D'], '柱頭接收花粉。', { figure: 'flower' }),
    choice('Which two setups isolate the effect of water most fairly?', 'A and B', ['A and D', 'B and C', 'C and D'], 'A與B的氧氣、溫度相同，主要差別是水。', { figure: 'germination' }),
    choice('Why did the seeds in setup C probably fail to germinate?', 'Oxygen was excluded.', ['They had no water.', 'They had a temperature of 4°C.', 'They all needed a human parent.'], '表中C有水且25°C，但沒有氧氣。', { figure: 'germination' }),
    choice('What do the results for setup A show?', 'Most, but not all, of these seeds germinated under the tested conditions.', ['Suitable conditions guarantee 100% germination.', 'Water prevents germination.', 'The experiment proved that all plant species need light.'], 'A有8/10萌發，並非全部。實驗也沒有測試光照。', { figure: 'germination' }),
    order('Arrange the main events in the sexual reproduction of a tomato plant.', ['Pollen reaches a suitable stigma.', 'A male reproductive cell reaches an egg cell and fertilisation occurs.', 'Seeds and a fruit develop.', 'Seeds are dispersed.', 'A seed germinates when conditions are suitable.'], '花粉轉移、受精、種果形成、散播、萌發是不同步驟。'),
    order('Order the early growth of a bean seed.', ['The seed absorbs water.', 'The seed coat splits as growth begins.', 'The first root emerges.', 'The shoot grows upwards and leaves unfold.'], '根先向外長出，後續幼苗的葉可進行光合作用。'),
    order('Trace the simplified route that allows a male reproductive cell to reach an ovule.', ['Pollen lands on a stigma.', 'A pollen tube grows through the style.', 'A male reproductive cell reaches the ovule.', 'Male and egg-cell nuclei fuse.'], '花粉本身落在柱頭，生殖細胞藉花粉管到達胚珠。'),
    explain('Why are pollination and fertilisation not the same process?', 'Pollination transfers pollen from an anther to a stigma. Fertilisation is the fusion of a male reproductive-cell nucleus with an egg-cell nucleus.', ['授粉是花粉由花藥移至柱頭。', '受精是雄性生殖細胞核與卵細胞核融合。'], '要同時定義兩者，不能只說其中一個先發生。'),
    explain('Explain two ways seed dispersal can benefit young plants.', 'Dispersal reduces competition with the parent and other seedlings for light, water, space and minerals. It also allows seeds to reach new places where they may grow.', ['指出散播可減少對資源的競爭，並舉一種資源。', '指出可到新地方生長，但不保證存活。'], '可用合理的等義描述。'),
    explain('Use setups A and D to explain what this experiment suggests about temperature.', 'The setups have the same water and oxygen conditions, but differ in temperature. Seeds germinated at 25°C but not at 4°C in five days, suggesting temperature affected germination under these conditions.', ['指出A與D的水和氧氣條件相同，溫度不同。', '比較8/10與0/10的結果，提出溫度影響萌發的結論。', '結論限於這些種子及觀察時間，不能推論所有植物都需25°C。'], '把證據和結論連起來。', { figure: 'germination' }),
    explain('A student says, “All non-flowering plants reproduce by spores.” Correct the statement with two examples.', 'Some non-flowering plants, such as ferns, produce spores. Others, such as pine trees, produce seeds in cones.', ['以蕨類或蘚苔作為孢子繁殖的例子。', '以松樹等球果植物作為無花但有種子的反例。'], '不要把無花植物視為完全相同的一群。'),
    explain('Why can a seed germinate on moist cotton even though a green seedling later needs light?', 'The seed initially uses stored food for growth. After leaves develop, light enables photosynthesis to make food for continued growth.', ['種子早期可使用儲存的養分。', '長出綠葉後，光可支持光合作用及持續生長。'], '萌發的基本條件與幼苗後續生長條件要區分。')
  ],
  heredity: [
    fill('The passing of biological characteristics from parents to offspring is called ______.', [['heredity', 'inheritance']], '遺傳是親代與後代間的特徵傳遞。'),
    fill('A scar from a bicycle accident is an example of a ______ characteristic.', [['non-inherited', 'non inherited', 'acquired']], '傷疤由後天受傷造成，不因父母有疤而必然傳下。'),
    fill('A diagram showing parents, children and grandparents across generations is a ______.', [['family tree', 'pedigree', 'pedigree chart']], '家族樹呈現世代和親屬關係。'),
    fill('Differences among individuals of the same species are called ______.', ['variation'], '同種個體可有差異；差異可來自遺傳與環境。'),
    fill('Biological information passed from parents to offspring is carried in ______.', [['DNA', 'deoxyribonucleic acid']], 'DNA是承載遺傳資訊的分子。'),
    fill('In sexual reproduction, a child receives genetic information from ______ parents.', [['both', 'two']], '子女不是只繼承外觀比較像的那一方。'),
    choice('Which feature is a learned skill rather than an inherited characteristic?', 'Playing a tune after piano lessons', ['Blood group', 'Genetic information in DNA', 'A naturally inherited influence on hair colour'], '演奏技能需要學習；並非經精卵直接傳給孩子。'),
    choice('A mother dyes her hair purple. What follows about her future child?', 'The dye colour itself is not passed on genetically.', ['The child must have naturally purple hair.', 'The dye changes every egg into a different species.', 'All acquired changes are inherited.'], '染髮是後天改變，不代表更改可遺傳的自然髮色資訊。'),
    choice('Why may siblings look different despite having the same parents?', 'They can inherit different combinations of genetic information.', ['Only the first child inherits anything.', 'Every child receives genetic information from only one parent.', 'All siblings have exactly the same experiences and genes.'], '不同的遺傳組合可造成差異。'),
    choice('Which statement best describes height?', 'It can be influenced by both inherited information and environmental factors.', ['It is determined only by the shoes someone wears.', 'It is always exactly the same as the mother’s height.', 'It can never be affected by nutrition.'], '身高不是只受單一因素影響。'),
    choice('A person’s blood group is not visible from a photograph. Is it therefore non-inherited?', 'No. A characteristic can be inherited even when it is not visible.', ['Yes. All inherited characteristics must be visible.', 'Yes. Only hair can be inherited.', 'No. It is a learned skill.'], '是否可由外觀觀察，與是否遺傳是兩個不同分類。'),
    choice('Which conclusion can be made from the family observation table?', 'The child shares curly natural hair with the mother, but swimming skill is not automatically inherited.', ['The child must already know how to swim.', 'The child must inherit the mother’s knee scar.', 'The child receives no genetic information from the father.'], '觀察到相似特徵不代表只由一位親代提供所有資訊。', { figure: 'traits' }),
    choice('Who are Fay’s parents in this family chart?', 'Cara and Eli', ['Ada and Ben', 'Dan and Hana', 'Fay and Gus'], '先追溯Fay上方的親子關係。', { figure: 'family' }),
    choice('What is Ian’s relationship to Fay?', 'Cousin', ['Parent', 'Sibling', 'Grandparent'], 'Cara與Dan是手足，他們的孩子Fay與Ian是表／堂兄弟姊妹。', { figure: 'family' }),
    choice('Who are the grandparents shared by Fay and Ian?', 'Ada and Ben', ['Cara and Eli', 'Dan and Hana', 'Gus and Ian'], '兩條分支向上追溯到共同祖父母。', { figure: 'family' }),
    choice('How many generations are represented in this family chart?', 'Three', ['One', 'Two', 'Five'], '祖父母、父母與孩子，共三代。', { figure: 'family' }),
    choice('Who is Gus’s sibling in the chart?', 'Fay', ['Ian', 'Ben', 'Hana'], 'Fay與Gus有相同的兩位父母。', { figure: 'family' }),
    choice('Two plants of the same variety are grown with different amounts of light and grow to different heights. What should we consider?', 'Environmental conditions may affect their growth.', ['The shorter plant must be a different species.', 'Only genes can ever affect height.', 'Plants cannot inherit any characteristics.'], '實驗改變了環境；不能只用遺傳解釋結果。'),
    order('Read the direct line of descent from this grandparent to this grandchild.', ['Ada', 'Cara', 'Fay'], 'Ada是Cara的親代，Cara是Fay的親代。', { figure: 'family' }),
    explain('Explain why a child can resemble both parents without being identical to either one.', 'The child receives genetic information from both parents. The combination can differ from each parent’s combination, so some features are similar while others differ.', ['指出遺傳資訊來自雙方親代。', '指出組合不同，因此相似不等於完全相同。'], '不是「一半身體像媽媽、另一半像爸爸」的機械拼接。'),
    explain('A father learns to juggle and later has a child. Explain why the child still needs practice to juggle.', 'Juggling is a learned skill acquired through experience. The father’s learned skill is not directly passed to the child through genetic information.', ['把雜耍辨認為後天學習的技能。', '說明學會的技能不會直接以遺傳資訊傳下，孩子仍需學習。'], '不要推論父母的所有能力都能直接遺傳。'),
    explain('Why can a family photograph alone not tell you every inherited characteristic of the people shown?', 'Some inherited characteristics are not visible in appearance, such as blood group. A photograph only shows some observable features.', ['指出有些遺傳特徵不可由外表看出。', '提供合理例子，例如血型。'], '觀察外表只能取得部分資訊。'),
    explain('Explain how inherited information and the environment can both influence a person’s height.', 'Inherited information affects growth potential. Environmental factors such as nutrition can influence how a person grows, so height is not determined by one factor alone.', ['指出遺傳資訊對身高有影響。', '指出營養等環境因素也可影響成長。'], '不需要討論進階遺傳比例或孟德爾機率。'),
    explain('Use the chart to explain why Fay and Ian are cousins rather than siblings.', 'Fay’s parent Cara and Ian’s parent Dan are siblings. Fay and Ian have different parents but share grandparents Ada and Ben.', ['辨認Cara與Dan是手足。', '指出Fay與Ian父母不同但共有祖父母。'], '根據連線關係作答，不根據名字的左右位置。', { figure: 'family' })
  ]
};

for (const [chapter, questions] of Object.entries(SCIENCE_BANK)) {
  questions.forEach((q, i) => { q.id = `science-${chapter}-${i + 1}`; });
}

export function scienceQuestions(chapter, mode) {
  const chapters = chapter === 'mixed' ? Object.keys(SCIENCE_CHAPTERS) : [chapter];
  return chapters.flatMap(key => {
    const terms = SCIENCE_CHAPTERS[key].terms;
    if (mode === 'terms') return terms.map((t, i) => fill(`Name the scientific term: ${t.definition}<br>______`, [[t.name, ...t.aliases]], `${t.name}（${t.chinese}）：${t.meaning}`, { id: `term-${key}-${i}` }));
    if (mode === 'define') return terms.map((t, i) => explain(`Explain the meaning of “${t.name}”.`, t.definition, [t.meaning], `${t.name}（${t.chinese}）`, { id: `definition-${key}-${i}` }));
    return SCIENCE_BANK[key];
  });
}
