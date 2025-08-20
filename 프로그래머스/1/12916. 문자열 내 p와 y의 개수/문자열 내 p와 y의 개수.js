function solution(s){
    let p = 0;
    let y = 0;
    
    Array.from(s.toLowerCase()).forEach((item) => {
        if (item === 'p') p ++;
        if (item === 'y') y ++;
    })
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return p === y ? true : false;;
}