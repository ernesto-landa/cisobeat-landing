(() => {
 'use strict';
 const cfg=window.OT_LAUNCH || {};
 const params=new URLSearchParams(window.location.search);
 const allowedSources=['whatsapp_canal','whatsapp_grupo','whatsapp_estado','linkedin','email','youtube'];
 const incoming=params.get('utm_source');
 const source=allowedSources.includes(incoming)?incoming:'landing';
 const phone=/^\d{8,15}$/.test(cfg.whatsapp||'')?cfg.whatsapp:'51959545350';
 document.querySelectorAll('[data-whatsapp]').forEach(a=>{
  const position=a.dataset.whatsapp;
  const message=`Hola, quiero información del curso Implementador de Programas de Ciberseguridad OT, Nivel 3, que inicia el 24 de noviembre de 2026.\nOrigen: ${source}. Consulta: ${position}.`;
  a.href=`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  a.target='_blank';a.rel='noopener noreferrer';
 });
 const slot=document.getElementById('video-slot');
 const id=cfg.youtubeId;
 if(slot && /^[a-zA-Z0-9_-]{11}$/.test(id||'')){
  slot.replaceChildren();
  const button=document.createElement('button');button.type='button';button.className='video-button';button.setAttribute('aria-label','Reproducir presentación del curso en YouTube');
  const symbol=document.createElement('span');symbol.className='play-symbol';symbol.textContent='▶';symbol.setAttribute('aria-hidden','true');
  const title=document.createElement('strong');title.textContent='Conoce el programa';
  const subtitle=document.createElement('span');subtitle.textContent='Reproducir video de presentación';
  button.append(symbol,title,subtitle);slot.append(button);
  button.addEventListener('click',()=>{
   if(location.protocol==='file:'){window.open(`https://www.youtube.com/watch?v=${id}`,'_blank','noopener,noreferrer');return}
   const frame=document.createElement('iframe');frame.title='Presentación del curso Implementador de Programas de Ciberseguridad OT';frame.src=`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;frame.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';frame.referrerPolicy='strict-origin-when-cross-origin';frame.allowFullscreen=true;slot.replaceChildren(frame);
  });
 }
})();
