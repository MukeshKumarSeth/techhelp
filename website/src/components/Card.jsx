import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <>
                <div className="col-md-4">
                    <div className="card">
                        <img src={props.imgSrc} className="card-img-top" alt={props.imgSrc} />
                        <div className="card-body">
                            <h5 className="card-title">{props.Ctitle}</h5>
                            <p className="card-text">{props.CbodyText}</p>
                            <NavLink to={props.CbtnUrl} className="btn btn-primary">Get Start</NavLink>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default Card;