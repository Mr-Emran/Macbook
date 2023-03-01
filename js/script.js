// Обращаемся к элементам и вызываем их чтобы с ними работать
let doc = document
let col_btn1 = doc.querySelectorAll('.colored_btn')[0]
let col_btn2 = doc.querySelectorAll('.colored_btn')[1]
let img = doc.querySelector('.imgg')
let hh = doc.querySelector('h')


let btn1 = doc.querySelectorAll('.with_btn')[0]
let btn2 = doc.querySelectorAll('.with_btn')[1]
let btn3 = doc.querySelectorAll('.with_btn')[2]
let btn4 = doc.querySelectorAll('.with_btn')[3]
let mm = doc.querySelector('.many')

// путь картинок
let img1 = "./img/macbook1.jpg"
let img2 = "./img/mac_2.svg"


// функция смены картинок 
let ch_img1 = () =>{
    img.src = img1
    hh.textContent = 'White'
}

let ch_img2 = () =>{
    img.src = img2
    hh.textContent = 'Space grey'
}

// свойство click при нажатие выполняет опридиленые указыные действия
col_btn1.addEventListener('click', ch_img1)
col_btn2.addEventListener('click', ch_img2)


// меняем классы у кнопок чтобы менялись свойства
col_btn1.onclick = () =>{
    col_btn1.className = 'colored_btn activ'
    col_btn2.className = 'colored_btn colored_btn_2 not_activ'
}
col_btn2.onclick = () =>{
    col_btn1.className = 'colored_btn colored_btn_2 not_activ'
    col_btn2.className = 'colored_btn activ'
}


// функции по смене цен
let many1 = () =>{
mm.textContent = '$1,999'

}
let many2 = () =>{
    mm.textContent = '$2,999'
}
let many3 = () =>{
    mm.textContent = '$5,999'
}
let many4 = () =>{
    mm.textContent = '$6,999'
}

// свойство click при нажатие выполняет опридиленые указыные действия
btn1.addEventListener('click', many1)
btn2.addEventListener('click', many2)
btn3.addEventListener('click', many3)
btn4.addEventListener('click', many4)
    


// меняем классы у кнопок чтобы менялись свойства
btn1.onclick = () =>{
    btn1.className = "with_btn border_btn"
    btn2.className = "with_btn"
    btn3.className = "with_btn"
    btn4.className = "with_btn"
}
btn2.onclick = () =>{
    btn1.className = "with_btn"
    btn2.className = "with_btn border_btn"
    btn3.className = "with_btn"
    btn4.className = "with_btn"
}
btn3.onclick = () =>{
    btn1.className = "with_btn"
    btn2.className = "with_btn"
    btn3.className = "with_btn  border_btn"
    btn4.className = "with_btn"
}
btn4.onclick = () =>{
    btn1.className = "with_btn"
    btn2.className = "with_btn"
    btn3.className = "with_btn"
    btn4.className = "with_btn  border_btn"
}
