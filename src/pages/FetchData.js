import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Loader from '../component/Loader';
import { fetchDataAction } from '../redux/slicers/fetchDataSlicer';

const FetchData = () => {
    const { fethData, isLoading } = useSelector(state => state.fetchDataState);
    useEffect(() => {
        fetchDataAction();
    }, [])
    return (
        <div className="container">
            <div className="row">

                {isLoading && <Loader />}
                {fethData.map((e, i) => (
                    <div className="col-md-3 col-12" key={i}>
                        <div className="card my-3" style={{ width: '100%' }}>
                            <img src={e.url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{e.title}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FetchData