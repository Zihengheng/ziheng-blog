//二维数组中的查找
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
     var row = 0;
     var col = 0;
     var height = matrix.length;
     if (height ==0 ) return false
     var len = matrix[0].length;

     function searchL(row,col){
        for (let i = row;i < height; i++){
            if (matrix[i][col] == target) return true;
        };
        for (let j= col;j < len; j++){
            if (matrix[row][j] == target) return true;
        }
     }

     while (row < height && col < len){
        if (target == matrix[row][col]) return true;
        let rst = searchL(row,col);
        if (rst == true) return true; 
        row++;
        col++;
     }
     return false   
};
const m1 = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ];
const t1 = 5;
const t2 = 20;
// findNumberIn2DArray(m1,t2)
console.log(findNumberIn2DArray(m1,20));