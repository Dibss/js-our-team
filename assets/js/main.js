/*Per la pagina 'Chi siamo' del nostro sito aziendale, dobbiamo sviluppare la sezione "Il nostro team".
Definiamo un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Milestone 1: stampare in console l'elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.
Milestone 2: stampare i dati all'interno di un contenitore nella pagina html in modo dinamico, creando per ciascun membro del team un elemento che conterrà i suoi dati.
BONUS: stilizziamo la sezione realizzando le card di ciascun membro del team, come nel mockup allegato.*/

let team = [
  {
    "nome" : "Wayne Barnett",
    "ruolo" : "Founder & CEO",
    "foto" : "wayne-barnett-founder-ceo.jpg",
  },
  {
    "nome" : "Angela Caroll",
    "ruolo" : "Chief Editor",
    "foto" : "angela-caroll-chief-editor.jpg",
  },
  {
    "nome" : "Walter Gordon",
    "ruolo" : "Office Manager",
    "foto" : "walter-gordon-office-manager.jpg",
  },
  {
    "nome" : "Angela Lopez",
    "ruolo" : "Social Media Manager",
    "foto" : "angela-lopez-social-media-manager.jpg",
  },
  {
    "nome" : "Scott Estrada",
    "ruolo" : "Developer",
    "foto" : "scott-estrada-developer.jpg",
  },
  {
    "nome" : "Barbara Ramos",
    "ruolo" : "Graphic Designer",
    "foto" : "barbara-ramos-graphic-designer.jpg",
  }
]

console.log(team);

for(let i = 0; i < team.length; i++){
  let {nome, ruolo, foto} = team[i];
  document.getElementById("team").innerHTML += 
  `
  <div class="col-3 mb-4 mx-2" id="card">
    <div>
      <img class="img-respo" src="./assets/img/${foto}" alt="foto del team member">
    </div>
    <div class="row jc-center ai-center flex-column my-2" id="details">
      <div class="fs-5">${nome}</div>
      <div class="fs-2">${ruolo}</div>
    </div>
  </div>
  `
}
