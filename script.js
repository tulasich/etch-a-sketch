const container = document.querySelector(".container");
container.classList.add("container")

const newGrid = document.querySelector(".new-grid");

let div = document.createElement("div");

let squares = 16;
let opacity = 0;
createGrid();

function getRandomColor(){
   // random hex code generation
   // let code = "0123456789ABCDEF"
   // let random_color = "#";
   // for(let i=0; i<6; i++){
   //    random_color = random_color + code[Math.floor(Math.random() * 10)]
   // } 

   //Random RGB color generation
   let colors = ['#ff0000', '#00ff00', '#0000ff'];
   let random_color = colors[Math.floor(Math.random() * colors.length)];
   return random_color;
}

function createGrid(){
   container.innerHTML = "";

   for(let i=0; i<squares*squares; i++){
      div = document.createElement("div");
      container.appendChild(div);
      
      div.classList.add("squares-flex");
      div.style.flexBasis = "calc(100%/" + squares + ")";
   
      div.addEventListener("mouseover", (event) => {
         event.target.style.background = getRandomColor();
         opacity = opacity + 0.1;
         event.target.style.opacity = opacity;
      });
   }
}

newGrid.addEventListener("click", () => {
   squares = parseInt(prompt("How many squares? for the new grid"));
   if(squares>100){
   alert("Too many squares! Keep it below 100");
  } else if(isNaN(squares) || squares<0){
   alert("range: 1to 100 only!");
  } else{
   createGrid();
  }
});