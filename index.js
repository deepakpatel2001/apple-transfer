const left = document.querySelector('.left');
const right = document.querySelector('.right');
const leftArrow = document.querySelector('.leftArrow');
const rightArrow = document.querySelector('.rightArrow');

let totalApple = 10;
left.innerHTML = totalApple;

let rightCount = 0;
rightArrow.addEventListener('click', () => {
    if (totalApple > 0) {
        rightCount++;
        right.innerHTML = rightCount;
        totalApple--;
        left.innerHTML = totalApple;
    }

    if (rightCount >= 10) {
        rightCount = 10;
    }
});

let leftCount = 0;
leftArrow.addEventListener('click', () => {
    if (rightCount > 0) {
        leftCount++;
        left.innerHTML = leftCount;
        rightCount--;
        right.innerHTML = rightCount;
    }

    if (leftCount >= 10) {
        rightCount = 0;
        totalApple = 10;
        leftCount = 0
    }
});
