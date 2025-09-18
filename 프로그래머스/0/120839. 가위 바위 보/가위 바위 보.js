function solution(rsp) {
    var answer = '';
     const a = {
      2: 0,
      0: 5,
      5: 2,
    }
    const b = [...rsp]
    return answer = b.map((i) => a[i]).join("");
}