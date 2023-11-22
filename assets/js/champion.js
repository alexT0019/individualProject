//Champion
//Query Selector
const championImg = document.querySelector(".championImg");
const championImgArea = document.querySelectorAll(".championImgArea");
const selectAgainBtn = document.querySelector(".selectAgainBtn");
const h1 = document.querySelector("h1");
const h4 = document.querySelector("h4");

//On-click functions for different roles
//Top
championImgArea[0].addEventListener("click", ()=>{
    championImg.src = "./assets/images/topImg.jpg";
    h1.innerHTML = "Shen";
    h4.innerHTML = `Click "select again" button to select another champion`;
})
//Jungle
championImgArea[1].addEventListener("click", ()=>{
    championImg.src = "./assets/images/jungleImg.jpg";
    h1.innerHTML = "Lillia";
    h4.innerHTML = `Click "select again" button to select another champion`;
})

//Mid
championImgArea[2].addEventListener("click", ()=>{
    championImg.src = "./assets/images/midImg.jpg";
    h1.innerHTML = "Akshan"
    h4.innerHTML = `Click "select again" button to select another champion`;
})

//Bot
championImgArea[3].addEventListener("click", ()=>{
    championImg.src = "./assets/images/botImg.jpg";
    h1.innerHTML = "Aphelios"
    h4.innerHTML = `Click "select again" button to select another champion`;
})

//Sup
championImgArea[4].addEventListener("click", ()=>{
    championImg.src = "./assets/images/supImg.jpg";
    h1.innerHTML = "Lulu"
    h4.innerHTML = `Click "select again" button to select another champion`;
})

//Select Again Button
selectAgainBtn.addEventListener(("click"), () => {
    championImg.src = "./assets/images/championSelect.png";
    h1.innerHTML = "My favourite champion";
    h4.innerHTML = "Click on an icon to select";
})

//Responsive
window.onload = function () {
    const ImageMap = function (map, img) {
                areas = map.getElementsByTagName('area'),
                coords = [],
                previousWidth = 1344;
            //get coordinations
            for (let i = 0; i < areas.length; i++) {
                coords[i] = areas[i].coords.split(',');
            }
            //resize by multiplying coordinations by width ratio
            //comparing previous width with resized width
            this.resize = function () {
                    let widthRatio = img.offsetWidth / previousWidth;
                for (let i = 0; i < areas.length; i++) {
                    for (let j = 0; j < coords[i].length; j++) {
                        coords[i][j] *= widthRatio;
                    }
                    areas[i].coords = coords[i].join(',');
                }
                previousWidth = img.offsetWidth;
                return true;
            };
            window.onresize = this.resize;
        },
        //Run the function on image map
        imageMap = new ImageMap(document.getElementById('championSelectMap'), document.getElementById('championImg'));
    imageMap.resize();
    return;
}