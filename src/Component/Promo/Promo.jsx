import './../Promo/Promo.css'
import FNS from './../../img/FNS.png'
import Perm from './../../img/Perm.png'
import Air from './../../img/Air.png'
import Crsr from './../../img/Coursor.svg'
import One from './../../img/One.png'
import {useInView} from 'react-intersection-observer'
import React from 'react'
function Promo () { 
    const [active,setActive] = React.useState(false)
    const {ref,inView}=useInView({
    
    });
    React.useEffect (()=> {
        if (inView) {
            setActive(true);
        }

    }, [inView]);
  
    return  <promo className='Promo'>
                <div className='container'>
                    <div className='Promo_text'><span className='pt'>ПЕРЕХОДИ </span>
                    <img className='crsr' src={Crsr} alt ="Crsr" ></img>
                    </div>
                    <div className='p'>НА НОВЫЙ УРОВЕНЬ</div>
                        <div className='Promo_text2'> В Пермском крае снижены <br/>налоги для бизнеса </div>
                            <dive className='Images'>
                                <img src={FNS} alt='Fns'></img>
                                <img src={Perm} alt='Perm'></img>
                                
                            </dive>
                                <div className='Air'> 
                                     <img src = {Air} alt= 'Air'></img>
                                </div>
                                <div className='Login_btn'>
                                    <a href="https://service.nalog.ru/gosreg/#ip" className='btn'>Зарегистрировать бизнес</a>
                                </div>
                                <div ref={ref} className={`BLock_1 ${active ? 'activeL': ''}`}>Зарегистрируй бизнес <br/>в Пермском крае <br/> и получи льготу
                                <a href='https://service.nalog.ru/gosreg/#ip' className='btn_'>Зарегистрировать бизнес</a>
                                </div>
                                    <div ref={ref}  className={`Block_2 ${active ? 'activeR': ''}`}>  <span className='T1'>ВМЕСТО 6% НА УСН </span>
                                        <img className='One' src={One} alt='One'></img>
                                     </div>
                                    
                </div>

    </promo>
        
    
}

export default Promo;