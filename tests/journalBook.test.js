import test from 'node:test';
import assert from 'node:assert/strict';
import { buildJournalPages } from '../src/journalBook.js';
test('combines readings and reflections newest first while retaining reading context', () => {
 const pages = buildJournalPages([{id:1,date:'2026-11-20T10:00:00Z',cards:['fool','magician'],positions:['Upright','Reversed'],question:'What should I consider?',note:'A reading'}],[{id:2,date:'2026-11-21T10:00:00Z',title:'A reflection',body:'A note'}]);
 assert.equal(pages.length,2); assert.equal(pages[0].kind,'reflection'); assert.equal(pages[1].kind,'reading'); assert.deepEqual(pages[1].positions,['Upright','Reversed']); assert.equal(pages[1].question,'What should I consider?');
});
test('handles an empty journal', () => assert.deepEqual(buildJournalPages(), []));
