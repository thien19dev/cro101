console.log("Dòng 1 - Ví dụ về Promise");

let objPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve("Kết Thúc Công Việc Thành Công");
    }, 5000)
});

console.log(objPromise);
console.log("Dòng Tiếp Theo Của Code")

objPromise.then((ketqua) =>{
    console.log("Sau khi thực hiện promise: ", ketqua);
    return "ABC 1234567..."
})
.then (res => console.log("Lệnh then thứ 2, ", res))
.catch(ex => console.log("Lỗi: ", ex))
.finally(() => {
    console.log("Kết thức quá trình xử lý promise");
    console.log(objPromise);
})

console.log("Dòng cuối cùng cảu file code");


const CongViec = async () => {
    console.log("Dòng 1 về ví dụ code bất đồng bộ");
    let objPromise = new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            return resolve ("Kết thúc thành công")
        }, 5000);
    });

    console.log(objPromise);
    console.log("Dòng tiếp theo trong hàm async");
    

}

