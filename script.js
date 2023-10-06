async function getAdvice(){
    
    let adviceId = document.querySelector('#adviceID')
    let advice = document.querySelector('#advice')
     let endPointAPI = await fetch('https://api.adviceslip.com/advice')
   let  answer = await endPointAPI.json()
   adviceId.innerText = `advice #${answer.slip.id}`
   advice.innerText = `"${answer.slip.advice}"`
    
 }
 
 getAdvice()

