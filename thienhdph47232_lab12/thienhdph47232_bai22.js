const oldData = [
    {code: 'ab', name: 'Son Môi'},
    {code: 'ac', name: 'Sữa Rửa Mặt'},
    {code: 'null', name: 'null'},
    {code: 'null', name: ''}
]

const newData = oldData.reduce((acc, product) => {
    if (product.code !== 'null' && product.code !== '' && product.name !== 'null' && product.name !==''){
        acc[product.code] = product;
    }
    return acc;

}, {});

console.log(newData);