document.querySelector('#hamburguer').addEventListener('click', () => {
  console.log('menu clicked')
  // document.querySelector('#menu').classList.toggle('w-3/4')
  document.querySelector('#menu').classList.toggle('w-full')
  document.querySelector('#aboutme').classList.toggle('-z-50')
  document.querySelector('#aboutme').classList.toggle('hidden')
  document.querySelector('#menu').classList.toggle('hidden')
  
  // md screen
  document.querySelector('#menu').classList.toggle('md:w-72')
  document.querySelector('#aboutme').classList.toggle('md:-z-0')
})