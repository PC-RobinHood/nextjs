import Slider from '../node_modules/react-slick';

function Carousel(){

    var settings = {
        dots: true
      };

      return (
<div className="container">
<Slider {...settings}>
  <div>
    <img src="http://placekitten.com/g/400/200" />
  </div>
  <div>
    <img src="http://placekitten.com/g/400/200" />
  </div>
  <div>
    <img src="http://placekitten.com/g/400/200" />
  </div>
  <div>
    <img src="http://placekitten.com/g/400/200" />
  </div>
</Slider>
<style jsx>
    {`

    `}
</style>
</div>
      )
}

export default Carousel





// const images = [
// 	'https://picsum.photos/400/300/?image=926',
// 	'https://picsum.photos/400/300/?image=925',
// 	'https://picsum.photos/400/300/?image=924',
// 	'https://picsum.photos/400/300/?image=923',
// 	'https://picsum.photos/400/300/?image=922',
// 	'https://picsum.photos/400/300/?image=921',
// ];

// function Carousel(){
//     return(
//         <div className="carousel__wrapper">
//         <div className="carousel__container">
//             {images.map((img, index) => {
//                 let className = 'carousel__image'
//                 if (index === currentIndex) className += ' active';
                
//                 return <img src={img} className={className} key={`img-${index}`} />;
//             })}
//         </div>
//         <div className="carousel__controls">
//             <button className="carousel__button" onClick={this.showPrevSet}><i className="fa fa-arrow-left"></i></button>
//             <button className="carousel__button" onClick={this.showNextSet}><i className="fa fa-arrow-right"></i></button>
//         </div>
//         <style jsx>{`
        
//         `}</style>
//     </div>
//     );
// }

// export default Carousel;