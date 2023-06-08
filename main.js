const paleta = document.getElementById("paleta");
const color = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","F"];
const paleta_size = 4;


const createPaleta = () => {
    for (let i = 0; i < 4; i++){
        const palletaElement = document.createElement('div');
        palletaElement.classList.add('paletaItem');
        paleta.appendChild(palletaElement);
    }
    otraPaleta()
}

const colores = (element) => {
    let colorPaleta = "#";
    for (let i = 0; i < 6; i++){
        const randomElement = color[Math.floor(Math.random() * color.length)];
        colorPaleta += randomElement;
    }
    element.style.backgroundColor = colorPaleta;
    element.innerHTML = `<span class='colorHex'>${colorPaleta}</span>`
}

const otraPaleta = () => {
    for (let i = 0; i < 4; i++) {
        colores(paleta.children[i])
    }
}

createPaleta()

