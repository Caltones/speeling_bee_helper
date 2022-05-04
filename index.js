let form = document.getElementById('textForm');
let list = document.getElementById('list');


let loadingBox = document.getElementById('loadingBox');
const worker = new Worker('worker.js')
list.style.opacity = '0';
loadingBox.style.opacity = '0';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(list.childElementCount > 0){
    list.innerHTML = ''
  }
  const data = new FormData(e.target);
  loadingBox.style.opacity = '1';
  worker.postMessage([data.get('keyword'),data.get('others')])
});

worker.onmessage = function(message){
  console.log(message.data)
  loadingBox.style.opacity = '0'
  message.data.forEach((v)=>{
    let li = document.createElement('li')
    li.innerHTML = v.toUpperCase()
    list.appendChild(li)
  })
  list.style.opacity = '1'
}
