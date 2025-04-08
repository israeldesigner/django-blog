const scrollFunc = () => {
  // eslint-disable-next-line no-global-assign
  scrollTo = (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop - 80,
    })
  }

  let queryHeader = document.querySelector('header')
  let queryMain = document.querySelector('main')
  let queryFooter = document.querySelector('footer')


  document.getElementById('anchorHeader').addEventListener('click', (e) => {
    console.log(e)
    e.preventDefault()
    scrollTo(queryHeader)
  })


  document.getElementById('anchorMain').addEventListener('click', (e) => {
    e.preventDefault()
    scrollTo(queryMain)
  })

  document.getElementById('anchorFooter').addEventListener('click', (e) => {
    console.log(e)
    e.preventDefault()
    scrollTo(queryFooter)
  })

}

export { scrollFunc }
