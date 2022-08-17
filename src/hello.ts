// https://pjchender.dev/react/guide-typescript-react-tips/

// let occupation: string; // 宣告 occupation 的型別為 string
// occupation = 817; // 想要把 occupation 的值帶入數值

let occupation: string = 'programmer'; // 宣告 occupation 的型別為 string，並且同時賦值
let height: number = 170; // 宣告 height 的型別為 number，並且同時賦值

// /* 宣告型別為物件 */
// const person: { name: string; age: number } = {
//   name: 'pjchender',
//   age: 32,
// };

/* 在 occupation 後有一個 ?，表示該屬性不一定要存在於該物件中 */
// const person: {
//   name: string;
//   age: number;
//   occupation?: string; // 在 : 前面加上 ? 表示該屬性不是必填
// } = {
//   name: 'pjchender',
//   age: 32,
// };
//console.log('person: ', person);
const luckyNumber: number[] = [4, 7, 11];

const greet = 'Hello TypeScript';
console.log(greet);


// const add = (x: number, y: number): number => {
//   return x + y;
// };
// console.log(add('3', 5)); // 8

// const add = ({ x, y }: { x: number; y: number }): number => {
// 	return x + y;
// };
// add({ x: 3, y: 5 });
// /* 函式不會有回傳值時使用 void */
const add = (x: number, y: number): void => {
  console.log(x + y);
};
add(3, 5);

interface Hardware {
	RAM: string;
	CPU: string;
}
const hardware: Hardware = {
	RAM: '4GB',
	CPU: 'A13',
};
console.log('hardware: ', hardware);


interface MobilePhone extends Software, Hardware {
	price: number;
	brand: string;
}
interface Software {
	platform: string;
	releasedAt: string;
}
const iphone11: MobilePhone = {
  price: 24900,
  brand: 'apple',
  platform: 'ios',
  releasedAt: '20190919',
  RAM: '4GB',
  CPU: 'A13',
};
console.log('iphone11: ', iphone11);

