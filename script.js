function verificadoridade() {
    let ano = document.getElementById('cxtxt1').value;
    let data = new Date();
    let anoatual = data.getFullYear();
    let idade = anoatual - parseInt(ano); 
    let sexm = document.getElementById('ratxtn1');
    let sexf = document.getElementById('ratxtn2');
    let mensagem = document.getElementById('msg');
    let img = document.getElementById('imagem');

    if (!ano || idade <= 0 || ano <= 1900) {
        mensagem.innerHTML = "Ano inválido. Tente novamente.";
        img.src = ''; 
        return;
    }
    
    if (sexm.checked) {
        mensagem.innerHTML = `Detectamos uma pessoa do gênero masculino com ${idade} anos.`;
        img.src = 'noite1 (1).png';  
        document.body.style.backgroundColor = '#000080'; 
    } else if (sexf.checked) {
        mensagem.innerHTML = `Detectamos uma pessoa do gênero feminino com ${idade} anos.`;
        img.src = 'noite1.png';  
        document.body.style.backgroundColor = 'pink'; 
    } else {
        mensagem.innerHTML = "Por favor, selecione o sexo.";
        img.src = ''; 
    }
}
