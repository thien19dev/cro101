console.log("Xử lý ngoại lệ");

let chuoi_json = '{"HoTen":"Nguyen Văn A", "Tuoi":20}';

try {
    let objU = JSON.parse(chuoi_json);

    console.log(objU.HoTen);
    console.log(objU.Tuoi);

    console.log("Xong Việc");
} catch (error) {
    console.log(error.message);
}
