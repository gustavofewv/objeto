let carro ={
    marca:"toyota",
    modelo:"corolla",
    ano:"2020",
    ligar:function(){
        console.log("o carro ligou");
    },
    mostrarInfo: function(){
        console.log(`marca: ${this.marca}.\nmodelo: ${this.modelo}`)
    }
};
carro.ligar();