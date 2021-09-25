function Converter() {
    let valorElemento = document.querySelector("#valor");
    let valor = valorElemento.value;
    let valorEmDolarNumerico = parseFloat(valor);
    
    let valorEmReal = valorEmDolarNumerico * 5.24 ;
    let valorEmRealDecimal = valorEmReal.toFixed(2);

    let elemValorConvertido =  document.querySelector("#valorConvertido");
    let valorConvertido = "O resultado em real é R$ "+valorEmRealDecimal;
    elemValorConvertido.innerHTML = valorConvertido;
}
function ConverterE() {
    let valorElemento = document.querySelector("#valor");
    let valor = valorElemento.value;
    let valorEmDolarNumerico = parseFloat(valor);
    
    let valorEmReal = valorEmDolarNumerico * 6.19 ;
    let valorEmRealDecimal = valorEmReal.toFixed(2);

    let elemValorConvertido =  document.querySelector("#valorConvertido");
    let valorConvertido = "O resultado em real é R$ "+valorEmRealDecimal;
    elemValorConvertido.innerHTML = valorConvertido;
}