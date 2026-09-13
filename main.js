// reveal on scroll
(function(){
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('in')})}
})();
// header shadow
(function(){
  var h=document.getElementById('siteHead');if(!h)return;
  addEventListener('scroll',function(){h.classList.toggle('scrolled',scrollY>10)},{passive:true});
})();
// mobile nav
(function(){
  var btn=document.getElementById('menuBtn'),mn=document.getElementById('mobileNav');
  if(!btn||!mn)return;
  function open(){mn.classList.add('open');btn.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';}
  function close(){mn.classList.remove('open');btn.setAttribute('aria-expanded','false');document.body.style.overflow='';}
  btn.addEventListener('click',open);
  mn.addEventListener('click',function(e){if(e.target===mn)close();});
  var c=document.getElementById('mnClose');if(c)c.addEventListener('click',close);
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
  mn.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close)});
})();
