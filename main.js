function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let fAno = document.getElementById('txtano');
    let res = document.getElementById('res');

    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        let fSex = document.getElementsByName('radsex');
        let idade = ano - Number(fAno.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        
        if (fSex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './criH.png'); // Criança
            } else if (idade >= 10 && idade < 18) {
                img.setAttribute('src', './adoH.png'); // Adolescente
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', './adulH.png'); // Adulto
            } else {
                img.setAttribute('src', './idoH.png'); // Idoso
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './criM.png'); // Criança
            } else if (idade >= 10 && idade < 18) {
                img.setAttribute('src', './adoM.png'); // Adolescente
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', './adulM.png'); // Adulto
            } else {
                img.setAttribute('src', './idoM.png'); // Idoso
            }
        }

        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`;
        res.appendChild(img); // Adiciona a imagem ao resultado
        res.style.textAlign = 'center';
        res.style.marginTop = '30px'
        img.style.marginTop = '30px'
    }
}