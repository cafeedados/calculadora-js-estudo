function calcular (tipo, valor) { //pois tem bototes de valor e de acao

    if (tipo === 'acao') {

        console.log(valor)
        
        if (valor === 'c'){
            //logica do botao clear
            document.getElementById('resultado').value = '';

        }

       
        if (valor === '+' || valor === '-' || valor === '*' || valor ==='/' || valor === '.'){
           document.getElementById('resultado').value += valor;


        }

        if (valor === '=') {
          var valor_campo = eval(document.getElementById('resultado').value);
          //o eval ele coloca a string como uma operacao amtematica valida ou seja ele converte em algo interpretado do java script
          document.getElementById('resultado').value = valor_campo
        
        }


    } else if (tipo === 'valor') {
        //se for valor vamos inputar o valor la no visor da calculadora
  
        //como esta em string ira concatenar
        document.getElementById('resultado').value += valor; 

    };



}


