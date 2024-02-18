const arr = [
    [10, 15, 30, 55],
    [80, 30, 100, 35],
    [1, 5, 3, 20],
    [
        [10, 11, 33, 55],
        [81, 40, 10, 35],
        [5, 8, 9, 2]
    ]
];

const notas = [10, 15, 30, 55];

console.table(arr);
console.log(arr[3][2][1]);
console.log(Math.max(...notas)); // obter o maior valor, funcionar somente em array 1 dimensão