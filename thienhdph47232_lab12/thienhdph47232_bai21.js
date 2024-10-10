const class1 = [{
    mssv: 'PS0000',
    name: 'Nguyen Van A',
    avgPoint: 8.9,
    avgTraningPoint: 7,
    status: 'pass',
}, {
    mssv: 'PS0001',
    name: 'Nguyen Van B',
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: 'pass',
}
];
const class2 = [{
    mssv: 'PS0002',
    name: 'Nguyen Van C',
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: 'failed',
}, {
    mssv: 'PS0003',
    name: 'Nguyen Van D',
    avgPoint: 10,
    avgTraningPoint: 10,
    status: 'pass',
},
{
    mssv: 'PS0004',
    name: 'Nguyen Van E',
    avgPoint: 10,
    avgTraningPoint: 2,
    status: 'pass',
},
]

const allStudents = class1.concat(class2);

const passedStudents = allStudents.filter(student => student.status === 'pass');

const sortedByAvgPoint = [...passedStudents].sort((a, b) => b.avgPoint - a.avgPoint);

const sortedByTrainingPoint = [...passedStudents].sort((a, b) => b.avgTraningPoint - a.avgTraningPoint);

const top100AvgPoint = sortedByAvgPoint.slice(0, 100);

const top10TrainingPoint = sortedByTrainingPoint.slice(0, 10);

const ongVang = sortedByAvgPoint[0];

console.log('Danh sách sinh viên theo điểm số từ cao xuống thấp:', top100AvgPoint);
console.log('Danh sách sinh viên theo điểm rèn luyện từ cao xuống thấp:', top10TrainingPoint);
console.log('Thông tin Ong Vàng:', ongVang);