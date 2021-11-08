function averageArray(grades) {
    let average = 0;
  
    for (let i = 0; i < grades.length; i++){ 
    
    average += grades[i]
    }

    average = average/grades.length
  
  return average
}

console.log(averageArray([25,26,27,28,29,30]))
