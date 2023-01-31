export const decNum = () => ({type:"Decrement"})  //can also write like this

export const incNum = (num) => {
  return {
    type: "Increment",
    payLoad: num
  };
};
