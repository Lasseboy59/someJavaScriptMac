// students score, total possible score , grade
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

//  let studentGrade = function(score, maxScore){
//      let grade = (score/maxScore)*100
//      if(score >= 90 && score <= 100) {
//          return `${score}/${maxScore} -> You got a A (${grade}%) `
//      }else if (score >= 80 &&  score <= 89) {
//         return `${score}/${maxScore} -> You got a A (${grade}%) `
//      } else if ( score >= 70 && score <= 70) {
//         return `${score}/${maxScore} -> You got a A (${grade}%) `
//      } else if (score >= 60 && score <= 69) {
//         return `${score}/${maxScore} -> You got a A (${grade}%) `
//      } else if (score >= 0 && score <= 59) {
//         return `${score}/${maxScore} -> You got a A (${grade}%) `
//      }
//  }

//  console.log(studentGrade(65,100))


 const studentGrade = function(score, maxScore){
    const grade = (score / maxScore)*100
    let letter = ''
    if(score >= 90 && score <= 100) {
        letter = 'A'
    }else if (score >= 80 &&  score <= 89) {
       letter = 'B'
    } else if ( score >= 70 && score <= 70) {
       letter = 'C'
    } else if (score >= 60 && score <= 69) {
       letter = 'D'
    } else {
       letter = 'F'
    }
    return `${score}/${maxScore} -> You got a ${letter} (${grade}%) `
}

console.log(studentGrade(50,100))