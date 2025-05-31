// let rows=5;
// for(let i=1; i<=5; i++)
// {
// for(let b=1; b<=i; b++)
// {
//     document.write("*") 
//     }
//  document.write("<br>")
// // }


// let rows=5;
// for(let i=5; i>=1; i--)
// {
// for(let b=1; b<=i; b++)
// {
//     document.write("*") 
//     }
//  document.write("<br>")
// }

let rows=5;
for(let i=1; i<=5; i++)
{
 for(let j=1; j<=5; j++)
{
    if (i==1||i==5||j==1||j==5){
         document.write("*") 
    }
    else{
  document.write("&nbsp&nbsp")
      }
    }
  document.write("<br>")
}
