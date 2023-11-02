import Buttontype1 from '../../buttons/buttontype1/buttontype1';
import './cardtype1.css';
import { Link } from 'react-router-dom';

function Cardtype1({ amountLabel = '', cardAmount = '', btn1Label = '',btn1Link = '', btn1ImgUrl = '', btn2Label = '', btn2Link = '', btn2ImgUrl = '', btn3Label = '', btn3ImgUrl = '', btn3Link = '' }) {
    return (
        <div className='cardType1MainContainer'>
            <div className='amountLabel'>{amountLabel}</div>
            <div className='cardType1Amount'>{cardAmount}</div>
            <div className='cardtype1ButtonContainer'>
                {btn1Label && btn1ImgUrl && (
                    <Link style={{textDecoration:"none"}} to={`${btn1Link}`} >
                    <Buttontype1 btn1Label={btn1Label} imgUrl={btn1ImgUrl} />
                    </Link>
                )}
                {btn2Label && btn2ImgUrl && (
                    <Link style={{textDecoration:"none"}} to={`${btn2Link}`} >
                    <Buttontype1 btn1Label={btn2Label} imgUrl={btn2ImgUrl} />
                    </Link>
                )}
                {btn3Label && btn3ImgUrl && (
                    <Link style={{textDecoration:"none"}} to={`${btn3Link}`} >
                    <Buttontype1 btn1Label={btn3Label} imgUrl={btn3ImgUrl} />
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Cardtype1;
