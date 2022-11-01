// #1. function statement
function hello (name:string, age: number): void {
    return;
}

function add (a:number, b: number): number {
    return a +b ;
}

const result: string = add(1,2); // add는 number 타입만 return되므로 result에 들어갈 수 없다.

// #2. function expression , array function
const addExp:(a:number,b:number) => number = function(a,b) { return a + b };

const addExp2:(a:number,b:number) => number = (a,b) => a + b;

// Union & Intersection
// Union - 여러 타입 중 하나
function printValue(value: number | string | string[]): void{
    console.log(value);
}
printValue(['2'])

// Intersection - 여러 타입을 결합
const man2 : {
    name: string,
    age: number,
} & {
    height: number,
    weight: number,
} = {
    age: 1,
    name: 'bae',
    height: 180,
    weight: 60,
}

// Type Alias 타입 이름 정의
type UnionType = number | string | string[];

function printValue2(value: UnionType): void{
    console.log(value);
}

type ManKind = {
    name: string;
    age: number;
} & {
    height: number;
    weight: number;
}

const mankind : ManKind = {
    name: 'bae',
    age: 1,
    height: 180,
    weight: 60,
}

// Interface - 객체에 제한되어 사용
interface IMankind {
    name: string;
    age: number;
    height: number;
    weight: number;
}

const mankindVer2: IMankind = {
    name: 'bae',
    age: 1,
    height: 180,
    weight: 60,
}