onmessage = function(message){

  const regexp = `[${message.data[0]}${message.data[1]}]+`;
  fetch(
    'https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt'
  )
    .then((res) => res.text())
    .then((txtRes) => {
      let ans = []
      txtRes.split('\r\n').forEach((v) => {   
        if (v.match(regexp) && v.match(`${message.data[0]}`)) {  
          if (v.match(regexp)[0].length === v.length && v.length >= 4) {
            ans.push(v)
          }
        }
      });
      console.log(ans)
      return ans
    }).then((final)=>{
      postMessage(final)
    })

    
}