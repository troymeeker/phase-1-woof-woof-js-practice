document.addEventListener('DOMContentLoaded', () => {
    getPups()
    

})

const getPups = () => {
 fetch('http://localhost:3000/pups')
    .then((resp) => resp.json())
    .then((pups) => {
        console.log('pups', pups)
      pups.forEach((pup) => renderPup(pup));
    })
}

const renderPup = (pup) => {
 const dogSpan = document.createElement('span')
 
    // add dogs name
  dogSpan.innerHTML = pup.name
    // find dog bar
  const dogBar = document.querySelector('#dog-bar')
    //append dogs to bar
  dogBar.append(dogSpan)
  

  dogSpan.addEventListener('click', (e) => {
    showPupInfo(pup)
  })

}

const showPupInfo = (pup) => {
    //create img, assign src
    const dogImg = document.createElement('img')

      dogImg.src = pup.image
      //dogImg.setAttribute('src',pup.image)
        console.log(dogImg)
    // create header, assign name
    const dogHeader = document.createElement('h2')
        dogHeader.innerText = pup.name

    // create button, set text
    const dogButton = document.createElement('button')
    if(pup.isGoodDog){
        dogButton.innerText = 'Good Dog'
    }else{
        dogButton.innerText = 'Naughty dog'
    }
    console.log(dogButton)
  
    //  find parent, append
  
    dogButton.addEventListener('click', (e) => {
       
        if(e.target.innerText === "Good Dog"){
            e.target.innerText = "Naughty Dog"
        }else{
            e.target.innerText = "Good Dog"
        }
    })

    const dogInfo = document.querySelector('#dog-info')

    dogInfo.innerHTML = ''
     dogInfo.append(dogImg, dogHeader, dogButton)
     

}


