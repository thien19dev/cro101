let arrSP = [
    { id: 1, name: 'Tivi', price: 3000 },
    { id: 2, name: 'Tủ lạnh', price: 5000 },
    { id: 3, name: 'Máy giặt', price: 4000 },
    { id: 4, name: 'Điều hòa', price: 8000 }
];

function inDS() {
    arrSP.map(product => {
        console.log(`id = ${product.id} | name = ${product.name} | price = ${product.price}`);
    });
}

function InDsSapXep(sortType){
    if (sortType === 1) {
       
        arrSP.sort((a, b) => a.price - b.price);
    } else if (sortType === -1) {
        
        arrSP.sort((a, b) => b.price - a.price);
    } else {
        console.log('Kiểu sắp xếp không hợp lệ! Chỉ sử dụng 1 (tăng dần) hoặc -1 (giảm dần).');
        return;
    }

    inDS();
}

let lay_du_lieu = async () => {
    let url = 'https://667f845ff2cb59c38dc9158f.mockapi.io/baiviet';
    let ketqua = await fetch(url); 
    let mang_baiviet = await ketqua.json(); 

   
    let mang_tron = [...arrSP, ...mang_baiviet];

    for (let i = 0; i < mang_tron.length; i++) {
        console.log(`Item ${i + 1}:`);
        for (let key in mang_tron[i]) {
            console.log(`${key} = ${mang_tron[i][key]}`);
        }
    }
};


inDS(); 
console.log('--- Danh sách sau khi sắp xếp tăng dần theo giá ---');
InDsSapXep(1);
console.log('--- Danh sách sau khi sắp xếp giảm dần theo giá ---');
InDsSapXep(-1); 
lay_du_lieu();