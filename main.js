//event target 
const form = document.forms[0]
const nameField = document.querySelector('#name')
const photoField = document.querySelector('#photoUrl')

const introField = document.querySelector('#introInput')
const theme = document.querySelector('#lightTheme')


//handler 作用點
const nameOnCard = document.querySelector('.name')
const introOnCard = document.querySelector('.intro')
const photoOnCard = document.querySelector('.photo')
const nameCard = document.querySelector('#nameCard')

// feedback

const feedOnName = document.querySelector('.feedbackOnName')
const feedOnIntro = document.querySelector('.feedbackOnIntro')
const feedOnPhoto = document.querySelector('.feedbackOnPhoto')



//監聽器

form.addEventListener('submit', function (event) {
  event.preventDefault()

  //name
  if (nameField.value === '') { feedOnName.innerHTML = "此欄不可是空白" }
  else {

    nameOnCard.innerHTML = nameField.value


    feedOnName.innerHTML = "great!!"
  }

  // intro 
  if (introField.value === '') { feedOnIntro.innerHTML = "此欄不可是空白" }
  else {

    introOnCard.innerHTML = introField.value
    feedOnIntro.innerHTML = "great!!"
  }

  //photo
  if (photoField.value === '') { photoOnCard.src = "https://picsum.photos/100" }
  else {
    photoOnCard.src = photoField.value
  }


  //theme  預設值為light Theme
  if (!theme.checked) {
    nameCard.className = 'dark'
  } else {
    nameCard.className = 'light'
  }




})

const remainer = document.querySelector('.remain')


//建立intro 監聽器

form.addEventListener('input', function (event) {
  let count = event.target.value.length
  if (event.target.id === 'introInput') {
    remainer.innerHTML = `${200 - count} remain.`
  }
})