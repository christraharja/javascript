// derivative function
function derivative(c,p){
  c = c * p;// constant
  p = p - 1;// power
  console.log("the derivative is" +" "+ c +"x"+"^"+p);
}
// testing the derivative function
derivative(2,2)
derivative(6,3)
// integral calculator
function integral(c,a,b,p){
  // a is the upper bound
  // b is the lower bound
  p = p + 1; // power
  ans = ((c/p)*((a)**p)) - ((c/p)*((b)**p));
  console.log("the integral is" + " " + ans)
}
// testing the integral function
integral(2,5,2,1)
integral(3,2,1,2)
integral(1,3,2,1)