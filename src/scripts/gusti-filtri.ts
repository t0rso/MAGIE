// Filtra le card gusto per vincoli (AND) e categoria; stato nell'URL (?v=vegano,stevia&cat=creme).
const box = document.querySelector<HTMLElement>('[data-filtri]');
const lista = document.querySelector<HTMLElement>('[data-lista]');
if (box && lista) {
  const checks = [...box.querySelectorAll<HTMLInputElement>('input[name=v]')];
  const cat = box.querySelector<HTMLSelectElement>('select[name=cat]')!;
  const conteggio = document.querySelector('[data-conteggio]');
  const vuoto = document.querySelector<HTMLElement>('[data-vuoto]');
  const cards = [...lista.querySelectorAll<HTMLElement>('[data-gusto]')];

  const applica = (pushUrl = true) => {
    const attivi = checks.filter((c) => c.checked).map((c) => c.value);
    let n = 0;
    cards.forEach((card) => {
      const v = (card.dataset.vincoli || '').split(' ');
      const ok = attivi.every((a) => v.includes(a)) && (!cat.value || card.dataset.categoria === cat.value);
      card.hidden = !ok;
      if (ok) n++;
    });
    if (conteggio) conteggio.textContent = `${n} gust${n === 1 ? 'o' : 'i'}`;
    if (vuoto) vuoto.hidden = n > 0;
    lista.querySelectorAll<HTMLElement>('[data-gruppo]').forEach((gr) => {
      gr.hidden = ![...gr.querySelectorAll<HTMLElement>('[data-gusto]')].some((c) => !c.hidden);
    });
    if (pushUrl) {
      const p = new URLSearchParams();
      if (attivi.length) p.set('v', attivi.join(','));
      if (cat.value) p.set('cat', cat.value);
      history.replaceState(null, '', p.size ? `?${p}` : location.pathname);
    }
  };

  const p = new URLSearchParams(location.search);
  const v = (p.get('v') || '').split(',').filter(Boolean);
  checks.forEach((c) => (c.checked = v.includes(c.value)));
  if (p.get('cat')) cat.value = p.get('cat')!;

  box.addEventListener('change', () => applica());
  applica(false);
}
