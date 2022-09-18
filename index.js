// javascript
let starEl = document.getElementById("star")
function createStars(count) {
    
    let html = "";
    
    for(let i = 0; i < count; i++) {
        
        html += `<div class="star" style="left: ${generateRandom()}%; top: ${generateRandom()}%;"></div>`;
    }
    
    document.body.insertAdjacentHTML('afterbegin', html);
}

function generateRandom() {
    const num = Math.floor(Math.random() * 100);
    console.log(num);
    return num;
}

createStars(1000);

