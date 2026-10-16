// Original SVG teaching illustrations. Labels and diagrams remain sharp when enlarged.
const esc = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const text = (x, y, value, size = 22, colour = '#24324a', anchor = 'start') => `<text x="${x}" y="${y}" font-size="${size}" fill="${colour}" text-anchor="${anchor}">${esc(value)}</text>`;
const label = (x, y, english, chinese, anchor = 'start') => text(x, y, english, 22, '#24324a', anchor) + text(x, y + 27, chinese, 19, '#596980', anchor);
const line = (x1, y1, x2, y2, colour = '#64748b', width = 3) => `<path d="M${x1} ${y1}L${x2} ${y2}" fill="none" stroke="${colour}" stroke-width="${width}" stroke-linecap="round"/>`;
const arrow = (x1, y1, x2, y2, colour = '#6775c8') => {
  const a = Math.atan2(y2 - y1, x2 - x1), s = 13;
  return line(x1, y1, x2, y2, colour, 4) + `<polygon points="${x2},${y2} ${x2-s*Math.cos(a-.5)},${y2-s*Math.sin(a-.5)} ${x2-s*Math.cos(a+.5)},${y2-s*Math.sin(a+.5)}" fill="${colour}"/>`;
};
const rect = (x,y,w,h,fill,rx=18) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}"/>`;
const ellipse = (x,y,rx,ry,fill,stroke='none') => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="${stroke}" stroke-width="3"/>`;
const box = (x,y,w,h,en,zh,fill='#edf1ff') => rect(x,y,w,h,fill) + label(x+w/2,y+38,en,zh,'middle');
const frame = (title, subtitle, content, note = 'Original learning diagram · 簡化示意，非比例圖') => `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 900 600"><rect width="900" height="600" rx="24" fill="#fffdf8"/><g font-family="Arial, 'Microsoft JhengHei', sans-serif">${rect(24,24,852,74,'#eef1ff')}${text(46,58,title,28,'#344286')}${text(46,84,subtitle,18,'#596980')}${content}${text(450,578,note,16,'#667085','middle')}</g></svg>`;
const seed = (x,y,s=1) => `<g transform="translate(${x} ${y}) scale(${s})">${ellipse(0,0,19,29,'#c58b4e','#885625')}${ellipse(-4,0,5,15,'#f5d1a3')}</g>`;
const leaf = (x,y,flip=1) => `<path d="M${x} ${y}q${40*flip} -60 ${65*flip} -25q${-15*flip} 38 ${-65*flip} 25" fill="#67b887"/>`;
const person = (x,y,colour='#7b8dd4',hair='#76533d',size=1) => `<g transform="translate(${x} ${y}) scale(${size})">${ellipse(0,0,29,33,'#f5c79f')}<path d="M-29 -2Q-36 -40 0 -38Q34 -37 30 -2Q12 -10 -5 -23Q-9 -8 -29 -2" fill="${hair}"/>${ellipse(-10,1,2,3,'#354052')}${ellipse(10,1,2,3,'#354052')}<path d="M-9 15Q0 22 9 15" fill="none" stroke="#a66c58" stroke-width="2"/><path d="M-48 105V69Q-45 38 -15 37H15Q45 38 48 69V105Z" fill="${colour}"/></g>`;

export const SCIENCE_VISUALS = {
  female: {
    chapter: 'humans', title: '女性生殖系統', subtitle: '卵巢、輸卵管、子宮各做什麼？',
    alt: '女性生殖系統示意：兩側卵巢靠近輸卵管，輸卵管通向中央子宮，子宮下方為陰道。標出受精通常在輸卵管、胚胎在子宮著床。',
    svg: frame('Female reproductive system｜女性生殖系統', 'Follow the egg’s journey · 沿著卵細胞的路徑看',
      `<path d="M380 285Q320 170 235 218M520 285Q580 170 665 218" fill="none" stroke="#b591d7" stroke-width="25" stroke-linecap="round"/>
      ${ellipse(223,245,40,28,'#ffd599','#c18f48')}${ellipse(677,245,40,28,'#ffd599','#c18f48')}
      <path d="M370 270Q450 300 530 270L505 350Q490 380 468 400H432Q410 380 395 350Z" fill="#ed9ca7" stroke="#b95872" stroke-width="4"/>
      <path d="M402 294Q450 315 498 294L478 350L450 377L422 350Z" fill="#fbe0d8"/>
      <path d="M439 400L435 460H465L461 400" fill="#d2afe1" stroke="#a577bb" stroke-width="3"/>
      ${ellipse(305,218,9,9,'#f0b44e')}${arrow(258,236,298,219,'#d29433')}${arrow(340,226,387,276,'#d29433')}
      ${label(65,145,'Ovary','卵巢：卵細胞在此發育')}${line(210,185,221,216)}
      ${label(550,148,'Oviduct / fallopian tube','輸卵管：受精通常在此發生')}${line(605,179,574,211)}
      ${label(65,365,'Uterus / womb','子宮：胚胎著床，胎兒成長')}${line(335,355,403,334)}
      ${label(600,412,'Vagina','陰道：產道的一部分')}${line(582,414,466,431)}
      ${rect(140,496,620,48,'#fff0d6')}${text(450,527,'Ovulation ≠ fertilisation ≠ implantation',23,'#8b622c','middle')}`)
  },
  male: {
    chapter: 'humans', title: '男性器官與精子路徑', subtitle: '把製造、運送與排出的功能分開記',
    alt: '簡化器官功能圖：睪丸產生精子；輸精管運送精子至尿道方向；精液可經陰莖排出。',
    svg: frame('Sperm’s journey｜精子的路徑', 'Three different jobs · 三個不同的功能',
      `${rect(45,145,240,350,'#eaf6f0')}${rect(330,145,240,350,'#edf0ff')}${rect(615,145,240,350,'#fff0e6')}
      ${ellipse(135,267,31,48,'#f3bf91','#b27c55')}${ellipse(195,267,31,48,'#f3bf91','#b27c55')}
      <path d="M135 220V194M195 220V194" stroke="#b27c55" stroke-width="8" fill="none"/>
      <path d="M400 305Q370 210 450 205Q530 205 500 300" stroke="#a49cdb" stroke-width="20" fill="none" stroke-linecap="round"/>
      <path d="M700 225Q770 220 770 270V311Q770 330 750 330Q730 330 730 311V270" fill="#edb7a8" stroke="#b47b6d" stroke-width="4"/>
      ${arrow(290,265,325,265)}${arrow(575,265,610,265)}
      ${label(165,372,'Testes','睪丸','middle')}${text(165,440,'MAKE sperm',24,'#237b54','middle')}
      ${label(450,372,'Sperm ducts','輸精管','middle')}${text(450,440,'CARRY sperm',24,'#5850a7','middle')}
      ${label(735,372,'Penis','陰莖','middle')}${text(735,440,'Semen exits',24,'#a06444','middle')}
      ${text(450,540,'Sperm = a cell 精子是細胞；semen = fluid 精液是液體。',21,'#596980','middle')}`,
      'Functional route only · 功能示意，省略部分器官與管道，非完整解剖圖')
  },
  pregnancy: {
    chapter: 'humans', title: '胎盤與臍帶', subtitle: '寶寶不是直接從媽媽的胃吃東西',
    alt: '子宮內胎兒以臍帶連接胎盤；氧氣與養分由母體經胎盤交換至胎兒，廢物朝相反方向交換，兩方血液通常不直接混合。',
    svg: frame('Placenta + umbilical cord｜胎盤與臍帶', 'Exchange, then transport · 先交換，再運送',
      `${ellipse(495,310,180,173,'#f9d9df','#d2889d')}${ellipse(495,310,145,140,'#fff0e8')}
      <path d="M349 225Q306 304 350 381L379 365Q347 302 380 243Z" fill="#bc587a"/>
      <path d="M370 295Q445 234 488 315Q503 351 535 355" fill="none" stroke="#9c92d4" stroke-width="14" stroke-linecap="round"/>
      ${ellipse(555,293,43,45,'#f1ba93')}
      <path d="M526 330Q584 333 566 381Q530 412 489 371Q468 348 498 337" fill="#f1ba93" stroke="#bd886c" stroke-width="3"/>
      ${label(52,173,'Placenta','胎盤：交換氧氣、養分與廢物')}${line(302,215,345,258)}
      ${label(568,166,'Umbilical cord','臍帶：連接胎兒與胎盤')}${line(640,199,479,290)}
      ${label(697,354,'Fetus','胎兒')}${line(681,358,575,356)}
      ${arrow(85,322,310,322,'#db9c39')}${text(180,293,'Oxygen + nutrients',20,'#9c6a23','middle')}
      ${arrow(310,388,85,388,'#6c82be')}${text(185,423,'Wastes / 廢物',20,'#596980','middle')}
      ${text(450,529,'母體與胎兒的血液通常不直接混合。',23,'#8a526c','middle')}`)
  },
  flower: {
    chapter: 'plants', title: '花的構造', subtitle: '花藥造花粉；柱頭收花粉；胚珠在子房內',
    alt: '花的剖面：雄蕊包括花藥和花絲；雌蕊包括柱頭、花柱、子房；子房內有胚珠。花瓣在外側，萼片在花基部。',
    svg: frame('Inside a flower｜花的構造', 'A labelled cutaway · 對照中英文名詞找位置',
      `<path d="M416 430Q258 400 245 230Q270 140 390 270Q370 124 451 138Q533 125 510 270Q628 140 653 230Q640 400 485 430" fill="#f6c6d5" stroke="#d28ca5" stroke-width="3"/>
      <path d="M425 449L450 477L475 449L538 437L510 473L450 490L389 473L362 437Z" fill="#7fba85"/>
      <path d="M450 480V540" stroke="#5f9d6d" stroke-width="15"/>
      <path d="M354 381V260M547 381V260" stroke="#bb9d63" stroke-width="9"/>
      ${ellipse(354,247,26,13,'#eab956','#ac853c')}${ellipse(547,247,26,13,'#eab956','#ac853c')}
      <path d="M450 358V218" stroke="#79a77a" stroke-width="13"/>
      ${ellipse(450,209,28,11,'#6ea27a')}${ellipse(450,408,46,56,'#a4c999','#658e65')}
      ${ellipse(433,407,10,17,'#f7e9ad')}${ellipse(466,425,10,17,'#f7e9ad')}
      ${label(60,161,'Petal','花瓣')}${line(165,170,274,248)}
      ${label(53,288,'Anther','花藥')}${line(162,285,326,248)}
      ${label(52,386,'Filament','花絲')}${line(173,385,349,338)}
      ${label(77,482,'Sepal','萼片')}${line(168,480,386,462)}
      ${label(630,153,'Stigma','柱頭')}${line(625,166,477,208)}
      ${label(689,280,'Style','花柱')}${line(675,289,460,298)}
      ${label(679,391,'Ovary','子房')}${line(668,396,499,408)}
      ${label(665,492,'Ovule','胚珠')}${line(649,480,477,427)}`)
  },
  pollination: {
    chapter: 'plants', title: '授粉 ≠ 受精', subtitle: '花粉移動與細胞核融合，是兩個不同步驟',
    alt: '左圖花藥的花粉被帶到柱頭，這是授粉；右圖花粉管向下生長，雄性生殖細胞核在胚珠內與卵細胞核融合，這是受精。',
    svg: frame('Pollination ≠ fertilisation｜授粉不等於受精', 'Move pollen first; join nuclei later · 先轉移花粉，之後才融合',
      `${rect(38,129,388,367,'#fff4db')}${rect(474,129,388,367,'#edf7ee')}
      ${label(232,175,'1  Pollination','授粉：花藥 → 柱頭','middle')}
      <path d="M130 354V258M320 356V249" stroke="#7d9f6d" stroke-width="12"/>
      ${ellipse(130,246,29,13,'#e4b24c')}${ellipse(320,239,30,12,'#77a474')}
      ${ellipse(160,226,7,7,'#e4b24c')}${ellipse(207,211,7,7,'#e4b24c')}${ellipse(256,216,7,7,'#e4b24c')}${ellipse(301,227,7,7,'#e4b24c')}
      ${arrow(167,260,283,256,'#c49330')}${label(129,407,'Anther','花藥','middle')}${label(322,407,'Stigma','柱頭','middle')}
      ${label(667,175,'2  Fertilisation','受精：生殖細胞核融合','middle')}
      <path d="M647 247V351" stroke="#9cb68b" stroke-width="22"/>${ellipse(647,238,32,10,'#78a875')}${ellipse(650,391,65,57,'#c2d8ab','#79a17e')}
      <path d="M647 242Q666 310 650 374" stroke="#b28fd2" stroke-width="7" fill="none"/>
      ${ellipse(650,393,30,24,'#f9edc2')}${ellipse(638,392,7,7,'#9c7abb')}${ellipse(662,392,10,10,'#db9b61')}
      ${text(753,302,'Pollen tube',18)}${line(746,310,657,314)}${text(753,410,'Ovule',18)}${line(747,410,682,396)}
      ${arrow(433,318,467,318)}${text(450,538,'授粉不保證一定完成受精；受精後，胚珠可發育成種子。',21,'#596980','middle')}`)
  },
  dispersal: {
    chapter: 'plants', title: '種子怎麼旅行？', subtitle: '看構造猜散播方式：風、水、動物、果實彈裂',
    alt: '四個例圖：蒲公英的毛狀構造隨風移動；椰子浮水；帶鉤的果實附著動物毛；成熟鳳仙花果實裂開彈出種子。',
    svg: frame('Seed dispersal｜種子旅行的四種方式', 'Look at the structures · 看構造，不只背名稱',
      `${rect(35,126,405,192,'#eaf5fe')}${rect(460,126,405,192,'#e5f4f2')}${rect(35,337,405,192,'#fff1dc')}${rect(460,337,405,192,'#f0eafa')}
      <path d="M128 250L150 196M108 193Q151 145 196 191M150 196V160M150 196L112 174M150 196L186 172" stroke="#8195a4" stroke-width="3" fill="none"/>${seed(123,258,.45)}${arrow(206,186,253,180,'#7bb6d8')}${label(284,187,'Wind','風力：毛、翅膀')}
      ${ellipse(558,219,43,35,'#bb8b52','#8f673d')}<path d="M492 245Q526 227 559 245T625 245" fill="none" stroke="#5baca7" stroke-width="5"/>${label(676,187,'Water','水力：浮水、防水')}
      ${ellipse(132,432,69,36,'#dfc2a6')}${ellipse(192,412,24,25,'#dfc2a6')}${line(88,450,83,477,'#ab8a6a',8)}${line(164,452,171,478,'#ab8a6a',8)}
      ${ellipse(135,414,14,14,'#a18c46')}<path d="M120 408l-7 -7m29 -1l6 -9m-8 35l5 8m-24 -13l-9 3" stroke="#6c6a37" stroke-width="3"/>${label(265,398,'Animals','動物：鉤住毛髮')}
      <path d="M559 400Q517 426 559 482M579 400Q620 426 579 482" fill="none" stroke="#68a478" stroke-width="13" stroke-linecap="round"/>
      ${seed(523,422,.25)}${seed(614,438,.25)}${arrow(546,430,515,410,'#98a56b')}${arrow(594,446,633,459,'#98a56b')}${label(674,398,'Splitting','彈裂：種子被彈出')}`)
  },
  germination: {
    chapter: 'plants', title: '從種子到幼苗', subtitle: '有水、有氧氣、適當溫度；先使用種子儲存的養分',
    alt: '四個階段：種子吸水膨脹、種皮裂開、根先長出、莖葉向上生長；萌發需要水、氧氣和適當溫度。',
    svg: frame('Germination｜種子萌發', 'Watch the root and shoot · 觀察根與芽的生長',
      `${rect(40,365,820,75,'#eadac1')}${line(45,365,855,365,'#c7a77c',3)}
      ${seed(130,347,.75)}${seed(340,347,.85)}
      <path d="M336 326L342 339L335 349L341 363" stroke="#885625" stroke-width="3" fill="none"/>
      ${seed(550,343,.7)}<path d="M551 360Q535 410 550 444M551 337Q548 326 552 320" stroke="#709b5b" stroke-width="8" fill="none"/>
      <path d="M756 366Q748 408 764 445M756 366V270" stroke="#60905e" stroke-width="9" fill="none"/>${leaf(756,315)}${leaf(756,280,-1)}
      ${arrow(190,315,270,315)}${arrow(400,315,480,315)}${arrow(610,315,686,315)}
      ${label(130,185,'1  Absorb water','吸水膨脹','middle')}${label(340,185,'2  Coat splits','種皮裂開','middle')}
      ${label(550,185,'3  Root emerges','根先長出','middle')}${label(756,185,'4  Shoot grows','芽與葉生長','middle')}
      ${text(450,496,'Water 水  +  Oxygen 氧氣  +  Suitable temperature 適當溫度',24,'#426e4b','middle')}
      ${text(450,534,'土壤不是萌發的必備條件；不同種子的光照需求可能不同。',20,'#596980','middle')}`)
  },
  inheritance: {
    chapter: 'heredity', title: '為什麼像爸媽，卻不完全相同？', subtitle: '子女獲得雙方親代的遺傳資訊',
    alt: '父母的不同遺傳資訊以兩色積木表示，箭頭指向兩個子女；兩個子女各有不同組合，示意手足相似但不完全相同，不表示特徵由單一基因決定。',
    svg: frame('Heredity｜相似，但不完全相同', 'Information from both parents · 雙方親代的資訊組合',
      `${person(230,192,'#b19ed6','#4e3830')}${person(670,192,'#76a7c7','#563b2a')}
      ${label(230,336,'Parent 1','親代一','middle')}${label(670,336,'Parent 2','親代二','middle')}
      ${rect(180,376,36,22,'#7f6cb4',5)}${rect(227,376,36,22,'#a890d0',5)}${rect(620,376,36,22,'#4a8fb6',5)}${rect(667,376,36,22,'#89b7d0',5)}
      ${arrow(285,269,450,365,'#a890d0')}${arrow(615,269,450,365,'#69a6c9')}${arrow(450,365,383,402)}${arrow(450,365,518,402)}
      ${person(383,430,'#e7b464','#4f3a2e',.7)}${person(518,430,'#91bda3','#76533d',.7)}
      ${rect(337,528,25,16,'#7f6cb4',4)}${rect(369,528,25,16,'#89b7d0',4)}${rect(474,528,25,16,'#4a8fb6',4)}${rect(506,528,25,16,'#a890d0',4)}`,
      '顏色積木只表示資訊來自雙方；不表示所有特徵都由單一基因決定。')
  },
  acquired: {
    chapter: 'heredity', title: '遺傳，還是後天獲得？', subtitle: '把生物特徵與學會的技能分開',
    alt: '左側例子為經遺傳資訊影響的血型和自然髮色；右側是學會騎腳踏車和膝蓋受傷留下的疤。身高等特徵同時受遺傳與環境影響。',
    svg: frame('Inherited or acquired?｜遺傳還是後天？', 'Look for the source of a characteristic · 特徵從哪裡來？',
      `${rect(40,127,390,356,'#eaf2ff')}${rect(470,127,390,356,'#fff0e6')}
      ${label(235,174,'Inherited influences','遺傳資訊的影響','middle')}${label(665,174,'Acquired changes / skills','後天改變或學習','middle')}
      <path d="M150 235Q90 312 150 334Q210 312 150 235" fill="#db7882"/>${text(150,305,'A',32,'white','middle')}${label(267,274,'Blood group','血型')}
      ${person(147,391,'#9ab4d2','#5a3e2d',.55)}${label(267,393,'Natural hair','自然髮色')}
      ${ellipse(563,289,30,30,'none','#ad7a50')}${ellipse(647,289,30,30,'none','#ad7a50')}<path d="M563 289L590 246L615 289H563L602 260L647 289M590 246H613" stroke="#6f9ab4" stroke-width="5" fill="none"/>
      ${label(711,270,'Cycling','學會騎車')}${ellipse(565,397,31,35,'#e8bc9c')}<path d="M547 394l34 10m-26 -17l-4 19m14 -15l-5 20" stroke="#ba7f73" stroke-width="3"/>${label(657,396,'Scar','受傷留下的疤')}
      ${text(450,533,'有些特徵（例如身高）同時受到遺傳與環境影響。',22,'#596980','middle')}`)
  },
  family: {
    chapter: 'heredity', title: '看懂家族樹', subtitle: '先找親子連線，再判斷世代與親屬關係',
    alt: '三代家族樹：Ada和Ben的孩子是Cara及Dan；Cara和Eli的孩子是Fay和Gus；Dan和Hana的孩子是Ian。Fay與Gus是手足，Fay與Ian是cousins。',
    svg: frame('Family tree｜家族樹怎麼讀？', 'Follow the parent–child lines · 沿著親子連線往下看',
      `${box(325,126,250,76,'Ada + Ben','祖父母世代','#e7e0f6')}
      ${line(450,202,450,231)}${line(245,231,655,231)}${line(245,231,245,257)}${line(655,231,655,257)}
      ${box(110,258,270,76,'Cara + Eli','Fay / Gus 的父母','#e1edf8')}${box(520,258,270,76,'Dan + Hana','Ian 的父母','#e1edf8')}
      ${line(245,334,245,367)}${line(174,367,316,367)}${line(174,367,174,397)}${line(316,367,316,397)}${line(655,334,655,397)}
      ${box(112,398,124,76,'Fay','子女','#e9f2dd')}${box(254,398,124,76,'Gus','子女','#e9f2dd')}${box(593,398,124,76,'Ian','子女','#e9f2dd')}
      ${text(450,529,'Fay + Gus = siblings 手足；Fay + Ian = cousins 堂／表親',22,'#596980','middle')}`)
  }
};

SCIENCE_VISUALS.plantKinds = {
  chapter: 'plants', title: '孢子、種子與營養繁殖', subtitle: '無花植物不一定都靠孢子繁殖',
  alt: '蕨類葉背有產生孢子的構造；松樹以球果內的種子繁殖；草莓走莖長成新植株是營養繁殖，不涉及精卵融合。',
  svg: frame('Not all plants reproduce the same way｜植物的不同繁殖方式', 'Compare the structures · 比較不同構造',
    `${rect(35,130,405,219,'#e6f3ec')}${rect(460,130,405,219,'#edf1ff')}
    <path d="M115 310L220 177" stroke="#73a47b" stroke-width="7"/>
    ${[0,1,2,3,4].map(i => `<path d="M${135+i*16} ${285-i*21}q-54 -9 -38 -30q28 -5 38 30q49 22 50 -5q-19 -20 -50 5" fill="#79b98d"/>`).join('')}
    ${ellipse(173,237,4,4,'#ad7c41')}${ellipse(187,217,4,4,'#ad7c41')}${ellipse(203,197,4,4,'#ad7c41')}
    ${label(278,204,'Fern','蕨類：孢子')}${text(278,281,'Spores ≠ seeds',18)}
    <path d="M544 171l-42 61h24l-39 62h115l-38 -62h23Z" fill="#6fa28b"/><path d="M544 294V318" stroke="#a8784f" stroke-width="12"/>
    ${ellipse(622,279,17,29,'#b48b62','#826346')}${seed(645,307,.27)}${label(681,204,'Pine','松樹：球果內的種子')}
    ${rect(35,368,830,175,'#fff0e2')}
    <path d="M170 474Q310 410 450 474" fill="none" stroke="#82ae6a" stroke-width="7"/>
    ${leaf(169,450)}${leaf(169,450,-1)}${leaf(449,462,.7)}${leaf(449,462,-.7)}
    <path d="M170 450V492M450 463V498" stroke="#659868" stroke-width="7"/>
    <path d="M155 492l-10 23m25 -23l10 22m257 -16l-10 19m23 -19l9 20" stroke="#b49972" stroke-width="3"/>
    ${text(302,411,'Runner / 走莖',20,'#617b4e','middle')}${label(600,431,'Vegetative reproduction','營養繁殖：由親代部位長出新株')}`)
};

export const CHAPTER_VISUALS = {
  humans: ['female', 'male', 'pregnancy'],
  plants: ['flower', 'pollination', 'dispersal', 'germination', 'plantKinds'],
  heredity: ['inheritance', 'acquired', 'family']
};

const GROUPS = {
  female: ['ovary','egg cell','uterus','vagina','oviduct','ovulation','menstruation','menstrual cycle','puberty','fertilisation'],
  male: ['testes','sperm','sperm duct','penis'],
  pregnancy: ['placenta','umbilical cord','fetus','embryo','zygote','identical twins','fraternal twins'],
  flower: ['stamen','anther','filament','pistil','stigma','style','ovary','ovule','pollen grain','petal','sepal'],
  pollination: ['pollination','self-pollination','cross-pollination','fertilisation'],
  dispersal: ['seed dispersal','fruit'],
  germination: ['seed','germination','seed coat','seedling'],
  plantKinds: ['spore','asexual reproduction','vegetative reproduction'],
  acquired: ['non-inherited characteristic','environment'],
  family: ['family tree','generation']
};
export function visualForTerm(chapter, name) {
  const key = CHAPTER_VISUALS[chapter].find(key => GROUPS[key]?.includes(name));
  return key || CHAPTER_VISUALS[chapter][0];
}
export function imageURL(key) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(SCIENCE_VISUALS[key].svg)}`;
}
