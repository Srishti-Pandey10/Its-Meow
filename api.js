let x=document.querySelector(".load");
let y=document.querySelector(".text");
 tap1();
function tap1()
{
    fetch("https://cataas.com/cat?json=true")
     .then((res) => res.json())
     .then((data) => {
       console.log(data);
       x.innerHTML = `<img class="set" src="https://cataas.com/${data.url}">`;
     });
}
tap2();

function tap2()
{
    fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2")
      .then((res) => res.json())
    .then((data) => {
      data.forEach((fact) => {
        y.innerHTML = `<p class="pr">${fact.text}</p>`;
      })});
}