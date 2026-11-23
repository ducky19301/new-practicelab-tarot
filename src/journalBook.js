export function buildJournalPages(saved = [], notes = []) {
  const readings = saved.map((item) => ({ kind: 'reading', id: item.id, date: item.date, title: item.cards?.length ? 'Reading · ' + item.cards.length + ' cards' : 'Saved reading', cards: item.cards || [], positions: item.positions || [], question: item.question || '', body: item.note || '' }));
  const reflections = notes.map((item) => ({ kind: 'reflection', id: item.id, date: item.date, title: item.title || 'Reflection', cards: [], positions: [], question: '', body: item.body || '' }));
  return [...readings, ...reflections].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
