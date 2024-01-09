import './A.css'

export default function A({children,link}){

    return(
        <a href={link} className='linkT'>
            {children}
        </a>
        
    )
}