function main(){

}

// Images data
    let images = [
        "./images/luke-Sky.jpeg",
        "./images/c3-po.jpeg",
        "./images/r2-d2.jpeg",
        "./images/Anakin_Skywalker_RotS.png",
        "./images/princess-leia-1200.jpeg",
        "./images/OwenCardTrader.png",
        "./images/beru-lars.jpeg" ,
        "./images/r5-d4.jpeg",
        "./images/BiggsHS-ANH.png",
        "./images/obi-wan-ken.jpeg"
    ]

// Modal contents
    let name = document.getElementById('modalName')
    let gender = document.getElementById('gender')
    let height = document.getElementById('height')

// Handling the modal
    const modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }

let mainBlock = document.getElementById('main')

// Api URL
const starWarsUrl = "https://swapi.dev/api/people"

//Fetch and handle api data
fetch(starWarsUrl).then(resp => resp.json()).then(data => {

    let charactersContainer = document.createElement('div')
    charactersContainer.classList.add('characters-section')
    
    data.results.forEach((item,index) => {
        let characterBox = document.createElement('div')
        characterBox.classList.add('character-box')
        characterBox.innerHTML = `
            <img src=${images[index]} alt="${item.name}">
            <div class="text">
                <p class="name">${item.name}</p>
            </div>
        `
        characterBox.onclick = () => {
            name.textContent = item.name
            gender.textContent = `Gender: ${item.gender}`
            height.textContent = `Height: ${item.height}`
            modal.style.display = 'block'
        }
        charactersContainer.append(characterBox)
    });

    mainBlock.append(charactersContainer)


})

//module.exports = {main}

