const num: number = 1;
const str: string = 'a';
const bool: boolean = true;

//array
const numArr: number[] = [1,2];
const boolArr: boolean[] = [true,false];

//object
const man:{
    name: string;
    age: number;
    married: boolean;
} = {
    name : 'Bae',
    age: 1,
    married: true,
}

//enum > 상수 설정하고 사용
enum GRADE{
    A,
    B,
    C,
    D,
    F,
}
const myGrade: GRADE = GRADE.A;

//any, unknown
let anyValue: any = 1;
anyValue = true // 타입 변형 가능
anyValue.hello() // 에러가 안남

let unknownValue : unknown = 1;
unknownValue = true
unknownValue.hello() // 에러가 남

//void, never > 함수 return 값으로 자주 사용
// void 는 return 값이 없어야 하고
// never는 return 값이 놓일 수 없는 상황이어야 한다. ex. throw, while(true)
function helloVoid(): void {
    return;
}

function helloNever(): never {
    while(true){

    }
    // throw 'Error'
}

// null, undefined
const nullValue: null = null;
const undefinedValue: undefined = undefined;

// npx tsc -p ./tsconfig.json 로 실행하면 js 파일로 변환되는데 비교해보기