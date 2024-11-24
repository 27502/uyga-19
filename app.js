// 1---------------------------------------------------------------- Pole Vault Starting Marks
{
    function startingMark(height){
       
          let m = (10.67 - 9.45) / (1.83 - 1.52); 
        
        
          let b = 9.45 - (m * 1.52);
        
          
          let startMark = m * height + b;
        
  
         return parseFloat(startMark.toFixed(2));
        }
}

// 2---------------------------------------------------------------- Unlucky Days
{
    function unluckyDays(year) {
        let count = 0;
      
        
        for (let month = 0; month < 12; month++) {
         
          let date = new Date(year, month, 13);
          
        
          if (date.getDay() === 5) {
            count++; 
          }
        }
      
        return count;
      }
}

// 3---------------------------------------------------------------- uild Tower
{
    function towerBuilder(floors) {
        let tower = [];
      
        for (let i = 1; i <= floors; i++) {
          let stars = '*'.repeat(2 * i - 1);
      
        
          let spaces = ' '.repeat(floors - i);
      
          tower.push(spaces + stars + spaces);
        }
      
        return tower;
      }
}

// 4---------------------------------------------------------------- Triangular Treasure
{
    function triangular(n) {
     
        if (n <= 0) {
          return 0;
        }
      
        
        return (n * (n + 1)) / 2;
      }
}

// 5---------------------------------------------------------------- You're a square!
{
    function isSquare(n) {
  
        if (n < 0) {
          return false;
        }
      
        let sqrt = Math.sqrt(n);
      
     
        return sqrt === Math.floor(sqrt);
      }
}

// 6---------------------------------------------------------------- L1: Bartender, drinks!
{
    function getDrinkByProfession(param){
        let n = param.toLowerCase();
        switch(n){
         case "jabroni":
              return "Patron Tequila";
            case "school counselor":
              return 	"Anything with Alcohol";
            case "programmer":
              return "Hipster Craft Beer";
            case "bike gang member":
              return "Moonshine";
            case "politician":
              return "Your tax dollars";
            case "rapper":
              return "Cristal";
            default:
              return "Beer";
          }
        }
}

// 7---------------------------------------------------------------- Reverse words
function reverseWords(str) {
    return str
      .split(' ') 
      .map(word => word.split('').reverse().join('')) 
      .join(' '); 
  }

  // Kub 7 kyu ishlaganim uchun tez 60 ball buldi orasida 6 kyu ham bor shu uchun 7 ta