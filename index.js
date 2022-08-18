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
   let j;
   let k;
   let l;
   let m;
   let n;
   let o;
   let p;
   let q;
   let r;
   let s;
   let t;
   let u;
   let v;
   let x;
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
         console.log(b);
         document.getElementById("calculoBinario").innerHTML = b;
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

      console.log(b+c);
      document.getElementById("calculoBinario").innerHTML = b+c;

   
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
         d = Math.pow(a.charAt(2)*2,0);
         break;
      case a.charAt(2) == 0:
         d = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 

      console.log(b+c+d); 
      document.getElementById("calculoBinario").innerHTML = b+c+d; 

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
         d = Math.pow(a.charAt(2)*2,1);
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
         e = Math.pow(a.charAt(3)*2,0);
         break;
      case a.charAt(3) == 0:
         e = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
               

      console.log(b+c+d+e); 
      document.getElementById("calculoBinario").innerHTML = b+c+d+e; 
                       

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
         d = Math.pow(a.charAt(2)*2,2);
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
         e = Math.pow(a.charAt(3)*2,1);
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
         f = Math.pow(a.charAt(4)*2,0);
         break;
      case a.charAt(4) == 0:
         f = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
      console.log(b+c+d+e+f);
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f;  

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
         d = Math.pow(a.charAt(2)*2,3);
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
         e = Math.pow(a.charAt(3)*2,2);
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
         f = Math.pow(a.charAt(4)*2,1);
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
         g = Math.pow(a.charAt(5)*2,0);
         break;
      case a.charAt(5) == 0:
         g = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 

      console.log(b+c+d+e+f+g);
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g;   
                        
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
         d = Math.pow(a.charAt(2)*2,4);
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
         e = Math.pow(a.charAt(3)*2,3);
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
         f = Math.pow(a.charAt(4)*2,2);
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
         g = Math.pow(a.charAt(5)*2,1);
         break;
      case a.charAt(5) == 0:
         g = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(6) == 1:
         h = Math.pow(a.charAt(6)*2,0);
         break;
      case a.charAt(6) == 0:
         h = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 

      console.log(b+c+d+e+f+g+h); 
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g+h; 
       
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
         d = Math.pow(a.charAt(2)*2,5);
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
         e = Math.pow(a.charAt(3)*2,4);
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
         f = Math.pow(a.charAt(4)*2,3);
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
         g = Math.pow(a.charAt(5)*2,2);
         break;
      case a.charAt(5) == 0:
         g = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }  
   switch(true){
      case a.charAt(6) == 1:
         h = Math.pow(a.charAt(6)*2,1);
         break;
      case a.charAt(6) == 0:
         h = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(7) == 1:
         i = Math.pow(a.charAt(7)*2,0);
         break;
      case a.charAt(7) == 0:
         i = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }

      console.log(b+c+d+e+f+g+h+i);   
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g+h+i; 
                           
}

if(a.length == 9){
   switch(true){
      case a.charAt(0) == 1:
         b = Math.pow(a.charAt(0)*2,8);
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
         c = Math.pow(a.charAt(1)*2,7);
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
         d = Math.pow(a.charAt(2)*2,6);
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
         e = Math.pow(a.charAt(3)*2,5);
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
         f = Math.pow(a.charAt(4)*2,4);
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
         g = Math.pow(a.charAt(5)*2,3);
         break;
      case a.charAt(5) == 0:
         g = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }  
   switch(true){
      case a.charAt(6) == 1:
         h = Math.pow(a.charAt(6)*2,2);
         break;
      case a.charAt(6) == 0:
         h = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(7) == 1:
         i = Math.pow(a.charAt(7)*2,1);
         break;
      case a.charAt(7) == 0:
         i = 0;
         break;
               }
   switch(true){
      case a.charAt(8) == 1:
         j = Math.pow(a.charAt(8)*2,0);
         break;
      case a.charAt(8) == 0:
         j = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }

      console.log(b+c+d+e+f+g+h+i+j);   
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g+h+i+j; 
                           
}

if(a.length == 10){
   switch(true){
      case a.charAt(0) == 1:
         b = Math.pow(a.charAt(0)*2,9);
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
         c = Math.pow(a.charAt(1)*2,8);
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
         d = Math.pow(a.charAt(2)*2,7);
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
         e = Math.pow(a.charAt(3)*2,6);
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
         f = Math.pow(a.charAt(4)*2,5);
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
         g = Math.pow(a.charAt(5)*2,4);
         break;
      case a.charAt(5) == 0:
         g = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }  
   switch(true){
      case a.charAt(6) == 1:
         h = Math.pow(a.charAt(6)*2,3);
         break;
      case a.charAt(6) == 0:
         h = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(7) == 1:
         i = Math.pow(a.charAt(7)*2,2);
         break;
      case a.charAt(7) == 0:
         i = 0;
         break;
               }
   switch(true){
      case a.charAt(8) == 1:
         j = Math.pow(a.charAt(8)*2,1);
         break;
      case a.charAt(8) == 0:
         j = 0;
         break;
               }
   switch(true){
      case a.charAt(9) == 1:
         k = Math.pow(a.charAt(9)*2,0);
         break;
      case a.charAt(9) == 0:
         k = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }

      console.log(b+c+d+e+f+g+h+i+j+k);   
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g+h+i+j+k; 
                           
}

if(a.length == 11){
   switch(true){
      case a.charAt(0) == 1:
         b = Math.pow(a.charAt(0)*2,10);
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
         c = Math.pow(a.charAt(1)*2,9);
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
         d = Math.pow(a.charAt(2)*2,8);
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
         e = Math.pow(a.charAt(3)*2,7);
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
         f = Math.pow(a.charAt(4)*2,6);
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
         g = Math.pow(a.charAt(5)*2,5);
         break;
      case a.charAt(5) == 0:
         g = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }  
   switch(true){
      case a.charAt(6) == 1:
         h = Math.pow(a.charAt(6)*2,4);
         break;
      case a.charAt(6) == 0:
         h = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(7) == 1:
         i = Math.pow(a.charAt(7)*2,3);
         break;
      case a.charAt(7) == 0:
         i = 0;
         break;
               }
   switch(true){
      case a.charAt(8) == 1:
         j = Math.pow(a.charAt(8)*2,2);
         break;
      case a.charAt(8) == 0:
         j = 0;
         break;
               }
   switch(true){
      case a.charAt(9) == 1:
         k = Math.pow(a.charAt(9)*2,1);
         break;
      case a.charAt(9) == 0:
         k = 0;
         break;
               }
   switch(true){
      case a.charAt(10) == 1:
         l = Math.pow(a.charAt(10)*2,0);
         break;
      case a.charAt(10) == 0:
         l = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }

      console.log(b+c+d+e+f+g+h+i+j+k+l);   
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g+h+i+j+k+l; 
                           
}

if(a.length == 12){
   switch(true){
      case a.charAt(0) == 1:
         b = Math.pow(a.charAt(0)*2,11);
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
         c = Math.pow(a.charAt(1)*2,10);
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
         d = Math.pow(a.charAt(2)*2,9);
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
         e = Math.pow(a.charAt(3)*2,8);
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
         f = Math.pow(a.charAt(4)*2,7);
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
         g = Math.pow(a.charAt(5)*2,6);
         break;
      case a.charAt(5) == 0:
         g = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }  
   switch(true){
      case a.charAt(6) == 1:
         h = Math.pow(a.charAt(6)*2,5);
         break;
      case a.charAt(6) == 0:
         h = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(7) == 1:
         i = Math.pow(a.charAt(7)*2,4);
         break;
      case a.charAt(7) == 0:
         i = 0;
         break;
               }
   switch(true){
      case a.charAt(8) == 1:
         j = Math.pow(a.charAt(8)*2,3);
         break;
      case a.charAt(8) == 0:
         j = 0;
         break;
               }
   switch(true){
      case a.charAt(9) == 1:
         k = Math.pow(a.charAt(9)*2,2);
         break;
      case a.charAt(9) == 0:
         k = 0;
         break;
               }
   switch(true){
      case a.charAt(10) == 1:
         l = Math.pow(a.charAt(10)*2,1);
         break;
      case a.charAt(10) == 0:
         l = 0;
         break;
      }
   switch(true){
      case a.charAt(11) == 1:
         m = Math.pow(a.charAt(11)*2,0);
         break;
      case a.charAt(11) == 0:
         m = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }

      console.log(b+c+d+e+f+g+h+i+j+k+l+m);   
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g+h+i+j+k+l+m; 
                           
}

if(a.length == 13){
   switch(true){
      case a.charAt(0) == 1:
         b = Math.pow(a.charAt(0)*2,12);
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
         c = Math.pow(a.charAt(1)*2,11);
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
         d = Math.pow(a.charAt(2)*2,10);
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
         e = Math.pow(a.charAt(3)*2,9);
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
         f = Math.pow(a.charAt(4)*2,8);
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
         g = Math.pow(a.charAt(5)*2,7);
         break;
      case a.charAt(5) == 0:
         g = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }  
   switch(true){
      case a.charAt(6) == 1:
         h = Math.pow(a.charAt(6)*2,6);
         break;
      case a.charAt(6) == 0:
         h = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(7) == 1:
         i = Math.pow(a.charAt(7)*2,5);
         break;
      case a.charAt(7) == 0:
         i = 0;
         break;
               }
   switch(true){
      case a.charAt(8) == 1:
         j = Math.pow(a.charAt(8)*2,4);
         break;
      case a.charAt(8) == 0:
         j = 0;
         break;
               }
   switch(true){
      case a.charAt(9) == 1:
         k = Math.pow(a.charAt(9)*2,3);
         break;
      case a.charAt(9) == 0:
         k = 0;
         break;
               }
   switch(true){
      case a.charAt(10) == 1:
         l = Math.pow(a.charAt(10)*2,2);
         break;
      case a.charAt(10) == 0:
         l = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(11) == 1:
         m = Math.pow(a.charAt(11)*2,1);
         break;
      case a.charAt(11) == 0:
         m = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   
   switch(true){
      case a.charAt(12) == 1:
         n = Math.pow(a.charAt(12)*2,0);
         break;
      case a.charAt(12) == 0:
         n = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
      console.log(b+c+d+e+f+g+h+i+j+k+l+m+n);   
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g+h+i+j+k+l+m+n; 
                           
}

if(a.length == 14){
   switch(true){
      case a.charAt(0) == 1:
         b = Math.pow(a.charAt(0)*2,13);
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
         c = Math.pow(a.charAt(1)*2,12);
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
         d = Math.pow(a.charAt(2)*2,11);
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
         e = Math.pow(a.charAt(3)*2,10);
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
         f = Math.pow(a.charAt(4)*2,9);
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
         g = Math.pow(a.charAt(5)*2,8);
         break;
      case a.charAt(5) == 0:
         g = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }  
   switch(true){
      case a.charAt(6) == 1:
         h = Math.pow(a.charAt(6)*2,7);
         break;
      case a.charAt(6) == 0:
         h = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(7) == 1:
         i = Math.pow(a.charAt(7)*2,6);
         break;
      case a.charAt(7) == 0:
         i = 0;
         break;
               }
   switch(true){
      case a.charAt(8) == 1:
         j = Math.pow(a.charAt(8)*2,5);
         break;
      case a.charAt(8) == 0:
         j = 0;
         break;
               }
   switch(true){
      case a.charAt(9) == 1:
         k = Math.pow(a.charAt(9)*2,4);
         break;
      case a.charAt(9) == 0:
         k = 0;
         break;
               }
   switch(true){
      case a.charAt(10) == 1:
         l = Math.pow(a.charAt(10)*2,3);
         break;
      case a.charAt(10) == 0:
         l = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(11) == 1:
         m = Math.pow(a.charAt(11)*2,2);
         break;
      case a.charAt(11) == 0:
         m = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(12) == 1:
         n = Math.pow(a.charAt(12)*2,1);
         break;
      case a.charAt(12) == 0:
         n = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(13) == 1:
         o = Math.pow(a.charAt(13)*2,0);
         break;
      case a.charAt(13) == 0:
         o = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
      console.log(b+c+d+e+f+g+h+i+j+k+l+m+n+o);   
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g+h+i+j+k+l+m+n+o; 
                           
}

if(a.length == 15){
   switch(true){
      case a.charAt(0) == 1:
         b = Math.pow(a.charAt(0)*2,14);
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
         c = Math.pow(a.charAt(1)*2,13);
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
         d = Math.pow(a.charAt(2)*2,12);
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
         e = Math.pow(a.charAt(3)*2,11);
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
         f = Math.pow(a.charAt(4)*2,10);
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
         g = Math.pow(a.charAt(5)*2,9);
         break;
      case a.charAt(5) == 0:
         g = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }  
   switch(true){
      case a.charAt(6) == 1:
         h = Math.pow(a.charAt(6)*2,8);
         break;
      case a.charAt(6) == 0:
         h = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(7) == 1:
         i = Math.pow(a.charAt(7)*2,7);
         break;
      case a.charAt(7) == 0:
         i = 0;
         break;
               }
   switch(true){
      case a.charAt(8) == 1:
         j = Math.pow(a.charAt(8)*2,6);
         break;
      case a.charAt(8) == 0:
         j = 0;
         break;
               }
   switch(true){
      case a.charAt(9) == 1:
         k = Math.pow(a.charAt(9)*2,5);
         break;
      case a.charAt(9) == 0:
         k = 0;
         break;
               }
   switch(true){
      case a.charAt(10) == 1:
         l = Math.pow(a.charAt(10)*2,4);
         break;
      case a.charAt(10) == 0:
         l = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(11) == 1:
         m = Math.pow(a.charAt(11)*2,3);
         break;
      case a.charAt(11) == 0:
         m = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(12) == 1:
         n = Math.pow(a.charAt(12)*2,2);
         break;
      case a.charAt(12) == 0:
         n = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(13) == 1:
         o = Math.pow(a.charAt(13)*2,1);
         break;
      case a.charAt(13) == 0:
         o = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(14) == 1:
         p = Math.pow(a.charAt(14)*2,0);
         break;
      case a.charAt(14) == 0:
         p = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
      console.log(b+c+d+e+f+g+h+i+j+k+l+m+n+o+p);   
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g+h+i+j+k+l+m+n+o+p; 
                           
}

if(a.length == 16){
   switch(true){
      case a.charAt(0) == 1:
         b = Math.pow(a.charAt(0)*2,15);
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
         c = Math.pow(a.charAt(1)*2,14);
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
         d = Math.pow(a.charAt(2)*2,13);
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
         e = Math.pow(a.charAt(3)*2,12);
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
         f = Math.pow(a.charAt(4)*2,11);
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
         g = Math.pow(a.charAt(5)*2,10);
         break;
      case a.charAt(5) == 0:
         g = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }  
   switch(true){
      case a.charAt(6) == 1:
         h = Math.pow(a.charAt(6)*2,9);
         break;
      case a.charAt(6) == 0:
         h = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(7) == 1:
         i = Math.pow(a.charAt(7)*2,8);
         break;
      case a.charAt(7) == 0:
         i = 0;
         break;
               }
   switch(true){
      case a.charAt(8) == 1:
         j = Math.pow(a.charAt(8)*2,7);
         break;
      case a.charAt(8) == 0:
         j = 0;
         break;
               }
   switch(true){
      case a.charAt(9) == 1:
         k = Math.pow(a.charAt(9)*2,6);
         break;
      case a.charAt(9) == 0:
         k = 0;
         break;
               }
   switch(true){
      case a.charAt(10) == 1:
         l = Math.pow(a.charAt(10)*2,5);
         break;
      case a.charAt(10) == 0:
         l = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(11) == 1:
         m = Math.pow(a.charAt(11)*2,4);
         break;
      case a.charAt(11) == 0:
         m = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(12) == 1:
         n = Math.pow(a.charAt(12)*2,3);
         break;
      case a.charAt(12) == 0:
         n = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(13) == 1:
         o = Math.pow(a.charAt(13)*2,2);
         break;
      case a.charAt(13) == 0:
         o = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(14) == 1:
         p = Math.pow(a.charAt(14)*2,1);
         break;
      case a.charAt(14) == 0:
         p = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(15) == 1:
         q = Math.pow(a.charAt(15)*2,0);
         break;
      case a.charAt(15) == 0:
         q = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
      console.log(b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+q);   
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+q; 
                           
}

if(a.length == 17){
   switch(true){
      case a.charAt(0) == 1:
         b = Math.pow(a.charAt(0)*2,16);
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
         c = Math.pow(a.charAt(1)*2,15);
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
         d = Math.pow(a.charAt(2)*2,14);
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
         e = Math.pow(a.charAt(3)*2,13);
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
         f = Math.pow(a.charAt(4)*2,12);
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
         g = Math.pow(a.charAt(5)*2,11);
         break;
      case a.charAt(5) == 0:
         g = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }  
   switch(true){
      case a.charAt(6) == 1:
         h = Math.pow(a.charAt(6)*2,10);
         break;
      case a.charAt(6) == 0:
         h = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(7) == 1:
         i = Math.pow(a.charAt(7)*2,9);
         break;
      case a.charAt(7) == 0:
         i = 0;
         break;
               }
   switch(true){
      case a.charAt(8) == 1:
         j = Math.pow(a.charAt(8)*2,8);
         break;
      case a.charAt(8) == 0:
         j = 0;
         break;
               }
   switch(true){
      case a.charAt(9) == 1:
         k = Math.pow(a.charAt(9)*2,7);
         break;
      case a.charAt(9) == 0:
         k = 0;
         break;
               }
   switch(true){
      case a.charAt(10) == 1:
         l = Math.pow(a.charAt(10)*2,6);
         break;
      case a.charAt(10) == 0:
         l = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(11) == 1:
         m = Math.pow(a.charAt(11)*2,5);
         break;
      case a.charAt(11) == 0:
         m = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(12) == 1:
         n = Math.pow(a.charAt(12)*2,4);
         break;
      case a.charAt(12) == 0:
         n = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(13) == 1:
         o = Math.pow(a.charAt(13)*2,3);
         break;
      case a.charAt(13) == 0:
         o = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(14) == 1:
         p = Math.pow(a.charAt(14)*2,2);
         break;
      case a.charAt(14) == 0:
         p = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(15) == 1:
         q = Math.pow(a.charAt(15)*2,1);
         break;
      case a.charAt(15) == 0:
         q = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
      switch(true){
         case a.charAt(16) == 1:
            s = Math.pow(a.charAt(16)*2,0);
            break;
         case a.charAt(16) == 0:
            s = 0;
            break;
         default:
            console.log("Tecle apenas 0 ou 1");
            alert(texto);
                  }
      console.log(b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+q+s);   
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+q+s; 
                           
}

if(a.length == 18){
   switch(true){
      case a.charAt(0) == 1:
         b = Math.pow(a.charAt(0)*2,17);
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
         c = Math.pow(a.charAt(1)*2,16);
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
         d = Math.pow(a.charAt(2)*2,15);
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
         e = Math.pow(a.charAt(3)*2,14);
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
         f = Math.pow(a.charAt(4)*2,13);
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
         g = Math.pow(a.charAt(5)*2,12);
         break;
      case a.charAt(5) == 0:
         g = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }  
   switch(true){
      case a.charAt(6) == 1:
         h = Math.pow(a.charAt(6)*2,11);
         break;
      case a.charAt(6) == 0:
         h = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(7) == 1:
         i = Math.pow(a.charAt(7)*2,10);
         break;
      case a.charAt(7) == 0:
         i = 0;
         break;
               }
   switch(true){
      case a.charAt(8) == 1:
         j = Math.pow(a.charAt(8)*2,9);
         break;
      case a.charAt(8) == 0:
         j = 0;
         break;
               }
   switch(true){
      case a.charAt(9) == 1:
         k = Math.pow(a.charAt(9)*2,8);
         break;
      case a.charAt(9) == 0:
         k = 0;
         break;
               }
   switch(true){
      case a.charAt(10) == 1:
         l = Math.pow(a.charAt(10)*2,7);
         break;
      case a.charAt(10) == 0:
         l = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(11) == 1:
         m = Math.pow(a.charAt(11)*2,6);
         break;
      case a.charAt(11) == 0:
         m = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(12) == 1:
         n = Math.pow(a.charAt(12)*2,5);
         break;
      case a.charAt(12) == 0:
         n = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(13) == 1:
         o = Math.pow(a.charAt(13)*2,4);
         break;
      case a.charAt(13) == 0:
         o = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(14) == 1:
         p = Math.pow(a.charAt(14)*2,3);
         break;
      case a.charAt(14) == 0:
         p = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(15) == 1:
         q = Math.pow(a.charAt(15)*2,2);
         break;
      case a.charAt(15) == 0:
         q = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(16) == 1:
         s = Math.pow(a.charAt(16)*2,1);
         break;
      case a.charAt(16) == 0:
         s = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(17) == 1:
         t = Math.pow(a.charAt(17)*2,0);
         break;
      case a.charAt(17) == 0:
         t = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
      console.log(b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+q+s+t);   
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+q+s+t; 
                           
}

if(a.length == 19){
   switch(true){
      case a.charAt(0) == 1:
         b = Math.pow(a.charAt(0)*2,18);
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
         c = Math.pow(a.charAt(1)*2,17);
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
         d = Math.pow(a.charAt(2)*2,16);
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
         e = Math.pow(a.charAt(3)*2,15);
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
         f = Math.pow(a.charAt(4)*2,14);
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
         g = Math.pow(a.charAt(5)*2,13);
         break;
      case a.charAt(5) == 0:
         g = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }  
   switch(true){
      case a.charAt(6) == 1:
         h = Math.pow(a.charAt(6)*2,12);
         break;
      case a.charAt(6) == 0:
         h = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(7) == 1:
         i = Math.pow(a.charAt(7)*2,11);
         break;
      case a.charAt(7) == 0:
         i = 0;
         break;
               }
   switch(true){
      case a.charAt(8) == 1:
         j = Math.pow(a.charAt(8)*2,10);
         break;
      case a.charAt(8) == 0:
         j = 0;
         break;
               }
   switch(true){
      case a.charAt(9) == 1:
         k = Math.pow(a.charAt(9)*2,9);
         break;
      case a.charAt(9) == 0:
         k = 0;
         break;
               }
   switch(true){
      case a.charAt(10) == 1:
         l = Math.pow(a.charAt(10)*2,8);
         break;
      case a.charAt(10) == 0:
         l = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(11) == 1:
         m = Math.pow(a.charAt(11)*2,7);
         break;
      case a.charAt(11) == 0:
         m = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(12) == 1:
         n = Math.pow(a.charAt(12)*2,6);
         break;
      case a.charAt(12) == 0:
         n = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(13) == 1:
         o = Math.pow(a.charAt(13)*2,5);
         break;
      case a.charAt(13) == 0:
         o = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(14) == 1:
         p = Math.pow(a.charAt(14)*2,4);
         break;
      case a.charAt(14) == 0:
         p = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(15) == 1:
         q = Math.pow(a.charAt(15)*2,3);
         break;
      case a.charAt(15) == 0:
         q = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(16) == 1:
         s = Math.pow(a.charAt(16)*2,2);
         break;
      case a.charAt(16) == 0:
         s = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(17) == 1:
         t = Math.pow(a.charAt(17)*2,1);
         break;
      case a.charAt(17) == 0:
         t = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(18) == 1:
         u = Math.pow(a.charAt(18)*2,0);
         break;
      case a.charAt(18) == 0:
         u = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
      console.log(b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+q+s+t+u);   
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+q+s+t+u; 
                           
}

if(a.length == 20){
   switch(true){
      case a.charAt(0) == 1:
         b = Math.pow(a.charAt(0)*2,19);
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
         c = Math.pow(a.charAt(1)*2,18);
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
         d = Math.pow(a.charAt(2)*2,17);
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
         e = Math.pow(a.charAt(3)*2,16);
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
         f = Math.pow(a.charAt(4)*2,15);
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
         g = Math.pow(a.charAt(5)*2,14);
         break;
      case a.charAt(5) == 0:
         g = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }  
   switch(true){
      case a.charAt(6) == 1:
         h = Math.pow(a.charAt(6)*2,13);
         break;
      case a.charAt(6) == 0:
         h = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(7) == 1:
         i = Math.pow(a.charAt(7)*2,12);
         break;
      case a.charAt(7) == 0:
         i = 0;
         break;
               }
   switch(true){
      case a.charAt(8) == 1:
         j = Math.pow(a.charAt(8)*2,11);
         break;
      case a.charAt(8) == 0:
         j = 0;
         break;
               }
   switch(true){
      case a.charAt(9) == 1:
         k = Math.pow(a.charAt(9)*2,10);
         break;
      case a.charAt(9) == 0:
         k = 0;
         break;
               }
   switch(true){
      case a.charAt(10) == 1:
         l = Math.pow(a.charAt(10)*2,9);
         break;
      case a.charAt(10) == 0:
         l = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(11) == 1:
         m = Math.pow(a.charAt(11)*2,8);
         break;
      case a.charAt(11) == 0:
         m = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               } 
   switch(true){
      case a.charAt(12) == 1:
         n = Math.pow(a.charAt(12)*2,7);
         break;
      case a.charAt(12) == 0:
         n = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(13) == 1:
         o = Math.pow(a.charAt(13)*2,6);
         break;
      case a.charAt(13) == 0:
         o = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(14) == 1:
         p = Math.pow(a.charAt(14)*2,5);
         break;
      case a.charAt(14) == 0:
         p = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(15) == 1:
         q = Math.pow(a.charAt(15)*2,4);
         break;
      case a.charAt(15) == 0:
         q = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(16) == 1:
         s = Math.pow(a.charAt(16)*2,3);
         break;
      case a.charAt(16) == 0:
         s = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(17) == 1:
         t = Math.pow(a.charAt(17)*2,2);
         break;
      case a.charAt(17) == 0:
         t = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(18) == 1:
         u = Math.pow(a.charAt(18)*2,1);
         break;
      case a.charAt(18) == 0:
         u = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
   switch(true){
      case a.charAt(19) == 1:
         v = Math.pow(a.charAt(19)*2,0);
         break;
      case a.charAt(19) == 0:
         v = 0;
         break;
      default:
         console.log("Tecle apenas 0 ou 1");
         alert(texto);
               }
      console.log(b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+q+s+t+u+v);   
      document.getElementById("calculoBinario").innerHTML = b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+q+s+t+u+v; 
                           
}
}