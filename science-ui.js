import { SCIENCE_CHAPTERS, SCIENCE_SOURCES } from './science-data.js';
import { SCIENCE_VISUALS, CHAPTER_VISUALS, visualForTerm, imageURL } from './science-visuals.js';

function node(tag, text, className) {
  const el = document.createElement(tag);
  if (text) el.textContent = text;
  if (className) el.className = className;
  return el;
}

function openIllustration(key) {
  document.getElementById('science-visual-dialog')?.remove();
  const data = SCIENCE_VISUALS[key];
  const dialog = node('dialog', '', 'visual-modal');
  dialog.id = 'science-visual-dialog';
  dialog.setAttribute('aria-labelledby', 'visual-dialog-title');
  const header = node('div', '', 'visual-modal-header');
  const title = node('h2', data.title);
  title.id = 'visual-dialog-title';
  const close = node('button', '關閉', 'secondary-btn');
  close.type = 'button';
  close.onclick = () => dialog.close();
  header.append(title, close);
  const tools = node('div', '', 'visual-tools');
  const zoom = node('button', '放大看標示', 'secondary-btn');
  zoom.type = 'button';
  zoom.setAttribute('aria-pressed', 'false');
  const download = node('a', '下載這張圖');
  download.href = imageURL(key);
  download.download = `science-${key}.svg`;
  tools.append(zoom, download);
  const hint = node('p', '可放大後上下、左右滑動，閱讀中英文標示。', 'visual-hint');
  const viewport = node('div', '', 'visual-viewport');
  const image = node('img');
  image.src = imageURL(key);
  image.alt = data.alt;
  image.width = 900;
  image.height = 600;
  viewport.appendChild(image);
  zoom.onclick = () => {
    const large = viewport.classList.toggle('is-zoomed');
    zoom.setAttribute('aria-pressed', String(large));
    zoom.textContent = large ? '縮小看全圖' : '放大看標示';
    if (large) viewport.scrollLeft = (viewport.scrollWidth - viewport.clientWidth) / 2;
  };
  dialog.append(header, tools, hint, viewport, node('p', data.subtitle, 'visual-hint'));
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => dialog.remove());
  document.body.appendChild(dialog);
  dialog.showModal();
}

function visualButton(key, compact = false) {
  const data = SCIENCE_VISUALS[key];
  const button = node('button', '', compact ? 'term-visual-button' : 'visual-open');
  button.type = 'button';
  button.setAttribute('aria-label', `放大例圖：${data.title}`);
  const image = node('img');
  image.src = imageURL(key);
  image.alt = compact ? '' : data.alt;
  image.width = 900;
  image.height = 600;
  image.loading = 'lazy';
  button.appendChild(image);
  button.appendChild(node('span', compact ? '看相關例圖 ↗' : '點開放大 ↗', 'visual-open-label'));
  button.onclick = () => openIllustration(key);
  return button;
}

function addGallery(section, chapter, mode = 'glossary') {
  const details = node('details', '', 'chapter-visuals');
  details.open = true;
  details.appendChild(node('summary', mode === 'review' ? '先看圖，再看重點' : '先看圖理解，再看名詞'));
  const gallery = node('div', '', 'visual-gallery');
  for (const key of CHAPTER_VISUALS[chapter]) {
    const data = SCIENCE_VISUALS[key];
    const figure = node('figure', '', 'visual-card');
    figure.appendChild(visualButton(key));
    const caption = node('figcaption');
    caption.append(node('strong', data.title), node('span', data.subtitle));
    figure.appendChild(caption);
    gallery.appendChild(figure);
  }
  details.appendChild(gallery);
  section.appendChild(details);
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
    const toggle = node('button', '顯示全部定義', 'secondary-btn');
    toggle.type = 'button';
    toggle.setAttribute('aria-pressed', 'true');
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
      addGallery(section, key);
      const grid = node('div', '', 'term-grid');
      for (const term of data.terms) {
        const card = node('article', '', 'term-card');
        card.appendChild(node('h4', term.name));
        card.appendChild(node('p', term.chinese, 'term-chinese'));
        card.appendChild(visualButton(visualForTerm(key, term.name), true));
        const details = node('details');
        details.open = false;
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
      for (const section of sections) {
        section.hidden = !cards.some(item => item.section === section && !item.card.hidden);
        section.querySelector('.chapter-visuals').hidden = Boolean(query);
      }
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
      addGallery(section, key, 'review');
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
