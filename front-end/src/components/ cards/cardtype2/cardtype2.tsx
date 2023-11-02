import Buttontype1 from '../../buttons/buttontype1/buttontype1';
import './cardtype2.css';
import { Link } from 'react-router-dom';

function CardType2({ cardDescription = '' ,cardMainLabel = '', cardAmount = '', btn1Label = '',btn1Link = '', btn1ImgUrl = '', btn2Label = '', btn2ImgUrl = '', btn3Label = '', btn3ImgUrl = '' }) {
    return (
        <div className='cardType1MainContainer'>
            <div className='amountLabel'>{cardMainLabel}</div>
          
            <div className='cardtype2ButtonContainer'>
                <div className='cardDescription'>
                    {cardDescription}
                </div>
                {btn1Label && btn1ImgUrl && (
                    <Link style={{textDecoration:"none"}} to={`${btn1Link}`} >
                    <Buttontype1 btn1Label={btn1Label} imgUrl={btn1ImgUrl} />
                    </Link>
                )}
                {btn2Label && btn2ImgUrl && (
                    <Link style={{textDecoration:"none"}} to={`${btn1Link}`} >
                    <Buttontype1 btn1Label={btn2Label} imgUrl={btn2ImgUrl} />
                    </Link>
                )}
                {btn3Label && btn3ImgUrl && (
                    <Link style={{textDecoration:"none"}} to={`${btn1Link}`} >
                    <Buttontype1 btn1Label={btn3Label} imgUrl={btn3ImgUrl} />
                    </Link>
                )}
            </div>
            <div className='cardType1Amount'>{cardAmount}</div>
        </div>
    );
}

export default CardType2;
