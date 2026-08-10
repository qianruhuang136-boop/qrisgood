
(function(){
  const lb=document.querySelector('.lightbox'),li=document.querySelector('.lightbox img'),close=document.querySelector('.close');
  document.querySelectorAll('[data-lightbox]').forEach(b=>b.addEventListener('click',()=>{li.src=b.dataset.lightbox;lb.classList.add('open');document.body.style.overflow='hidden'}));
  if(close)close.onclick=()=>{lb.classList.remove('open');document.body.style.overflow=''};
  if(lb)lb.addEventListener('click',e=>{if(e.target===lb){lb.classList.remove('open');document.body.style.overflow=''}});
  const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));
  document.querySelectorAll('.pdf-viewer').forEach(v=>{
    const pages=JSON.parse(v.dataset.pages);let i=0;
    const img=v.querySelector('.pdf-img'),num=v.querySelector('.page-num'),prev=v.querySelector('.prev'),next=v.querySelector('.next'),link=v.querySelector('.current-page');
    function show(){img.src=pages[i];num.textContent=(i+1)+' / '+pages.length;if(link)link.href=pages[i]}
    prev.onclick=()=>{i=(i-1+pages.length)%pages.length;show()};
    next.onclick=()=>{i=(i+1)%pages.length;show()};
    show();
  });
})();
