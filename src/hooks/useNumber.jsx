import {useState} from "react";

export const useNumber = () => {
    const [number, setNumber] = useState(1872);
    const numberGrow = () =>{
        
        const numberIncrease = () => {
            const scrolled = window.pageYOffset;
            if (scrolled < 1700) {
              setNumber(1872);
            }
             else if (scrolled >= 1700 && scrolled <= 3000) {
              const diff = Math.round(10 * ((scrolled - 1700) / 1300)) ;
              setNumber(1872 + diff);
            } else if (scrolled > 3000 && scrolled <3300) {
              setNumber(1882);
            }else if(scrolled > 3300 && scrolled <= 4500){
              const diff = Math.round(6 * ((scrolled - 3300) / 1200)) ;
              setNumber(1882+diff)
            }else if(scrolled > 4600 && scrolled <= 5400){
              const diff = Math.round(4 * ((scrolled - 4600) / 800)) ;
              setNumber(1888+diff)
            } else if(scrolled > 6500 && scrolled <= 9500){
              const diff = Math.round(2 * ((scrolled - 6500) / 3000)) ;
              setNumber(1900+diff)
            }else if(scrolled > 11500 && scrolled <= 13300){
              const diff = Math.round(5 * ((scrolled - 11500) / 1800)) ;
              setNumber(1904+diff)
            }else if(scrolled > 13300 && scrolled <= 14700){
              const diff = Math.round(2 * ((scrolled - 13300) / 1700)) ;
              setNumber(1909+diff)
            }else if(scrolled > 14800 && scrolled <= 20400){
              const diff = Math.round(3 * ((scrolled - 14800) / 5600)) ;
              setNumber(1911+diff)
            }else if(scrolled > 21600 && scrolled <= 26400){
              const diff = Math.round(1 * ((scrolled - 21600) / 4800)) ;
              setNumber(1923+diff)
            }else if(scrolled > 26300 && scrolled <= 27500){
              const diff = Math.round(5 * ((scrolled - 26300) / 1200)) ;
              setNumber(1924+diff)
            }else if(scrolled > 27500 && scrolled <= 29200){
              const diff = Math.round(3 * ((scrolled - 27500) / 1700)) ;
              setNumber(1929+diff)
            }else if(scrolled > 29300 && scrolled <= 32500){
              const diff = Math.round(2 * ((scrolled - 29300) / 3200)) ;
              setNumber(1932+diff)
            }else if(scrolled > 33500 && scrolled <= 36700){
              const diff = Math.round(1 * ((scrolled - 33500) / 3200)) ;
              setNumber(1935+diff)
            }else if(scrolled > 36750 && scrolled <= 40000){
              const diff = Math.round(80 * ((scrolled - 36750) / 3250)) ;
              setNumber(1936+diff)
            }
            
            
          };
      
          window.addEventListener("scroll", numberIncrease);
      
          return () => {
            window.removeEventListener("scroll", numberIncrease);
          };
    }
    
  return [numberGrow,number];
}