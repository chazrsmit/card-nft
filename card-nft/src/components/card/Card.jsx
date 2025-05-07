import './card.css'
import img from '../../../../images/image-equilibrium.jpg'
import img2 from '../../../../images/icon-ethereum.svg'
import img3 from '../../../../images/icon-clock.svg'
import img4 from '../../../../images/image-avatar.png'

export default function Card() {
    return(
        <>
        <div className="card-wrap">
            <div className="card">
                <div className="card-top">
                    <img src={img} alt="" srcset="" />
                </div>
                <div className="card-body">
                    <div className="body-part1">
                        <h3>Equilibirum</h3>
                        <p className="p-light">Our equilibirum collection promotes balance and calm.</p>
                        <div className="bottom-row">
                            <div className="bottom-left">
                                <div className="img1">
                                    <img src={img2} alt="" />
                                </div>
                                <p className="p-turquoise">0.041 ETH</p>
                            </div>
                            <div className="bottom-right">
                                <div className="img2">
                                    <img src={img3} alt="" />
                                </div>
                                <p className="p-light">3 days left</p>
                            </div>
                        </div>
                    </div>
                    <div className="body-part2">
                        <div className="user-icon">
                            <img src={img4} alt="" />
                        </div>
                        <div>
                            <p className="copyright">Creation of <span>Jules Wyvern</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}