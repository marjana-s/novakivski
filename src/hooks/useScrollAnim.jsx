import {useState} from "react";

export const useScrollAnim = () => {
    const [scrolled, setScrolled] = useState(false);
    const scrollAnim = () =>{
        
        const scrolling = () => {
          const currentScroll = window.scrollY;
        if (currentScroll > 800 && currentScroll <= 5400) {
        setScrolled(true);
        } else if( currentScroll > 6500 &&  currentScroll <= 9800){
        setScrolled(true);
        }else if( currentScroll > 10900 && currentScroll <= 20400 ){
        setScrolled(true);
        }else if( currentScroll > 21600 && currentScroll <= 32400 ){
        setScrolled(true);
        }else if( currentScroll > 33400  ){
        setScrolled(true);
        }
        else  {
        setScrolled(false);
        } 
         };
        window.addEventListener("scroll", scrolling);
        return () => {
        window.removeEventListener("scroll", scrolling);
    };
    }
    
  return [scrollAnim,scrolled];
}