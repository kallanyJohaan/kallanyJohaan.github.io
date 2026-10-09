'use strict';
document.documentElement.classList.add('js');
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const toggle=document.querySelector('.nav-toggle'),nav=document.getElementById('site-nav');
if(toggle&&nav){
 function setMenu(open){toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);toggle.firstChild.textContent=open?'Close ':'Menu ';}
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
