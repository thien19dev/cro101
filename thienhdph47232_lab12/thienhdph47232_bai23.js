const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    },2000);
});

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Error: some bug');
    },2000);
});

const getList = async () => await fetch('https://667f845ff2cb59c38dc9158f.mockapi.io/baiviet&#39');

async function handlePromisesSequentially() {
    try {
        const result = await Promise.all([firstPromise, secondPromise, getList()]);
        console.log('Thành công:', result);
    } catch (error) {
        console.log('Lỗi:', error);
    }
}
 
async function handlePromisesRegardless() {
    const promises = [firstPromise, secondPromise, getList()];
 
    const results = await Promise.allSettled(promises);
    
    
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`Promise ${index + 1} hoàn thành với kết quả:`, result.value);
        } else {
            console.log(`Promise ${index + 1} thất bại với lỗi:`, result.reason);
        }
    });

    console.log('Hoàn tất tất cả các Promise.');
}
 
handlePromisesSequentially();  
handlePromisesRegardless();  