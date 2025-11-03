const products = [
  { id: 1, name: "Laptop", price: 5 },
  { id: 2, name: "Mouse", price: 5 },
  { id: 3, name: "Keyboard", price: 5 },
  { id: 4, name: "Monitor", price: 5 },
  { id: 5, name: "USB Cable", price: 5 },
]

const subTotal=products.reduce((acc,item)=>acc+item?.price,0)
console.log(subTotal);




const players = [
  { id: 1, name: "Shihab", score: 45 },
  { id: 2, name: "Mitu", score: 55 },
  { id: 3, name: "hello", score: 60 },
  { id: 4, name: "Rahim", score: 35 },
  { id: 5, name: "Karim", score: 50 },
];

const bestScrorer=players.reduce((bestPlayer,player)=>{
  if(bestPlayer?.score>player?.score){
    return bestPlayer
  }
  return player
},players[0])

console.log(bestScrorer);