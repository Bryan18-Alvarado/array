// liga para el formulario de superheroes
const form = document.getElementById('form-heroes')
const container = document.getElementById('container-heroes')

//escuchar el evento submit del formulario
form.addEventListener('submit', async (event) => {
  //TODO: evitar que se envie al formulario
  event.preventDefault()

  //TODO: Obtener los datos del json de superheroes
  const url = `/static/data/heroes.json`
  const heroes = await fetch(url).then((Response) => Response.json())

  heroes.forEach((hero) => {
    console.log(hero.nombre)
  })
})
