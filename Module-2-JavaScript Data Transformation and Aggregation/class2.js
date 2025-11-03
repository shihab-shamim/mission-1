
// input data

const products = [
  { id: 1, productName: "Wireless Mouse", category: "Electronics", price: 850, rating: 4.5, stock: 120 },
  { id: 2, productName: "Bluetooth Headphone", category: "Electronics", price: 1500, rating: 4.2, stock: 80 },
  { id: 3, productName: "Mechanical Keyboard", category: "Electronics", price: 2200, rating: 4.8, stock: 60 },
  { id: 4, productName: "LED Monitor 24 inch", category: "Electronics", price: 12500, rating: 4.6, stock: 30 },
  { id: 5, productName: "Smart Watch", category: "Gadgets", price: 2500, rating: 4.3, stock: 75 },
  { id: 6, productName: "USB-C Charger", category: "Accessories", price: 750, rating: 4.1, stock: 150 },
  { id: 7, productName: "Phone Case", category: "Accessories", price: 300, rating: 4.0, stock: 200 },
  { id: 8, productName: "Laptop Backpack", category: "Bags", price: 1800, rating: 4.4, stock: 90 },
  { id: 9, productName: "Gaming Chair", category: "Furniture", price: 14500, rating: 4.7, stock: 25 },
  { id: 10, productName: "Table Lamp", category: "Home Decor", price: 950, rating: 4.2, stock: 110 },
  { id: 11, productName: "Water Bottle", category: "Home & Kitchen", price: 350, rating: 4.0, stock: 180 },
  { id: 12, productName: "Bluetooth Speaker", category: "Electronics", price: 2100, rating: 4.5, stock: 70 },
  { id: 13, productName: "Fitness Band", category: "Gadgets", price: 1950, rating: 4.3, stock: 65 },
  { id: 14, productName: "Wireless Earbuds", category: "Electronics", price: 2700, rating: 4.6, stock: 90 },
  { id: 15, productName: "Smartphone Stand", category: "Accessories", price: 500, rating: 4.1, stock: 130 },
  { id: 16, productName: "Portable SSD 1TB", category: "Electronics", price: 7800, rating: 4.9, stock: 40 },
  { id: 17, productName: "Office Desk", category: "Furniture", price: 9800, rating: 4.4, stock: 20 },
  { id: 18, productName: "Coffee Mug", category: "Home & Kitchen", price: 250, rating: 4.0, stock: 160 },
  { id: 19, productName: "Wireless Router", category: "Electronics", price: 3200, rating: 4.3, stock: 50 },
  { id: 20, productName: "Power Bank 10000mAh", category: "Gadgets", price: 1800, rating: 4.5, stock: 85 }
];

// output=> [{name:"phone",name:"smart watch"}]
//TODO process
//TODO  filter =>Electronics
//TODO sort by =>Rating
//TODO Slice =>first 3 (top 3)
//TODO map => transform object shape to {name:"name"}

const topElectronicsProducts=products.filter(item=>item?.category ==="Electronics").sort((a,b)=>b.rating-a.rating).slice(0,3).map(item=>{
    return{name:item?.productName}
 })
console.log(topElectronicsProducts);

