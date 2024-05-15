//დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა რიცხვის ჯამი.
// let array = [1, 2, 3, 4, 5]
// let sum = 0;
// for(let i = 0;i <= array.length;i++){
//     sum = sum + i
// }
// console.log(sum)

//დაწერეთ პროგრამა მასივში რიცხვების საშუალოს საპოვნელად.
// let array = [1, 2, 3, 4, 5]
// let average = 0
// for(let i = 0;i <= array.length;i++){
//     average = average + i / array.length
// }
// console.log(average)

//დაწერეთ პროგრამა მასივში ყველაზე დიდი ელემენტის მოსაძებნად.
// let array = [10, 20, 30, 50, 100]
// let largestNumber = 0
// for(let i = 0;i < array.length;i++){
//     if(largestNumber < array[i]){
//         largestNumber = array[i]
//     }
// }
// console.log(largestNumber)
//დაწერეთ პროგრამა მასივის ყველაზე პატარა ელემენტის მოსაძებნად.
// let array = [10, 20, 30, 40,]
// let lessNumber = array[0]
// for(let i = 0;i < array.length;i++){
//     if(lessNumber > array[i]){
//         lessNumber = array[i]
//     }
// }
// console.log(lessNumber)

//დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.
// let array = ['nika','gio','sergi','sandro']
// let newArray = array.pop()
// console.log(array)

//დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა ლუწი რიცხვის ჯამი.
// let array = [1, 2, 3, 4, 5, 6,]
// let sum = 0
// for(let i = 2;i <= array.length;i = i + 2){
//     sum = sum + i
// }
// console.log(sum)

//შექმენით ობიექტი სახელწოდებით car თვისებებით მარკის, მოდელისა და წლისთვის. დაბეჭდეთ ობიექტი კონსოლზე.
// const car = {
//     mark: 'BMW',
//     model: 'M5',
//     year: 2023
// }
// console.log(car)
//დაამატეთ მეთოდი car ობიექტს სახელწოდებით start, რომელიც ბეჭდავს "The car is starting!" როდესაც გამოძახება. გამოიძახეთ დაწყების მეთოდი.
// car.start = 'The car is starting!'
// console.log(car.start)

//შექმენით სხვა ობიექტი სახელად Person სახელის, ასაკისა და ქალაქის თვისებებით. დაბეჭდეთ სახელის თვისება წერტილის გამოყენებით.
// let person =/
//დაამატეთ ახალი თვისება სახელწოდებით job, Person ობიექტს და მიანიჭეთ მას მნიშვნელობა. დაბეჭდეთ განახლებული ობიექტი
// person.job = 'programmer'
// console.log(person)

//დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.
// arr = [100, 10, 200, 20, 30, 3000]
// arr.sort((a,b)=>a-b)
// console.log(arr)

//დაწერეთ პროგრამა რომ ორი სორტირებული მასივის შერთდეს და გახდეს ერთი მასივი რომელიც ასევე სორტირებული იქნება.
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// console.log(arr1.concat(arr2))
//დაწერეთ პროგრამა სტრიქონების მასივის ანბანის მიხედვით დასალაგებლად.
// let str = ['abdu', 'sergi', 'nika','beka']
// str.sort()
// console.log(str)  

//დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა მასივი კონკრეტულ ელემენტს.
// let array = [10, 20, 30, 40, 50]
// let number = 30
// if(array.includes(number)){
//     console.log('შეიცავს')
// }else{
//     console.log('არ შეიცავს')
// }

//დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა ორი მასივი ტოლი.
// let array1 = [1,2,3]
// let array2 = [4,5,6]
// if(array1 === array2){
//     console.log('ტოლია')
// }else{
//     console.log('aარ არის ტოლი')
//}
///დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის მოსაძებნად.
// let arr = [15,10,20,30]
// let highest = arr[0]
// let secondHighest= arr[0]
// for(let i = 0;i < arr.length;i++){
//     if(arr[i] > highest ){
//         secondHighest = highest
//         highest = arr[i]
//     }
// }
// console.log(highest,secondHighest) 

//დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.
// let array1 = ['ronaldo','messi', 'iniesta','anry']
// let array2 = ['rivaldo','puyol', 'iniesta','gaucho']
// let array3 = ['maradona','messi', 'iniesta','bergcamp']
// function commonElements(...args){
//     let result = []
//     for(let i = 0;i < args[0].length;i++ ){
//         if( args.every(item => item.indexOf (args[0][i]) !== -1 )){
//             result.push(args[0][i])
//         }
       
//     }
//     return result

// }
// console.log(commonElements(array1,array2,array3))
//დაწერეთ პროგრამა მასივში კონკრეტული ელემენტის გავრცელების რაოდენობის დასათვლელად.
// let array = [1, 3, 10, 3, 20, 10]
// function elementCount(array,el){
//     let counter = 0;
//     for(let i = 0;i<array.length;i++){
//         if(el === array[i] ){
//             counter++
//         }
//     }
//     return counter
// }
// console.log(elementCount(array,1))


