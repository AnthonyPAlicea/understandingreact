function countDown(num) {
    console.log(num);

    if (num === 0) return;

    countDown(num - 1);
}

countDown(5);