import React,{useMemo,useState} from 'react';
import {BookOpen,BookMarked,ChevronLeft,ChevronRight,Printer,Plus,Trash2,X} from 'lucide-react';
import {buildJournalPages} from './journalBook';

export default function JournalExperience({saved,notes,cards,title,setTitle,body,setBody,saveNote,onDeleteReading,onDeleteNote}){
 const [open,setOpen]=useState(false),[page,setPage]=useState(0),[turn,setTurn]=useState(0);
 const pages=useMemo(()=>buildJournalPages(saved,notes),[saved,notes]);
 const current=pages[page];
 const print=()=>window.print();
 return <><div className="intro journal-intro"><label>YOUR PRIVATE NOTEBOOK</label><h1>Journal & saved readings</h1><p>A quiet place for your spreads, observations, and evolving interpretations.</p></div>
 <div className="journal-home">
  <section className="panel journal-compose"><label>ADD A NEW REFLECTION</label><input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Give this entry a title..."/><textarea rows="4" value={body} onChange={e=>setBody(e.target.value)} placeholder="What stood out? What did you notice?"/><button className="primary" onClick={saveNote}><Plus size={16}/> Save reflection</button></section>
  <section className="panel journal-launch"><div className="journal-book-icon"><BookMarked size={32}/><span>✧</span></div><div><label>YOUR JOURNAL BOOK</label><h2>{pages.length} {pages.length===1?'page':'pages'} collected</h2><p>Open your notebook in a page-turning reading window. Saved readings and reflections are gathered together.</p><div className="journal-actions"><button className="primary" onClick={()=>{setPage(0);setOpen(true)}}><BookOpen size={16}/> Open journal</button><button className="outline" onClick={print}><Printer size={15}/> Journal PDF</button></div></div></section>
  <div className="journal-counts"><span><b>{saved.length}</b> saved readings</span><span><b>{notes.length}</b> reflections</span><span><b>{pages.length}</b> total pages</span></div>
 </div>
 <div className="journal-print"><header><h1>My Tarot Practice Journal</h1><p>Personal readings and reflections</p></header>{pages.length?pages.map((item,i)=><article className="print-page" key={item.kind+'-'+item.id}><small>PAGE {i+1} · {item.date}</small><h2>{item.title}</h2>{item.kind==='reading'&&<p><b>Cards:</b> {item.cards.map((id,i)=>(cards.find(c=>c.id===id)?.name||id)+(item.positions?.[i]?' · '+item.positions[i]:'')).join(' · ')}</p>{item.question&&<p><b>Question:</b> {item.question}</p>}}<p>{item.body||'No written reflection.'}</p></article>):<p>Your journal is ready for its first entry.</p>}</div>
 {open&&<div className="book-overlay" onClick={()=>setOpen(false)}><section className="book-modal" onClick={e=>e.stopPropagation()}>
  <div className="book-toolbar"><div><label>YOUR PRIVATE NOTEBOOK</label><h2>Tarot Journal</h2></div><div className="book-toolbar-actions"><button className="outline" onClick={print}><Printer size={14}/> PDF</button><button className="book-close" onClick={()=>setOpen(false)} aria-label="Close journal"><X/></button></div></div>
  <div className="book-spread" key={turn}><aside className="book-left-page"><div className="book-emblem">✧</div><small>THE TAROT PRACTICE LAB</small><h3>Notes from<br/><em>the journey</em></h3><div className="book-rule"></div><p>Observe with care.<br/>Interpret with curiosity.<br/>Return with new understanding.</p><span>✦</span></aside>
   <article className="book-right-page"><div className="paper-topline"><span>{current?.kind==='reading'?'SAVED READING':'PERSONAL REFLECTION'}</span><span>{pages.length?String(page+1).padStart(2,'0'):'—'}</span></div>
    {current?<><small className="paper-date">{current.date}</small><h3>{current.title}</h3>{current.kind==='reading'&&<div className="paper-cards"><b>CARDS IN THIS READING</b><p>{current.cards.map((id,i)=>(cards.find(c=>c.id===id)?.name||id)+(current.positions?.[i]?' · '+current.positions[i]:'')).join(' · ')}</p>{current.question&&<p><b>QUESTION</b><br/>{current.question}</p>}</div>}<p className="paper-body">{current.body||'This entry has no written reflection yet.'}</p></>:<div className="book-empty"><BookOpen size={30}/><h3>Your first page is waiting</h3><p>Save a reflection or tarot reading and it will appear here.</p></div>}
    <div className="paper-footer"><span>✧ TAROT PRACTICE LAB</span><span>{pages.length?page+1+' / '+pages.length:'START HERE'}</span></div>
   </article>
  </div>
  <div className="book-navigation"><button className="outline" disabled={page<=0} onClick={()=>{setPage(Math.max(0,page-1));setTurn(x=>x+1)}}><ChevronLeft size={16}/> Previous</button><span>{pages.length?'Page '+(page+1)+' of '+pages.length:'No entries yet'}</span><button className="primary" disabled={page>=pages.length-1} onClick={()=>{setPage(Math.min(pages.length-1,page+1));setTurn(x=>x+1)}}>Next page <ChevronRight size={16}/></button></div>
  <div className="book-manage"><span>Entries are also listed below so you can remove individual items.</span></div>
 </section></div>}
 <details className="journal-entry-list"><summary>Manage saved entries</summary>{pages.map(item=><article className="panel entry" key={item.kind+'-'+item.id}><small>{item.date}</small><b>{item.title}</b><p>{item.kind==='reading'?item.cards.map(id=>cards.find(c=>c.id===id)?.name||id).join(' · '):item.body}</p><button className="link" onClick={()=>item.kind==='reading'?onDeleteReading(item.id):onDeleteNote(item.id)}><Trash2 size={14}/> Delete</button></article>)}</details>
 </>;
}
