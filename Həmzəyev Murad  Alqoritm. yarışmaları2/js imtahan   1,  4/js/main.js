'use strict'

                            // 1.1 

// function CalculateScore(midterm1, midterm2, final) {
//     if (typeof(midterm1) === "number" && typeof(midterm2) === "number" && typeof(final) === "number") {
//         midterm1 *= 0.3
//         midterm2 *= 0.3
//         final *= 0.4

//         let result = midterm1 + midterm2 + final

//          if (result > 0 & result <= 60) {
//             return "F"
//         }
//         else if (result > 60 & result <= 70) {
//             return "D"
//         }
//         else if (result > 70 & result <= 80) {
//             return "C"
//         }
//         else if (result > 80 & result <= 90) {
//             return "B"
//         }
//         else if (result > 90 & result <= 100) {
//             return "A"
//         }
//     }

//     else {
//         return "Daxil etdiyiniz deyer reqem deyil"
//     }
//  }

// console.log(CalculateScore(75, 85, 65));


                               //1.2

// function FinalScore(midterm1, midterm2) {

//      if (typeof(midterm1) === "number" && typeof(midterm2) === "number"){
//          midterm1 *= 0.3
//          midterm2 *= 0.3
//          let midtermsTotal = midterm1 + midterm2
//          let remainingScore = 61 - midtermsTotal;
//          let finalScore = remainingScore / 0.4;
    
//       if (finalScore <= 100 && finalScore >= 0) {
//        return finalScore;
//      } 
        
//      }

//      else {
//                  return "Daxil etdiyiniz deyer reqem deyil"
//          }
// }

//    console.log(FinalScore(40, 60));


                 //   2ci sual python       


                //  3cu sual python


                // 4cu sual 
            
function findShortestRoute(cargo, mesafe) {
  let a = [];
  for (let i = 0; i < mesafe.length; i++) {
    let mesafe1 = mesafe[i];
    let b = Math.sqrt(
      Math.pow(cargo[0] - mesafe1[0], 2) +
      Math.pow(cargo[1] - mesafe1[1], 2)
    );
    a.push({ index: i, b });
  }

  a.sort((c, d) => c.b - d.b);

  let result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(mesafe[a[i].index]);
  }

  return result;
}

let cargo = [-4, 8];
let mesafe = [[-2,7],[5,0],[7,-1],[8,3],[5,-1],[4,5],[2,8], [7,6],[4,1],[5,-2]];

console.log(findShortestRoute(cargo, mesafe));