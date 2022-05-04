onmessage = function(message){

  const regexp = new RegExp(`[${message.data[0]}${message.data[1]}]+`,'i') ;
  fetch(
    'https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt'
  )
    .then((res) => res.text())
    .then((txtRes) => {
      let ans = []
      txtRes.split('\r\n').forEach((v) => {   
        if (v.match(regexp) && v.match(`${message.data[0]}`)) {  
          if (v.match(regexp)[0].length === v.length && v.length >= 4) {
            console.log(v)
            ans.push(v)
          }
        }
      });
      ans.sort((a,b)=> b.length - a.length )
      return ans
    }).then((final)=>{
      postMessage(final)
    })

    
}