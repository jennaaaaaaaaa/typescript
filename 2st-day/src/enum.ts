enum Color {
  Red,
  Green,
  Blue,
} //자동으로 0,1,2라는 값을 갖게됨
let c: Color = Color.Green; //1

// console.log(c);

enum Colors {
  Red = 1,
  Green,
  Blue,
} //1부터 시작하겠다 1, 2, 3
let a: Colors = Colors.Green; //2

enum Colorsramdom {
  Red = 1,
  Green = 2,
  Blue = 4,
} //값을 줄 수도 있음
let b: Colorsramdom = Colorsramdom.Green; //2


enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName); // 값이 2인 'Green'이 출력됩니다.