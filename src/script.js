const cardFooter = document.getElementById('card-footer')
const shareButton = document.getElementById('share-button')

shareButton.addEventListener('click', e =>{
  e.preventDefault()
  cardFooter.classList.toggle('card__footer--active')
})