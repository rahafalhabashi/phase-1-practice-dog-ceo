console.log('%c HI', 'color: firebrick')
fetch(`https://dog.ceo/api/breeds/image/random/4${character.message}`)
.then(resp => resp.json())
.then(character => character.forEach(console.log(renderImages)))

function renderImages(char) {
    dogImg = document.createElement('img')
    dogContainer = document.getElementById('dog-image-container')
    dogImg.src = char.message
    dogContainer.append(dogImg)
}

