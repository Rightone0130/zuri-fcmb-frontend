
import './loanCard.css';

function LoanCard ({ cardDescription = '' ,cardMainLabel = '', cardAmount = '', cardUserAvaterUrl= ''}) {
    return (
        <div className='loanCardType1MainContainer'>
            <div className='loanTopContainer'>
            <div className='loanAmountLabel'> <img style={{maxWidth:'3em',marginRight:'0.5em', maxHeight:'2.9em'}}  src={cardUserAvaterUrl}/>  <span>{cardMainLabel}</span></div>
            <div className='cardStatus'>Active</div>

            </div>
   
          
            <div className=' loanButtonContainer'>
                <div className='loanCardDescription'>
                    {cardDescription}
                    
                </div>
                <div className='loanCard1Amount'>{cardAmount}</div>              
             </div>
             <div className='loanButtonContainer'>
                <div className='loanCardDescription'>
                    {cardDescription}
                    
                </div>
                <div className='loanCard1Amount'>{cardAmount}</div>              
             </div>
            
        </div>
    );
}

export default LoanCard;
