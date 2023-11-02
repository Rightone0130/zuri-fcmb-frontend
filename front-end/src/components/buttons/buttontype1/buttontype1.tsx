import './buttontype1.css'






function Buttontype1 ({btn1Label = '',imgUrl = '' }){




    return(

        <>
        <span className='buttontype1MainContainer'>
            
            <img style={{maxWidth:'1em',marginRight:'0.4em', maxHeight:'0.8em'}} src={imgUrl}/>
            <span>{btn1Label}</span>
        </span>
        
        
        </>
    )
}

export default Buttontype1 