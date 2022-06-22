function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora2 = data.getMinutes()
    //var hora = 5
    msg.innerHTML = `Agora são ${hora} horas e ${hora2} minutos.`
    if (hora >=0 && hora < 4){
        img.src = 'noiteofc.png'
        document.body.style.background = "#515154"
        //boa madrugada!
    }else if(hora >= 5 && hora < 12){
        img.src = "manhaofc.png"
        document.body.style.background = '#e2cd9f'
        //bom dia!
    }else if(hora >= 12 && hora <=18){
        img.src = "tardeofc.png"
        document.body.style.background = '#b9848f'
        //boa tarde!
    }else{
        img.src = "noiteofc.png"
        document.body.style.background = '#515154'
        //boa noite!
    }

}