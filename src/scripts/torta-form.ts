// Compone il messaggio WhatsApp con i dati del form; mostra il messaggio di conferma dopo l'invio Netlify.
const form = document.querySelector<HTMLFormElement>('[data-form-torta]');
if (form) {
  const wa = form.querySelector<HTMLAnchorElement>('[data-wa-link]');
  const num = form.dataset.wa;

  const testo = () => {
    const fd = new FormData(form);
    const v = (k: string) => String(fd.get(k) || '').trim();
    const vincoli = fd.getAll('vincoli').join(', ');
    const righe = [
      `Ciao Magie! Vorrei ordinare una torta.`,
      v('torta') && `🎂 ${v('torta')} per ${v('porzioni')} persone`,
      v('data') && `📅 Ritiro ${v('data').split('-').reverse().join('/')}${v('ora') ? ` alle ${v('ora')}` : ''}`,
      vincoli && `⚠️ Deve essere: ${vincoli}`,
      v('gusti') && `🍨 Gusti: ${v('gusti')}`,
      v('scritta') && `✍️ Scritta: "${v('scritta')}"`,
      v('note') && `📝 ${v('note')}`,
      v('nome') && `— ${v('nome')}${v('telefono') ? `, ${v('telefono')}` : ''}`,
    ].filter(Boolean);
    return righe.join('\n');
  };

  const aggiorna = () => {
    if (wa && num) wa.href = `https://wa.me/${num}?text=${encodeURIComponent(testo())}`;
  };
  form.addEventListener('input', aggiorna);
  aggiorna();

  if (new URLSearchParams(location.search).get('ok') === '1') {
    form.hidden = true;
    document.querySelector<HTMLElement>('[data-form-ok]')?.classList.remove('hidden');
  }
}
