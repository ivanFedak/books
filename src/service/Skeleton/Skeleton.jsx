
import './skeleton.sass';

const Skeleton = () => {

    const arr = [0,1,2,4,5,6,7,8,9,10,11,12];


    const skeleton = arr.map(item=>(
        <div key={item} className="skeleton">
            <div className="skeleton__poster"></div>
            <div className="skeleton__content">
                <div className="skeleton__title"></div>   
                <div className="skeleton__text"></div> 
            </div>
        </div>  
    ))


    return (<>
        {skeleton}
    </>)
}

export default Skeleton;