(()=>{
const art=document.createElement('div');art.className='conceptual-background';art.setAttribute('aria-hidden','true');document.body.prepend(art);
const credit=document.createElement('a');credit.className='art-credit';credit.href='https://www.sugimotohiroshi.com/conceptual-formsjapanese';credit.target='_blank';credit.rel='noopener';credit.textContent='背景参考 · Hiroshi Sugimoto / Conceptual Forms';document.body.append(credit);
const css=document.createElement('style');css.textContent=`
html.dark{--bg:var(--art-bg,#181818)}body{isolation:isolate}.conceptual-background{position:fixed;inset:0;pointer-events:none;z-index:-1;background-image:linear-gradient(90deg,var(--bg) 0%,var(--bg) 48%,transparent 85%),var(--art);background-position:center,right center;background-size:cover,auto 92vh;background-repeat:no-repeat;opacity:.46;mix-blend-mode:normal;mask-image:linear-gradient(to bottom,transparent,black 12%,black 88%,transparent),linear-gradient(to right,black 85%,transparent);mask-composite:intersect}header,main{position:relative}.art-credit{position:fixed;right:20px;bottom:12px;font-size:10px;letter-spacing:.03em;color:var(--muted);opacity:.65;text-decoration:none;z-index:1}html:not(.dark){--bg:var(--day-bg,#fbf8e9);--text:#555752;--strong:#252923;--muted:#7a7e75;--line:#ddded6;--hover:#eeeee8}html:not(.dark) .conceptual-background{display:none}html:not(.dark) .art-credit{display:none}@media(max-width:1100px){.conceptual-background{opacity:.17;background-position:center,right bottom;background-size:cover,auto 75vh;background-image:linear-gradient(90deg,var(--bg),transparent),var(--art)}}@media(max-width:640px){.conceptual-background{opacity:.09}.art-credit{position:static;display:block;margin:20px 24px;font-size:10px}.edit-launch{bottom:45px}}
`;document.head.append(css);
const routeImages={home:0,projects:1,experience:2,skills:5,zhuo:4};
const daylight=document.createElement('div');
daylight.className='daylight-background';daylight.setAttribute('aria-hidden','true');document.body.prepend(daylight);
const dayStyle=document.createElement('style');dayStyle.textContent=`
.daylight-background{display:none;position:fixed;inset:0;pointer-events:none;z-index:-1;background-image:var(--day-art);background-position:right center;background-size:auto 83vh;background-repeat:no-repeat;mix-blend-mode:normal;opacity:.8;filter:none;mask-image:none}
html:not(.dark) .daylight-background{display:block}
html:not(.dark) .art-credit{display:block}
@media(max-width:1100px){.daylight-background{opacity:.5;background-size:auto 75vh}}
@media(max-width:640px){.daylight-background{opacity:.28}}
`;document.head.append(dayStyle);
const dayCache=new Map();
const dayPending=new Map();
let selectedDay=0;
function prepareDay(id){
 if(dayPending.has(id))return dayPending.get(id);
 const pending=new Promise((resolve,reject)=>{
  const image=new Image();image.decoding='async';
  image.onload=()=>{
   try{
    const canvas=document.createElement('canvas');const scale=Math.min(1,900/image.naturalHeight);
    canvas.width=Math.round(image.naturalWidth*scale);canvas.height=Math.round(image.naturalHeight*scale);
    const context=canvas.getContext('2d');context.drawImage(image,0,0,canvas.width,canvas.height);
    const frame=context.getImageData(0,0,canvas.width,canvas.height);
    // Separate neutral pencil/ink strokes from the light paper, leaving an
    // entirely transparent paper area over the shared page background.
    for(let i=0;i<frame.data.length;i+=4){
     const luminance=(frame.data[i]+frame.data[i+1]+frame.data[i+2])/3;
     const ink=Math.max(0,Math.min(1,(216-luminance)/125));
     frame.data[i]=65;frame.data[i+1]=69;frame.data[i+2]=63;
     frame.data[i+3]=Math.round(ink*255);
    }
    context.putImageData(frame,0,0);
    canvas.toBlob(blob=>{
     if(!blob){reject(new Error('Line extraction failed'));return;}
     const source=URL.createObjectURL(blob);dayCache.set(id,source);
     if(selectedDay===id)daylight.style.setProperty('--day-art','url("'+source+'")');
     resolve(source);
    },'image/webp',.9);
   }catch(error){reject(error)}
  };
  image.onerror=()=>reject(new Error('Day background unavailable'));
  image.src='assets/kelly-'+id+'.jpg';
 });dayPending.set(id,pending);return pending;
}
function updateDay(){
 const ids={home:0,projects:1,experience:2,skills:3,zhuo:4};
 const dayId=ids[location.hash.slice(1)]??0;
 selectedDay=dayId;
 document.documentElement.style.setProperty('--day-bg','#f6f5f1');
 const cached=dayCache.get(dayId);
 daylight.style.setProperty('--day-art',cached?'url("'+cached+'")':'none');
 const dark=document.documentElement.classList.contains('dark');
 credit.textContent=dark?'背景参考 · Hiroshi Sugimoto / Conceptual Forms':'背景参考 · Ellsworth Kelly / Plant Drawings';
 credit.href=dark?'https://www.sugimotohiroshi.com/conceptual-formsjapanese':'https://matthewmarks.com/exhibitions/ellsworth-kelly-plant-drawings-05-2017';
 if(!dark)prepareDay(dayId).catch(()=>{});
}
window.addEventListener('hashchange',updateDay);
new MutationObserver(updateDay).observe(document.documentElement,{attributes:true,attributeFilter:['class']});
updateDay();
const ready=new Map();
const loading=new Map();
let activeId=null;
document.documentElement.style.setProperty('--art-bg','#090909');
function prepare(id){
 if(loading.has(id))return loading.get(id);
 const task=new Promise((resolve,reject)=>{
  const image=new Image();
  image.onload=async()=>{
   try{
    const canvas=document.createElement('canvas');
    const targetHeight=window.innerWidth<640?480:800;
    const scale=Math.min(1,targetHeight/image.naturalHeight);
    canvas.width=Math.round(image.naturalWidth*scale);canvas.height=Math.round(image.naturalHeight*scale);
    const context=canvas.getContext('2d');context.drawImage(image,0,0,canvas.width,canvas.height);
    const frame=context.getImageData(0,0,canvas.width,canvas.height);
    for(let i=0;i<frame.data.length;i+=4){
     const luminance=(frame.data[i]+frame.data[i+1]+frame.data[i+2])/3;
     const amount=Math.max(0,Math.min(1,(luminance-55)/95));
     frame.data[i+3]=Math.round(255*amount*amount*(3-2*amount));
    }
    context.putImageData(frame,0,0);
    const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/webp',.85));
    if(!blob)throw new Error('Background encoding failed');
    const source=URL.createObjectURL(blob);
    const decoded=new Image();decoded.src=source;await decoded.decode();
    ready.set(id,{source,decoded});
    if(activeId===id)art.style.setProperty('--art','url("'+source+'")');
    resolve(source);
   }catch(error){loading.delete(id);reject(error)}
  };
  image.onerror=()=>{loading.delete(id);reject(new Error('Background unavailable'))};
  image.decoding='async';
  image.fetchPriority=activeId===id?'high':'low';
  image.src='assets/conceptual-'+id+'.jpg';
 });
 loading.set(id,task);return task;
}
function update(){
 activeId=routeImages[location.hash.slice(1)||'home']??0;
 const cached=ready.get(activeId);
 // Never leave the previous page's image behind while the first load completes.
 art.style.setProperty('--art',cached?'url("'+cached.source+'")':'none');
 prepare(activeId).catch(()=>{});
}
window.addEventListener('hashchange',update);update();
// Warm the remaining backgrounds sequentially during idle time, after the
// current page is ready. Navigation can still request any image immediately.
const idle=()=>new Promise(resolve=>{
 if('requestIdleCallback' in window)requestIdleCallback(resolve,{timeout:1500});
 else setTimeout(resolve,150);
});
(async()=>{
 await prepare(activeId).catch(()=>{});
 for(const id of Object.values(routeImages)){
  if(ready.has(id))continue;
  await idle();await prepare(id).catch(()=>{});
 }
})();
})();






