import { SCIENCE_CHAPTERS, SCIENCE_SOURCES } from './science-data.js';

function node(tag, text, className) {
  const el = document.createElement(tag);
  if (text) el.textContent = text;
  if (className) el.className = className;
  return el;
}

export function renderScienceStudy(container, chapter, mode) {
  container.replaceChildren();
  const selected = chapter === 'mixed' ? Object.keys(SCIENCE_CHAPTERS) : [chapter];
  const heading = node('h2', mode === 'glossary' ? '名詞解釋' : '三章重點複習');
  container.appendChild(heading);
  if (mode === 'glossary') {
    const controls = node('div', '', 'glossary-controls');
    const label = node('label', '搜尋英文或中文名詞');
    const search = node('input');
    search.type = 'search';
    search.placeholder = '例如：pollination、受精、家族樹';
    label.appendChild(search);
    const toggle = node('button', '隱藏定義，先回想', 'secondary-btn');
    toggle.type = 'button';
    toggle.setAttribute('aria-pressed', 'false');
    controls.append(label, toggle);
    container.appendChild(controls);
    const results = node('p', '', 'study-result-count');
    results.setAttribute('aria-live', 'polite');
    container.appendChild(results);
    const cards = [];
    for (const key of selected) {
      const data = SCIENCE_CHAPTERS[key];
      const section = node('section', '', 'study-chapter');
      section.appendChild(node('h3', data.title));
      const grid = node('div', '', 'term-grid');
      for (const term of data.terms) {
        const card = node('article', '', 'term-card');
        card.appendChild(node('h4', term.name));
        card.appendChild(node('p', term.chinese, 'term-chinese'));
        const details = node('details');
        details.open = true;
        details.appendChild(node('summary', '英文定義與中文解釋'));
        details.appendChild(node('p', term.definition, 'term-definition'));
        details.appendChild(node('p', term.meaning, 'term-meaning'));
        card.appendChild(details);
        grid.appendChild(card);
        cards.push({ card, details, search: [term.name, term.chinese, ...term.aliases].join(' ').toLowerCase(), section });
      }
      section.appendChild(grid);
      container.appendChild(section);
    }
    const filter = () => {
      const query = search.value.trim().toLowerCase();
      cards.forEach(item => { item.card.hidden = !item.search.includes(query); });
      const sections = new Set(cards.map(item => item.section));
      for (const section of sections) section.hidden = !cards.some(item => item.section === section && !item.card.hidden);
      const count = cards.filter(item => !item.card.hidden).length;
      results.textContent = count ? `顯示 ${count} / ${cards.length} 個名詞` : '沒有符合的名詞，請換個關鍵字。';
    };
    search.addEventListener('input', filter);
    toggle.onclick = () => {
      const hide = toggle.getAttribute('aria-pressed') !== 'true';
      cards.forEach(item => { item.details.open = !hide; });
      toggle.setAttribute('aria-pressed', String(hide));
      toggle.textContent = hide ? '顯示全部定義' : '隱藏定義，先回想';
    };
    filter();
  } else {
    for (const key of selected) {
      const data = SCIENCE_CHAPTERS[key];
      const section = node('section', '', 'study-chapter');
      section.appendChild(node('h3', `${data.title} · ${data.chinese}`));
      for (const [title, english, chinese] of data.points) {
        const card = node('article', '', 'review-point');
        card.append(node('h4', title), node('p', english), node('p', chinese, 'term-meaning'));
        section.appendChild(card);
      }
      container.appendChild(section);
    }
  }
  const sources = node('details', '', 'science-sources');
  sources.appendChild(node('summary', '教材範圍與參考資料'));
  sources.appendChild(node('p', '依 My Pals Are Here! Science International 6（第2版）Unit 1–3 公開大綱編寫的原創複習；名詞與重點採適合小學程度的解釋。'));
  const list = node('ul');
  for (const [title, url] of SCIENCE_SOURCES) {
    const item = node('li');
    const link = node('a', title);
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    item.appendChild(link);
    list.appendChild(item);
  }
  sources.appendChild(list);
  container.appendChild(sources);
}
