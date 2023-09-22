

let result = {
  "tag": "",
  "free": false,
  "role": false,
  "user": "robin.sukhdeve.ex",
  "email": "robin.sukhdeve.ex@ghrce.raisoni.net",
  "score": 0.64,
  "state": "undeliverable",
  "domain": "ghrce.raisoni.net",
  "reason": "invalid_mailbox",
  "mx_found": true,
  "catch_all": null,
  "disposable": false,
  "smtp_check": false,
  "did_you_mean": "",
  "format_valid": true
}


submitBtn.addEventListener("click", async (e) => {
  e.preventDefault()
  console.log("clicked!")
  resultCont.innerHTML = `<img width="123" src="img/loading.svg">`
  let key = "ema_live_eVHyBpi6vpq2LECtE4FCKnXX73A6U6bJm6bUsjks"
  let email = document.getElementById("username").value
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
  let res = await fetch(url)
  let result = await res.json()
  let str = ``
  for (key of Object.keys(result)){
    if(result[key] !== "" && result[key] !== " "){
      str = str + `<div>${key}: ${result[key]}</div>`
    }
  }

  console.log(str)
  resultCont.innerHTML = str
})