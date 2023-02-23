const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

      if(entry.isIntersecting){
        entry.target.classList.add('element-show')
      }
      else{
        entry.target.classList.remove('element-show')
      }
    })
  })

  export  function AddAnim(){
    const hiddenElements = document.querySelectorAll('.element-animation')
  hiddenElements.forEach((el)=> observer.observe(el))
  }