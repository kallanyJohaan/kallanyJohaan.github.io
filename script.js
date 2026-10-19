'use strict';
document.documentElement.classList.add('js');
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const toggle=document.querySelector('.nav-toggle'),nav=document.getElementById('site-nav');
if(toggle&&nav){
 function setMenu(open){toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);toggle.textContent=open?'Close':'Menu';}
 toggle.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded')!=='true'));
 nav.addEventListener('click',event=>{
  const link=event.target.closest('a');
  if(!link)return;
  const wasOpen=toggle.getAttribute('aria-expanded')==='true';
  setMenu(false);
  if(wasOpen&&link.hash&&link.pathname===location.pathname){
   const destination=document.getElementById(link.hash.slice(1));
   if(destination){destination.setAttribute('tabindex','-1');destination.focus({preventScroll:true})}
  }
 });
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){setMenu(false);toggle.focus()}});
}
document.querySelectorAll('[data-copy-target]').forEach(button=>{
 const source=document.getElementById(button.dataset.copyTarget);
 const status=button.closest('.cite')?.querySelector('.copy-status');
 if(!source)return;
 button.hidden=false;
 button.addEventListener('click',async()=>{
  const text=source.textContent;
  let ok=false;
  try{await navigator.clipboard.writeText(text);ok=true}catch(error){
   const range=document.createRange();range.selectNodeContents(source);
   const selection=getSelection();selection.removeAllRanges();selection.addRange(range);
   try{ok=document.execCommand('copy')}catch(e){ok=false}
  }
  button.textContent=ok?'Copied':'Copy BibTeX';
  if(status)status.textContent=ok?'BibTeX copied to clipboard.':'Press Ctrl+C (or ⌘C) to copy the selected BibTeX.';
  setTimeout(()=>{button.textContent='Copy BibTeX'},2200);
 });
});

const overviewVideo=document.querySelector('.thesis-overview-video');
if(overviewVideo){
 const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
 let overviewVideoVisible=false;
 function syncOverviewVideo(){
  if(motionPreference.matches||!overviewVideoVisible){
   overviewVideo.pause();
   overviewVideo.removeAttribute('autoplay');
   return;
  }
  overviewVideo.setAttribute('autoplay','');
  const playRequest=overviewVideo.play();
  if(playRequest)playRequest.catch(()=>{});
 }
 if('IntersectionObserver' in window){
  const videoObserver=new IntersectionObserver(entries=>{
   overviewVideoVisible=Boolean(entries[0]?.isIntersecting);
   syncOverviewVideo();
  },{threshold:.25});
  videoObserver.observe(overviewVideo);
 }else{
  overviewVideoVisible=true;
  syncOverviewVideo();
 }
 if(motionPreference.addEventListener)motionPreference.addEventListener('change',syncOverviewVideo);
 else if(motionPreference.addListener)motionPreference.addListener(syncOverviewVideo);
}

const codeViewStatus=document.getElementById('code-view-status');
const codeSearch=document.getElementById('code-search');
if(codeSearch){
 const modules=[...document.querySelectorAll('[data-code-module]')];
 const groups=[...document.querySelectorAll('[data-code-group]')];
 const groupLinks=[...document.querySelectorAll('.code-group-nav a[href^="#"]')];
 const status=document.getElementById('code-results');
 const empty=document.getElementById('code-empty');
 const normalise=value=>value.toLocaleLowerCase().trim().replace(/\s+/g,' ');
 const searchable=new Map(modules.map(module=>[module,normalise(`${module.dataset.codeName||''} ${module.textContent}`)]));
 function filterCode(){
  const query=normalise(codeSearch.value);
  let shown=0;
  modules.forEach(module=>{
   const match=!query||searchable.get(module).includes(query);
   module.hidden=!match;
   if(match)shown+=1;
  });
  groups.forEach(group=>{
   group.hidden=!group.querySelector('[data-code-module]:not([hidden])');
  });
  groupLinks.forEach(link=>{
   const group=document.querySelector(link.getAttribute('href'));
   link.hidden=Boolean(group?.hidden);
  });
  if(status)status.textContent=`${shown} ${shown===1?'module':'modules'} shown`;
  if(empty)empty.hidden=shown!==0;
 }
 codeSearch.addEventListener('input',filterCode);
 codeSearch.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&codeSearch.value){
   codeSearch.value='';
   filterCode();
  }
 });
 filterCode();
}

const expandAllCode=document.getElementById('expand-all-code');
const collapseAllCode=document.getElementById('collapse-all-code');
const codeViewActions=document.getElementById('code-view-actions');
if(expandAllCode&&collapseAllCode&&codeViewActions){
 const modules=[...document.querySelectorAll('[data-code-module]')];
 codeViewActions.hidden=false;
 expandAllCode.addEventListener('click',()=>{
  const visible=modules.filter(module=>!module.hidden);
  visible.forEach(module=>{module.open=true});
  if(codeViewStatus)codeViewStatus.textContent=`${visible.length} complete ${visible.length===1?'file':'files'} expanded.`;
 });
 collapseAllCode.addEventListener('click',()=>{
  modules.forEach(module=>{module.open=false});
  if(codeViewStatus)codeViewStatus.textContent='All code panels collapsed.';
 });
}

const codeNewTabLinks=[...document.querySelectorAll('.code-new-tab')];
codeNewTabLinks.forEach(link=>{
 link.addEventListener('click',event=>event.stopPropagation());
 link.addEventListener('keydown',event=>event.stopPropagation());
});

function revealLinkedCode(){
 if(!location.hash.startsWith('#source-title-'))return;
 let id;
 try{id=decodeURIComponent(location.hash.slice(1))}catch(error){return}
 const title=document.getElementById(id);
 const module=title?.closest('[data-code-module]');
 if(!title||!module)return;
 module.hidden=false;
 module.open=true;
 document.title=`${title.textContent} | Research code | Johaan Tomy Kallany`;
 if(codeViewStatus)codeViewStatus.textContent=`Complete ${title.textContent} source expanded in this tab.`;
 requestAnimationFrame(()=>title.scrollIntoView({block:'start'}));
}
revealLinkedCode();
window.addEventListener('hashchange',revealLinkedCode);
