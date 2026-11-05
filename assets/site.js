/* ─────────────────────────────────────────────
   site.js — shared behaviour for every page
   (language, theme, nav, reveal, renderers)
───────────────────────────────────────────── */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const bi=o=>`<span class="ko">${o.ko}</span><span class="en">${o.en}</span>`;
const EXT=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>`;
const ARR=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const GH=`<svg viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>`;
let LANG='ko';

/* ---------- Language ---------- */
function setLang(l){
  LANG=l; document.documentElement.lang=l; document.documentElement.dataset.lang=l;
  $$('[data-ko]').forEach(e=>e.textContent=e.dataset[l]);
  $$('#langBtn .seg').forEach(s=>s.classList.toggle('on',s.dataset.l===l));
  try{localStorage.setItem('sh-lang',l)}catch(e){}
  if(typeof restartTypewriter==='function')restartTypewriter();
}
/* ---------- Theme ---------- */
function setTheme(dark){
  document.documentElement.dataset.theme=dark?'dark':'light';
  const m=$('.ic-moon'),su=$('.ic-sun');if(m){m.style.display=dark?'none':'';su.style.display=dark?'':'none';}
  const meta=document.querySelector('meta[name=theme-color]');if(meta)meta.content=dark?'#0c0c0e':'#ffffff';
  try{localStorage.setItem('sh-theme',dark?'dark':'light')}catch(e){}
}
/* ---------- Toast ---------- */
let toastT;
function showToast(m){const t=$('#toast');if(!t)return;t.textContent=m;t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('show'),2200);}
function bindCopy(sel){const b=$(sel);if(!b)return;b.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('smwuai2004@gmail.com');showToast(LANG==='ko'?'이메일 주소를 복사했어요 ✓':'Email copied ✓');}catch(e){showToast('smwuai2004@gmail.com');}});}

/* ---------- Lightbox ---------- */
let lbSet=[],lbI=0;
function openLb(set,i){lbSet=set;lbI=i;showLb();$('#lb').classList.add('open');document.body.style.overflow='hidden';}
function showLb(){$('#lbImg').src=lbSet[lbI].full;$('#lbCap').textContent=`${lbSet[lbI].label} · ${lbI+1} / ${lbSet.length}`;}
function closeLb(){$('#lb').classList.remove('open');document.body.style.overflow='';}
const PH=id=>({thumb:`assets/thumbs/${id}.jpg`,full:`assets/photos/${id}.jpg`});

/* ---------- Renderers ---------- */
function renderNews(sel,limit){
  const c=$(sel);if(!c)return;
  c.innerHTML=DATA.news.slice(0,limit||DATA.news.length).map(n=>`<li><span class="nd">${n.d}</span><span class="nt">${n.href?`<a href="${n.href}">`:''}${bi(n)}${n.href?'</a>':''}</span></li>`).join('');
}
function renderAreas(sel){
  const c=$(sel);if(!c)return;
  c.innerHTML=DATA.areas.map(a=>`<div class="area"><h3>${esc(a.h)}</h3><div class="area-items">${a.items.map(i=>`<span>${esc(i)}</span>`).join('')}</div></div>`).join('');
}
function projCard(p,i){
  return `<article class="proj" data-cat="${p.cat}" data-i="${i}">
  <div class="proj-top"><span class="proj-num" data-cat="${p.cat.toUpperCase()}">${String(i+1).padStart(2,'0')} / ${p.cat.toUpperCase()}</span><span class="status ${p.status}">${p.status==='done'?'Done':'In progress'}</span></div>
  <div class="proj-emo">${p.emoji||''}</div>
  <h3>${bi(p.title)}</h3><p>${bi(p.desc)}</p>
  <div class="proj-tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div>
  <div class="proj-actions">
    ${p.github?`<a class="proj-link" href="${p.github}" target="_blank" rel="noopener">${GH}<span>GitHub</span>${EXT}</a>`:''}
    ${p.detail?`<button class="proj-link sub open-proj" type="button" data-i="${i}"><span class="ko">자세히 보기</span><span class="en">Case study</span>${ARR}</button>`:''}
    ${p.links.map(l=>`<a class="proj-link sub" href="${l.u}" target="_blank" rel="noopener"><span>${esc(l.l)}</span>${EXT}</a>`).join('')}
  </div>
</article>`;
}
function renderProjects(sel,onlyFeatured){
  const c=$(sel);if(!c)return;
  c.innerHTML=DATA.projects.map((p,i)=>(!onlyFeatured||p.featured)?projCard(p,i):'').join('');
  $$('.open-proj').forEach(b=>b.addEventListener('click',()=>openProj(+b.dataset.i)));
}
function renderFilters(sel,grid){
  const c=$(sel);if(!c)return;
  const cats=[{k:'all',ko:'전체',en:'All'},{k:'ai',ko:'AI / ML',en:'AI / ML'},{k:'data',ko:'빅데이터',en:'Big Data'}];
  c.innerHTML=cats.map(x=>{const n=x.k==='all'?DATA.projects.length:DATA.projects.filter(p=>p.cat===x.k).length;return `<button class="filter${x.k==='all'?' on':''}" data-f="${x.k}">${bi(x)}<span class="c">${n}</span></button>`}).join('');
  $$('.filter').forEach(b=>b.addEventListener('click',()=>{
    $$('.filter').forEach(x=>x.classList.remove('on'));b.classList.add('on');
    $$(grid+' .proj').forEach(card=>{const show=b.dataset.f==='all'||card.dataset.cat===b.dataset.f;card.classList.toggle('hide',!show);if(show){card.style.animation='none';card.offsetHeight;card.style.animation='';}});
  }));
}
function openProj(i){
  const p=DATA.projects[i],d=p.detail,pm=$('#pm');if(!d||!pm)return;
  const sec=(label,v,list)=>`<div class="pm-sec"><h4>${label}</h4>${list?`<ul>${v[LANG].map(x=>`<li>${x}</li>`).join('')}</ul>`:`<p>${v[LANG]}</p>`}</div>`;
  $('#pmBody').innerHTML=`
    <div class="pm-head"><div class="pm-emo">${p.emoji||''}</div>
      <div><div class="pm-kicker">${p.cat==='ai'?'AI / ML':p.cat==='data'?'Big Data':'Side project'} · <span class="status ${p.status}">${p.status==='done'?'Done':'In progress'}</span></div>
      <h3>${p.title[LANG]}</h3><p class="pm-lead">${p.desc[LANG]}</p></div></div>
    <div class="pm-tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div>
    <div class="pm-grid">${sec(LANG==='ko'?'문제':'Problem',d.problem)}${sec(LANG==='ko'?'해결':'Solution',d.solution)}</div>
    ${sec(LANG==='ko'?'내가 한 일':'My contribution',d.role,true)}
    <div class="pm-grid">${sec(LANG==='ko'?'결과':'Result',d.result)}${sec(LANG==='ko'?'배운 점':'What I learned',d.learned)}</div>
    <div class="pm-links">
      ${p.github?`<a class="btn btn-solid" href="${p.github}" target="_blank" rel="noopener">${GH}<span>${LANG==='ko'?'GitHub에서 코드 보기':'View code on GitHub'}</span>${EXT}</a>`:''}
      ${p.notion?`<a class="btn btn-line" href="${p.notion}" target="_blank" rel="noopener"><span>${LANG==='ko'?'Notion 기록':'Notion write-up'}</span>${EXT}</a>`:''}
      ${p.links.map(l=>`<a class="btn btn-line" href="${l.u}" target="_blank" rel="noopener"><span>${esc(l.l)}</span>${EXT}</a>`).join('')}
    </div>`;
  pm.classList.add('open');document.body.style.overflow='hidden';pm.querySelector('.pm-card').scrollTop=0;$('#pmX').focus();
}
function closeProj(){const pm=$('#pm');if(!pm)return;pm.classList.remove('open');document.body.style.overflow='';}

function renderTimeline(sel){
  const c=$(sel);if(!c)return;
  c.innerHTML=DATA.experience.map((e,i)=>{
    const gal=e.photos.length?`<div class="gal" data-exp="${i}">${e.photos.map((p,j)=>`<button type="button" data-idx="${j}" aria-label="Photo ${j+1}"><img src="${PH(p).thumb}" alt="" loading="lazy" width="520" height="520"></button>`).join('')}</div>`:'';
    return `<div class="tl-item" id="exp-${i}"><div class="tl-card">
      <button class="tl-head" type="button" aria-expanded="false" aria-controls="exp-body-${i}">
        <div><div class="org">${bi(e.org)}</div><div class="role">${bi(e.role)}</div></div>
        <div class="period">${e.period}</div>
        <div class="chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></div>
      </button>
      <div class="tl-body" id="exp-body-${i}"><div><div class="tl-in">
        <div>
          <ul>${e.bullets.ko.map((b,j)=>`<li><span class="ko">${b}</span><span class="en">${e.bullets.en[j]}</span></li>`).join('')}</ul>
          <div class="takeaway"><b>Key takeaways</b>${bi(e.take)}</div>
          <div class="tl-tags">${e.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
          ${e.link?`<a class="proj-link" style="margin-top:14px" href="${e.link.u}" target="_blank" rel="noopener"><span>${esc(e.link.l)}</span>${EXT}</a>`:''}
        </div>${gal}
      </div></div></div></div></div>`;
  }).join('');
  $$('.tl-head').forEach(h=>h.addEventListener('click',()=>{const it=h.closest('.tl-item');const o=it.classList.toggle('open');h.setAttribute('aria-expanded',o);}));
  const first=$('#exp-0');if(first){first.classList.add('open');first.querySelector('.tl-head').setAttribute('aria-expanded','true');}
  $$('.gal').forEach(g=>{const e=DATA.experience[+g.dataset.exp];const set=e.photos.map(p=>({...PH(p),label:e.org.en}));g.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>openLb(set,+b.dataset.idx)));});
}
function renderAwards(sel){const c=$(sel);if(!c)return;c.innerHTML=DATA.awards.map(a=>`<div class="aw"><div class="medal${a.place===2?' g':''}">${a.place}<sup style="font-size:.55em">${a.place===2?'nd':'rd'}</sup></div><div><div class="t">${bi(a.title)}</div><div class="o">${bi(a.org)}</div></div><div class="d">${a.date}</div></div>`).join('');}
function renderCerts(sel){const c=$(sel);if(!c)return;c.innerHTML=DATA.certs.map(x=>`<div class="cert"><div class="ci">${esc(x.abbr)}</div><div class="cn">${esc(x.name)}</div><div class="cm"><span>${esc(x.issuer)} · ${esc(x.tag)}</span><code>${x.date}</code></div></div>`).join('');}
function renderSkills(sel){const c=$(sel);if(!c)return;c.innerHTML=DATA.skills.map(s=>{let body='';
  if(s.lv)body=`<ul>${s.lv.map(([n,l])=>`<li><span>${esc(n)}</span><span class="lvl" aria-label="${l} of 5">${[1,2,3,4,5].map(i=>`<i class="${i<=l?'on':''}"></i>`).join('')}</span></li>`).join('')}</ul>`;
  else if(Array.isArray(s.chips))body=`<div class="chips">${s.chips.map(x=>`<span>${esc(x)}</span>`).join('')}</div>`;
  else body=`<div class="chips ko">${s.chips.ko.map(x=>`<span>${esc(x)}</span>`).join('')}</div><div class="chips en">${s.chips.en.map(x=>`<span>${esc(x)}</span>`).join('')}</div>`;
  return `<div class="skill"><h3>${bi(s.h)}</h3>${body}</div>`;}).join('');}
function renderInterests(sel){const c=$(sel);if(!c)return;c.innerHTML=DATA.interests.map(x=>`<div class="int"><i>${x.k}</i>${esc(x.n)}</div>`).join('');}
function renderStats(sel){const c=$(sel);if(!c)return;c.innerHTML=DATA.stats.map(s=>`<div class="stat"><div class="n"><span class="cnt" data-n="${s.n}" data-dec="${s.dec||0}" data-pre="${s.pre||''}">${s.pre||''}0</span><small>${s.suf||''}</small></div><div class="l">${bi(s)}</div></div>`).join('');}
function countUp(el){const n=+el.dataset.n,dec=+el.dataset.dec,pre=el.dataset.pre;const t0=performance.now(),dur=1400;(function f(t){const p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=pre+(n*e).toFixed(dec);if(p<1)requestAnimationFrame(f);})(t0);}

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded',()=>{
  /* nav: active page, scroll state, burger */
  const page=location.pathname.split('/').pop()||'index.html';
  $$('.nav-links a').forEach(a=>{const h=a.getAttribute('href');a.classList.toggle('active',h===page||(page==='index.html'&&h==='./'));});
  const nav=$('#nav'),topBtn=$('#top'),prog=$('#progress');
  function onScroll(){const y=scrollY;nav&&nav.classList.toggle('scrolled',y>8);topBtn&&topBtn.classList.toggle('show',y>700);if(prog){const h=document.documentElement;prog.style.width=(y/(h.scrollHeight-h.clientHeight)*100)+'%';}}
  addEventListener('scroll',onScroll,{passive:true});onScroll();
  topBtn&&topBtn.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
  const burger=$('#burger'),navLinks=$('#navLinks');
  burger&&burger.addEventListener('click',()=>{const o=navLinks.classList.toggle('open');burger.setAttribute('aria-expanded',o);});
  $('#langBtn')&&$('#langBtn').addEventListener('click',()=>setLang(LANG==='ko'?'en':'ko'));
  $('#themeBtn')&&$('#themeBtn').addEventListener('click',()=>setTheme(document.documentElement.dataset.theme!=='dark'));
  /* lightbox + modal */
  if($('#lb')){$('#lbX').addEventListener('click',closeLb);$('#lb').addEventListener('click',e=>{if(e.target===$('#lb'))closeLb();});$('#lbPrev').addEventListener('click',()=>{lbI=(lbI-1+lbSet.length)%lbSet.length;showLb();});$('#lbNext').addEventListener('click',()=>{lbI=(lbI+1)%lbSet.length;showLb();});}
  if($('#pm')){$('#pmX').addEventListener('click',closeProj);$('#pm').addEventListener('click',e=>{if(e.target===$('#pm'))closeProj();});}
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeProj();if($('#lb'))closeLb();}if($('#lb')&&$('#lb').classList.contains('open')){if(e.key==='ArrowLeft')$('#lbPrev').click();if(e.key==='ArrowRight')$('#lbNext').click();}});
  /* page renderers (each is a no-op if the container isn't on this page) */
  renderNews('#newsList',6);renderAreas('#areas');renderProjects('#featured',true);
  renderFilters('#filters','#projGrid');renderProjects('#projGrid',false);
  renderTimeline('#timeline');renderAwards('#awList');renderCerts('#certGrid');renderSkills('#skillGrid');renderInterests('#interests');renderStats('#stats');
  bindCopy('#copyMail');bindCopy('#copyMail2');
  $$('.updated').forEach(e=>e.textContent=DATA.updated);
  /* reveal */
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');e.target.querySelectorAll('.cnt').forEach(countUp);const g=e.target.querySelector('#gpaBar');if(g)g.style.width=g.dataset.w+'%';io.unobserve(e.target);}),{threshold:.08});
  $$('.rv').forEach(el=>io.observe(el));
  setTimeout(()=>{$$('.rv:not(.in)').forEach(el=>{if(el.getBoundingClientRect().top<innerHeight){el.classList.add('in');el.querySelectorAll('.cnt').forEach(countUp);const g=el.querySelector('#gpaBar');if(g)g.style.width=g.dataset.w+'%';}});},2500);
  /* open a timeline item from a hash like about.html#experience */
  if(location.hash){const t=document.querySelector(location.hash);if(t)setTimeout(()=>t.scrollIntoView({behavior:'smooth'}),300);}
  /* init prefs */
  let l,t;try{l=localStorage.getItem('sh-lang');t=localStorage.getItem('sh-theme')}catch(e){}
  setTheme(t==='dark');
  setLang(l==='en'?'en':(l==='ko'?'ko':(navigator.language||'ko').startsWith('ko')?'ko':'en'));
});
