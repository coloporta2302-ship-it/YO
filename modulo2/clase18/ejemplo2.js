let forn = document.querySelector("#forn");

let input = document.querySelector("#input");

forn.addEventListener("submit",(Evento) => {
   
   Evento.preventDefault();
     alert(input.value);
})

