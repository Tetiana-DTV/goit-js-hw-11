/* empty css                      */import{a as m,S as y,i as a}from"./assets/vendor-5YrzWRhu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="51708418-3aac8028d9e6ae6b223e03bd7",h="https://pixabay.com/api/";async function b(s){return(await m.get(h,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const d=document.querySelector(".gallery"),p=document.querySelector(".loader"),L=new y(".gallery a",{captionsData:"alt",captionDelay:250,fadeSpeed:300});function v(s){const o=s.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${t.likes}</p>
        <p><b>Views:</b> ${t.views}</p>
        <p><b>Comments:</b> ${t.comments}</p>
        <p><b>Downloads:</b> ${t.downloads}</p>
      </div>
    </li>
  `).join("");d.insertAdjacentHTML("beforeend",o),L.refresh()}function c(){d.innerHTML=""}function S(){p.classList.add("visible")}function u(){p.classList.remove("visible")}const f=document.querySelector("#search-form"),w=f.querySelector('input[name="searchQuery"]'),n=document.querySelector("#loading-message");f.addEventListener("submit",s=>{s.preventDefault();const o=w.value.trim();if(c(),u(),n.classList.remove("visible"),!o){a.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}c(),S(),n.classList.add("visible"),b(o).then(t=>{t.hits.length?v(t.hits):a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(()=>{a.error({title:"Error",message:"Failed to fetch images. Try again later.",position:"topRight"})}).finally(()=>{u(),n.classList.remove("visible")})});
//# sourceMappingURL=index.js.map
