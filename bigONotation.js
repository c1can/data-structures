//O(1)
const testArr = [2,3,10,20,35]
const takeFirst =  arr => arr.length > 0 ? arr[0] : 'Ingresa un dato al array'

const result = takeFirst(testArr)
console.log(result)


//0(N)
const getSum = arr => {
    let sum = 0

    for(let i = 0; i < arr.length; i++) {
        sum+= arr[i]
    }
    return sum
}

const result2 = getSum(testArr)
console.log(result2)



