// التمرين الاول //
const languages = ["HTML", 'CSS' , 'JavaScript' , 'PHP', "Swift","Java"]
const needed_languges = 3;
console.log("مرحباً بك في برنامج توظيف المبرمجين")
let name = prompt("ماهو أسمك");
let age = prompt("كم عمرك؟");
let experinece = parseInt(prompt("كم عدد سنوات خبرتك"));
console.log("لغات البرمجة:");
for (let i =1; i<= languages.length;i++){
    console.log(i + " . " + languages)
}
let skill1 = prompt("اختر لغة البرمجة التي تتقنها")
let skill2 = prompt("اختر لغة برمجة اخرى")
if (
    age > 25 &&
    age < 40 &&
    experinece > 3 
    (skill1==needed_languges || skill2== needed_languges )
) {
console.log ( "مقبول") 
}else {console.log("مرفوض") }

// التمرين الثاني //
function toCel(temperatures){
    for (let i = 0; i < temperatures.length;i++)
    {if (temperatures [i] > min_value ); {
        hot.push(temperatures[i]);
    }
}
return hot ;
} 
let feh_temp_array = [32,70,99, 106];
let threshold = 70 ;
let hot = [];
let result_array = [];
function logHottestDays(input_array, min_value){
    logger(toCell(logHottestDays(input_array, min_value)));

}
logHottestDays(feh_temp_array, threshold);
// التمرين الثالث //
function setGrades (){
    let gradeobtained = parseFloat(document.getElementById('enumerator').value);
   let gradepossible = parseFloat(document.getElementById('denominator').value);

   
   
       let numbergrade = ((gradeobtained / gradepossible)*100) ; document.getElementById('total').value = numbergrade;

   let lettergrade 
    
   if (numbergrade >= 90){
       document.getElementById('letter').value = "A";
   }
   
   else if(80 <= numbergrade ){
       document.getElementById('letter').value = "B";
   }
   
   
   
   else if( 70<= numbergrade){
       document.getElementById('letter').value = "C";
   }
   
   else if(60 <= numbergrade){
       document.getElementById('letter').value = "D";
   }
   
   else{
       document.getElementById('letter').value = "F";
   }
} ;
