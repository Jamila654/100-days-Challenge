const traditionalFunction = function (a:number, b:number) {
    return a + b;
  };
  

  const arrowFunction = (a:number, b:number) => a + b;
  
  console.log(traditionalFunction(5, 3));
  console.log(arrowFunction(5, 3));