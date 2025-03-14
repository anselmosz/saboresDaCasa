const ingredienteBtn = document.getElementById("ingrdienteBtn");
const preparoBtn = document.getElementById("preparoBtn");
const ingredientesContentID = document.getElementById("ingredientesContent");
const preparoContentID = document.getElementById("preparoContent");

preparoContentID.style.display = "none"

function trocarLista(activeList, disableList) {
  activeList.style.display = "block";
  disableList.style.display = "none";
}

ingredienteBtn.addEventListener("click", ()=> { trocarLista(ingredientesContentID, preparoContentID)
});

preparoBtn.addEventListener("click", ()=> { trocarLista(preparoContentID, ingredientesContentID) 
})