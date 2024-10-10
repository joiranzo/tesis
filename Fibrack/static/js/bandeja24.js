let bjas=document.getElementsByClassName("bja24");

for (const key in bjas) {
    if (Object.prototype.hasOwnProperty.call(bjas, key)) {
        const element = bjas[key];
        
        element.addEventListener("click",(e)=>{

            element.classList.toggle("visible")
        })
            }
}
