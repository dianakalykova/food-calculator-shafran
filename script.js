const data=[
{name:'Свекольный',products:[['Брокколи',0.05],['Окорочка',0.08],['Помидоры',0.045],['Красный лук',0.03],['Чеснок',0.01]]},
{name:'Азиатский',products:[['Вырезка',0.05],['Огурцы',0.1],['Помидоры',0.07],['Красный лук',0.035],['Чеснок',0.005]]},
{name:'Баклажан чили',products:[['Баклажан',0.2],['Черри',0.05],['Крахмал',0.04]]},
{name:'Майо',products:[['Куриная грудка',0.07],['Ананас',0.1],['Кукуруза',0.06],['Майонез',0.006],['Голландский сыр',0.05]]}
];
const app=document.getElementById('app');
data.forEach((d,i)=>{
let html=`<div class='card'><h3>${d.name}</h3>Порции <input type='number' value='0' id='p${i}' oninput='calc()'><table>`;
d.products.forEach((p,j)=>html+=`<tr><td>${p[0]}</td><td class='result' id='r${i}_${j}'></td></tr>`);
html+='</table></div>';app.innerHTML+=html;});
function fmt(v){if(v<1)return Math.round(v*1000)+' г';let kg=Math.floor(v);let g=Math.round((v-kg)*1000);return g?`${kg} кг ${g} г`:`${kg} кг`;}
function calc(){let t={};data.forEach((d,i)=>{let n=+document.getElementById('p'+i).value||0;d.products.forEach((p,j)=>{let a=p[1]*n;document.getElementById(`r${i}_${j}`).textContent=fmt(a);t[p[0]]=(t[p[0]]||0)+a;});});
let s=document.getElementById('summary');s.innerHTML='';let q=document.getElementById('search').value.toLowerCase();
Object.keys(t).sort().forEach(k=>{if(k.toLowerCase().includes(q))s.innerHTML+=`<tr><td>${k}</td><td>${fmt(t[k])}</td></tr>`;});}
document.getElementById('search').oninput=calc;calc();