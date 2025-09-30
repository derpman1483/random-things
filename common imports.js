async function importScript(url){
let script = document.createElement('script');
script.src = url;
document.body.appendChild(script);
}
async function importFromList(list){
let l = new List(list);
  for(let i =0;i<l.length;i++){
  importScript(l[i]);
  }
}
async function importKeys(){
  let l = ["https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"]
  importFromList(l);
}
