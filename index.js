document.getElementById("btnCalculo").onclick = function(){

   let a;
   let b;
   let c;
   let d;
   let e;
   let f;
   let g;
   let h;
   let i;
   let texto = `Você informou um dígito não binário, por favor, informe 1 ou 0`

   a = document.getElementById("cxTextoUm").value;

if(a.length == 1){
   switch(true){
      case a.charAt(0) == 1:
         b = Math.pow(a.charAt(0)*2,0);
         break;
      case a.charAt(0) == 0:
         b = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
                }
   
      if(a == 0 || a == 1){
         document.getElementById("calculoBinario").hidden = false;
         console.log(b);
         document.getElementById("calculoBinario").innerHTML = b;
                          }
      else{
         document.getElementById("calculoBinario").hidden = true;
         console.log(b);
         document.getElementById("calculoBinario").innerHTML = b;
          }
}

if(a.length == 2){
   switch(true){
      case a.charAt(0) == 1:
         b = Math.pow(a.charAt(0)*2,1);
         break;
      case a.charAt(0) == 0:
         b = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(1) == 1:
         c = Math.pow(a.charAt(1)*2,0);
         break;   
      case a.charAt(1) == 0:
         c = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }   
   if(a == 0 || a == 1){
      document.getElementById("calculoBinario").hidden = false;
      console.log(b+c);
      document.getElementById("calculoBinario").innerHTML = b+c;
                       }
   else{
      document.getElementById("calculoBinario").hidden = true;
      console.log(b+c);
      document.getElementById("calculoBinario").innerHTML = b + c;
       }
   
}

if(a.length == 3){
   switch(true){
      case a.charAt(0) == 1:
         b = Math.pow(a.charAt(0)*2,2);
         break;
      case a.charAt(0) == 0:
         b = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(1) == 1:
         c = Math.pow(a.charAt(1)*2,1);
         break;
      case a.charAt(1) == 0:
         c = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(2) == 1:
         d = Math.pow(a.charAt(1)*2,0);
         break;
      case a.charAt(2) == 0:
         d = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   if(a != 0 && a != 1){
      document.getElementById("calculoBinario").hidden = true;
      console.log(b+c+d); 
      document.getElementById("calculoBinario").innerHTML = b+c+d; 
                       }
   else{
      document.getElementById("calculoBinario").hidden = false;
      console.log(b+c+d); 
      document.getElementById("calculoBinario").innerHTML = b+c+d; 
      } 
}

if(a.length == 4){
   switch(true){
      case a.charAt(0) == 1:
         b = Math.pow(a.charAt(0)*2,3);
         break;
      case a.charAt(0) == 0:
         b = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(1) == 1:
         c = Math.pow(a.charAt(1)*2,2);
         break;
      case a.charAt(1) == 0:
         c = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(2) == 1:
         d = Math.pow(a.charAt(1)*2,1);
         break;
      case a.charAt(2) == 0:
         d = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(3) == 1:
         e = Math.pow(a.charAt(1)*2,0);
         break;
      case a.charAt(3) == 0:
         e = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
               
   if(a != 0 && a != 1){
      document.getElementById("calculoBinario").hidden = true;
      console.log(b+c+d+e); 
      document.getElementById("calculoBinario").innerHTML = b+c+d+e; 
                       }
   else{
      document.getElementById("calculoBinario").hidden = false; 
      console.log(b+c+d+e); 
      document.getElementById("calculoBinario").innerHTML = b+c+d+e; 
       }    
}

if(a.length == 5){
   switch(true){
      case a.charAt(0) == 1:
         b = Math.pow(a.charAt(0)*2,4);
         break;
      case a.charAt(0) == 0:
         b = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(1) == 1:
         c = Math.pow(a.charAt(1)*2,3);
         break;
      case a.charAt(1) == 0:
         c = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(2) == 1:
         d = Math.pow(a.charAt(1)*2,2);
         break;
      case a.charAt(2) == 0:
         d = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(3) == 1:
         e = Math.pow(a.charAt(1)*2,1);
         break;
      case a.charAt(3) == 0:
         e = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(4) == 1:
         f = Math.pow(a.charAt(1)*2,0);
         break;
      case a.charAt(4) == 0:
         f = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 

   if(a != 0 && a != 1){
      document.getElementById("calculoBinario").hidden = true;
      console.log(b+c+d+e+f);
      document.getElementById("calculoBinario").innerHTML = b + c + d + e + f;  
                        }
   else{
      document.getElementById("calculoBinario").hidden = false; 
      console.log(b+c+d+e+f);
      document.getElementById("calculoBinario").innerHTML = b + c + d + e + f;      
       }
}

if(a.length == 6){
   switch(true){
      case a.charAt(0) == 1:
         b = Math.pow(a.charAt(0)*2,5);
         break;
      case a.charAt(0) == 0:
         b = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(1) == 1:
         c = Math.pow(a.charAt(1)*2,4);
         break;
      case a.charAt(1) == 0:
         c = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(2) == 1:
         d = Math.pow(a.charAt(1)*2,3);
         break;
      case a.charAt(2) == 0:
         d = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(3) == 1:
         e = Math.pow(a.charAt(1)*2,2);
         break;
      case a.charAt(3) == 0:
         e = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(4) == 1:
         f = Math.pow(a.charAt(1)*2,1);
         break;
      case a.charAt(4) == 0:
         f = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(5) == 1:
         g = Math.pow(a.charAt(1)*2,1);
         break;
      case a.charAt(5) == 0:
         g = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
               
   if(a != 0 && a != 1){
      document.getElementById("calculoBinario").hidden = true;
      console.log(b+c+d+e+f+g);
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g;   
                        }
   else{
      document.getElementById("calculoBinario").hidden = false; 
      console.log(b+c+d+e+f+g);
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g;    
       }     
}

if(a.length == 7){
   switch(true){
      case a.charAt(0) == 1:
         b = Math.pow(a.charAt(0)*2,6);
         break;
      case a.charAt(0) == 0:
         b = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(1) == 1:
         c = Math.pow(a.charAt(1)*2,5);
         break;
      case a.charAt(1) == 0:
         c = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(2) == 1:
         d = Math.pow(a.charAt(1)*2,4);
         break;
      case a.charAt(2) == 0:
         d = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(3) == 1:
         e = Math.pow(a.charAt(1)*2,3);
         break;
      case a.charAt(3) == 0:
         e = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(4) == 1:
         f = Math.pow(a.charAt(1)*2,2);
         break;
      case a.charAt(4) == 0:
         f = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(5) == 1:
         g = Math.pow(a.charAt(1)*2,1);
         break;
      case a.charAt(5) == 0:
         g = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(5) == 1:
         h = Math.pow(a.charAt(1)*2,0);
         break;
      case a.charAt(5) == 0:
         h = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 

   if(a != 0 && a != 1){
      document.getElementById("calculoBinario").hidden = true;
      console.log(b+c+d+e+f+g+h); 
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g+h; 
                        }
   else{
      document.getElementById("calculoBinario").hidden = false; 
      console.log(b+c+d+e+f+g+h); 
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g+h;  
       }          
}

if(a.length == 8){
   switch(true){
      case a.charAt(0) == 1:
         b = Math.pow(a.charAt(0)*2,7);
         break;
      case a.charAt(0) == 0:
         b = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(1) == 1:
         c = Math.pow(a.charAt(1)*2,6);
         break;
      case a.charAt(1) == 0:
         c = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(2) == 1:
         d = Math.pow(a.charAt(1)*2,5);
         break;
      case a.charAt(2) == 0:
         d = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(3) == 1:
         e = Math.pow(a.charAt(1)*2,4);
         break;
      case a.charAt(3) == 0:
         e = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(4) == 1:
         f = Math.pow(a.charAt(1)*2,3);
         break;
      case a.charAt(4) == 0:
         f = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(5) == 1:
         g = Math.pow(a.charAt(1)*2,2);
         break;
      case a.charAt(5) == 0:
         g = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }  
   switch(true){
      case a.charAt(5) == 1:
         h = Math.pow(a.charAt(1)*2,1);
         break;
      case a.charAt(5) == 0:
         h = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(5) == 1:
         i = Math.pow(a.charAt(1)*2,1);
         break;
      case a.charAt(5) == 0:
         i = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }

   if(a != 0 && a != 1){
      document.getElementById("calculoBinario").hidden = true;
      console.log(b+c+d+e+f+g+h+i);   
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g+h+i; 
                        }
   else{
      document.getElementById("calculoBinario").hidden = false; 
      console.log(b+c+d+e+f+g+h+i);   
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g+h+i; 
       }      
}
}