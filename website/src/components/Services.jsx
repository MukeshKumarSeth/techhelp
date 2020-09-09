import React from 'react';
import Card from './Card';
import Cdata from './CardData';

const Services = () => {
    return (
        <>
            <div className="my-4">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="row gy-3">
                        {
                             Cdata.map((value,index)=>{
                                return <Card key={index} imgSrc={value.imgSrc} Ctitle={value.Ctitle} CbodyText={value.CbodyText} CbtnUrl={value.CbtnUrl}/>
                             })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;