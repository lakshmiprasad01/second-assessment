const output = () => {
  // return (
  //   (function () {
  //     "use strict";
  //     (".pCard_add").click(function () {
  //       (".pCard_card").toggleClass("pCard_on");
  //       (".pCard_add i").toggleClass("fa-minus");
  //     }); 
  //   })
  // )
}

const output1 = ()=>{
  return(
    document.querySelector(function () {
      "use strict";
      document.querySelector(".pCard_add").click(function () {
        document.querySelector(".pCard_card").classList.toggle("pCard_on");
        document.querySelector(".pCard_add i").classList.toggle("fa-minus");
      });
    })
    )
  }
  export default output1
