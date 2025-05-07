import './card.css'
import img from '../../../../images/image-equilibrium.jpg'

export default function Card() {
    return(
        <>
        <div className="card-wrap">
            <div className="card">
                <div className="card-top">
                    <img src={img} alt="" srcset="" />
                </div>
                
            </div>
        </div>
        </>
    )
}