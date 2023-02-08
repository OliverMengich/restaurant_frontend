import ratingStyles from './Rating.module.scss';
let ratingArr: number[]=new Array(5).fill(0);
interface RatingProps{
    rating: number
}
function RatingComponent({rating}: RatingProps){
    return(
        <>
            {rating?(<div className={ratingStyles.rating_stars}>
                {
                    ratingArr.slice(0,rating).map((_,i)=>{
                        return (
                            <h3 key={i}>&#9733;</h3>
                        );
                    })
                }{
                    ratingArr.slice(rating,ratingArr.length).map((_,i)=>{
                        return (
                            <h3 key={i}>
                                &#9734;
                            </h3>
                        );
                    })
                }
            </div>):''}
        </>
    )
}
export default RatingComponent;