let products = [
    {barCode: 1, name:'Sabao em po', brand: 'OMO', qtd: 2, price: 15.00},
    {barCode: 2, name:'Laranja', brand: 'Fazenda Capao', qtd: 2, price: 4.99},
    {barCode: 3, name:'Arroz', brand: 'Prato Fino', qtd: 3, price: 19.90},
    {barCode: 4, name:'Contra File', brand: 'Friboi', qtd: 1, price: 32.00},
]

//Utilizando o metodo map para transformar cada produto em um objeto
const resultado = products.map(products => {
    const totalPriceProd = products.price * products.qtd
    return{
        code: products.barCode,
        productName: products.name,
        qtd: products.qtd,
        unitPrice: products.price,
        totalPriceProd: totalPriceProd,
    }
})

//calcula o preco total de todos os produtos
const totalPriceAll = products.reduce((total, p) => total + (p.price * p.qtd),0)




// Imprimindo o resultado formatado no console
resultado.forEach(product => {
    
      
        console.log(product.code+"-" + product.productName+" = R$"+product.totalPriceProd+",")
        
        
    }
);



console.log()
console.log('Preço Total: R$' + totalPriceAll)
console.log()


