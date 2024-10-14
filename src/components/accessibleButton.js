const AButton = (props) => {
 
    const onClick = (props) => {
        console.log('Click!');
    }
    
    const onKeyDown = (event) => {
        event.preventDefault();
        if (event.key === 'Enter' || event.key === ' ') {
            onClick();
        }
    }
   
    return(  
        <div
            onClick={onClick}
            className='button'
            role='button'
            tabIndex='0'
            onKeyDown={onKeyDown}
        >
            {props.message}
        </div>
    );
}

export default AButton;