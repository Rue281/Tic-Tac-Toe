const player = name =>{
    const getName = () => name;
    return {getName};
};

//module
const gameBoard =(() => {
    let boardArray = ["x","o","x","o","x","o","x","o","x"];
    let fields = document.querySelectorAll(".field");

    const spread = fields.forEach((field,i)=>{
        field.textContent = boardArray[i];
    });


fields.forEach(field => {
    field.addEventListener("click",
    ()=> console.log(field.textContent="x"));
});
return {spread};
})();

//control the flow of the game

const displayController = (() => {
    
})();