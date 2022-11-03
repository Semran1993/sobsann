const lookCatalog = document.querySelector('.selected-color > button')
const chooseColor = document.querySelector('.modal-footer > button')


document.querySelectorAll('.mySwiper img').forEach(item => {
    item.addEventListener('click', e => {
        let data = []
        data.push({img: e.target.src})
        localStorage.setItem('data',JSON.stringify(data))
    })
})

chooseColor.addEventListener('click', _ => {
    let color = JSON.parse(localStorage.getItem('data'))

    lookCatalog.style.backgroundImage = `url('${color[0].img}')`
    lookCatalog.style.color = 'transparent'

    document.querySelector('#exampleModal').style.display = 'none'
    document.querySelector('.modal-backdrop').style.display = 'none'
    document.querySelector('.modal-open').style.overflow = 'auto'
    
})



