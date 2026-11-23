import test from 'node:test';
import assert from 'node:assert/strict';
function buildJournalPages(saved=[],notes=[]){return [...saved.map(x=>({kind:'reading',id:x.id,date:x.date,title:x.cards?.length?'Reading · '+x.cards.length+' cards':'Saved reading',cards:x.cards||[],body:x.note||''})),...notes.map(x=>({kind:'reflection',id:x.id,date:x.date,title:x.title||'Reflection',cards:[],body:x.body||''}))].sort((a,b)=>new Date(b.date).getTime()-new Date(a.date).getTime());}
test('combines readings and reflections in newest-first order',()=>{const pages=buildJournalPages([{id:1,date:'2026-11-20T10:00:00Z',cards:['fool','magician'],note:'A reading'}],[{id:2,date:'2026-11-21T10:00:00Z',title:'A reflection',body:'A note'}]);assert.equal(pages.length,2);assert.equal(pages[0].kind,'reflection');assert.equal(pages[1].kind,'reading');assert.deepEqual(pages[1].cards,['fool','magician']);});
test('handles an empty journal',()=>assert.deepEqual(buildJournalPages(),[]));
