import './transactionHistory.css'








function TransactionHistory ( { transUserName = '', transactionTime = '', transactAmount = '',trnsBankImgUrl = '' }){




    return(
        <>
        <div className='TransactionsMaincontainer'>

           
            <div className='transactionCard'>

                <div className='transaction'>
                    <img style={{maxWidth:'3em',marginRight:'1em', maxHeight:'4em'}} src={trnsBankImgUrl}/>

                    <div className=''>
                        <div>{transUserName}</div>
                        <div>{transactionTime}</div>
                    </div> 
                </div>

                <div>
                    {transactAmount}
                </div>

                
            </div>



        </div>
        
        
        </>
    )
}


export default TransactionHistory;