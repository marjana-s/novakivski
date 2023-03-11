import {useState} from "react";

export const useScrollAnim = () => {
    const [scrolled, setScrolled] = useState(false);
    const scrollAnim = () =>{
        
        const scrolling = () => {
        if (window.scrollY > 800 && window.scrollY <= 5400) {
        setScrolled(true);
        } else if( window.scrollY > 6500 &&  window.scrollY <= 9500){
        setScrolled(true);
        }else if( window.scrollY > 10600 && window.scrollY <= 20400 ){
        setScrolled(true);
        }else if( window.scrollY > 21600 && window.scrollY <= 32400 ){
        setScrolled(true);
        }else if( window.scrollY > 33500  ){
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