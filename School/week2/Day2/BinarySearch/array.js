const array = [1, 1, 5, 123, 534, 134, 3424, 52452];

function binarySearch(array, findValue) {
    let left = 0;
    let right = array.length - 1;
    let mid = Math.floor((left + right) / 2);

    while (left < right) {
        if (array[mid] === findValue) return mid;

        // 찾는 값이 더 클 때
        if (array[mid] < findValue) left = mid + 1;
        // 찾는 값이 더 작을 때
        else right = mid - 1;

        // 증간값 재설정
        mid = Math.floor((left + right) / 2);
    }
    // 찾는 값 없음
    return -1;
}

console.log(binarySearch(array, 3424));
console.log(binarySearch(array, 534));
console.log(binarySearch(array, 535));
