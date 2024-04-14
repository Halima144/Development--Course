const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");
// This is Get REquest used  hoti h sirf data le kr ana k lea server s 
const getFacts = async () => {
    console.log("getting data ....")
    let response = await fetch(URL);
    // console.log(response.ok);
    // console.log(response.status);
    // pehlw ajax format m ata tha data ab json mtlb object jese format m ata h json bhi ak promise return krta h 
    let data = await response.json();
    // console.log(data[1]);
    factPara.innerText = data[2].text;
}
btn.addEventListener("click", getFacts);
const submitted = document.querySelector("#submit");
const email = document.querySelector("#email");
const name = document.querySelector("#name");
const result = submitted.addEventListener("click", async () => {
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify({ name: name, email: email }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
})
// getFacts();