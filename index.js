let yourBirthDate = {
    Date : 22,
    Month: 3,
    Year : 2001

}
import AgeCalculator from "./AgeCalculator/AgeCalculator.js"
let yourAge = AgeCalculator(yourBirthDate.Date,yourBirthDate.Month,yourBirthDate.Year)
console.log(yourAge);

