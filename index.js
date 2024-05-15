//დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა რიცხვის ჯამი.
let array = [1, 2, 3, 4, 5]
let sum = 0;
for(let i = 0;i <= array.length;i++){
    sum = sum + i
}
console.log(sum)

//დაწერეთ პროგრამა მასივში რიცხვების საშუალოს საპოვნელად.
let array = [1, 2, 3, 4, 5]
let average = 0
for(let i = 0;i <= array.length;i++){
    average = average + i / array.length
}
console.log(average)

//დაწერეთ პროგრამა მასივში ყველაზე დიდი ელემენტის მოსაძებნად.
let array = [10, 20, 30, 50, 100]
let largestNumber = 0
for(let i = 0;i < array.length;i++){
    if(largestNumber < array[i]){
        largestNumber = array[i]
    }
}
console.log(largestNumber)
//დაწერეთ პროგრამა მასივის ყველაზე პატარა ელემენტის მოსაძებნად.
let array = [10, 20, 30, 40,]
let lessNumber = array[0]
for(let i = 0;i < array.length;i++){
    if(lessNumber > array[i]){
        lessNumber = array[i]
    }
}
console.log(lessNumber)

//დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.
let array = ['nika','gio','sergi','sandro']
let newArray = array.pop()
console.log(array)

//დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა ლუწი რიცხვის ჯამი.
let array = [1, 2, 3, 4, 5, 6,]
let sum = 0
for(let i = 2;i <= array.length;i = i + 2){
    sum = sum + i
}
console.log(sum)

//შექმენით ობიექტი სახელწოდებით car თვისებებით მარკის, მოდელისა და წლისთვის. დაბეჭდეთ ობიექტი კონსოლზე.
const car = {
    mark: 'BMW',
    model: 'M5',
    year: 2023
}
console.log(car)
//დაამატეთ მეთოდი car ობიექტს სახელწოდებით start, რომელიც ბეჭდავს "The car is starting!" როდესაც გამოძახება. გამოიძახეთ დაწყების მეთოდი.
car.start = 'The car is starting!'
console.log(car.start)

//შექმენით სხვა ობიექტი სახელად Person სახელის, ასაკისა და ქალაქის თვისებებით. დაბეჭდეთ სახელის თვისება წერტილის გამოყენებით.
let person = {
    name:'sergi',
    age: 18,
    city: 'Tbilisi'
}
console.log(person.name)
//დაამატეთ ახალი თვისება სახელწოდებით job, Person ობიექტს და მიანიჭეთ მას მნიშვნელობა. დაბეჭდეთ განახლებული ობიექტი
person.job = 'programmer'
console.log(person)

//დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.
arr = [100, 10, 200, 20, 30, 3000]
arr.sort((a,b)=>a-b)
console.log(arr)

//დაწერეთ პროგრამა რომ ორი სორტირებული მასივის შერთდეს და გახდეს ერთი მასივი რომელიც ასევე სორტირებული იქნება.
const arr1 = [1,2,3]
const arr2 = [4,5,6]
console.log(arr1.concat(arr2))
//დაწერეთ პროგრამა სტრიქონების მასივის ანბანის მიხედვით დასალაგებლად.
let str = ['abdu', 'sergi', 'nika','beka']
str.sort()
console.log(str)  

//დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა მასივი კონკრეტულ ელემენტს.
let array = [10, 20, 30, 40, 50]
let number = 30
if(array.includes(number)){
    console.log('შეიცავს')
}else{
    console.log('არ შეიცავს')
}
//დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.
let array1 = ['ronaldo','messi', 'iniesta','anry']
let array2 = ['rivaldo','puyol', 'villa','gaucho']
let array3 = ['maradona','messi', 'iniesta','bergcamp']
let newArray = array1.concat(array2,array3)
console.log(newArray)
const findElement = newArray.find()   // ვეღარ გავაგრძელე.(((
//დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა ორი მასივი ტოლი.
//დაწერეთ პროგრამა მასივში კონკრეტული ელემენტის გავრცელების რაოდენობის დასათვლელად.
//დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა ორი მასივი ტოლი.
///დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის მოსაძებნად.

