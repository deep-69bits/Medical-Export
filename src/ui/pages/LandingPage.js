import logo from './m-2.jpeg'; // Tell webpack this JS file uses this image
import Carousel from 'react-bootstrap/Carousel';

const cards=[
    {
        id:1,
    },
    {
        id:2,
    },
    {
        id:3,
    },
    {
        id:4,
    },
    {
        id:5,
    },
    {
        id:5,
    },
    {
        id:6,
    },
    {
        id:7,
    },
    {
        id:8,
    },
    {
        id:9,
    },
    {
        id:10,
    },
]
export default () => {
    return (
        <>
        <div className="carousel   w-full mt-2 flex  overflow-x-auto">
  <div id="slide1" className="carousel-item flex-none relative  w-full">
    <img src="https://c1.wallpaperflare.com/preview/530/348/918/houseplant-plant-monstera-calm.jpg" className="w-full h-[900px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle text-white text-4xl">	&#11164;</a> 
        <p className='text-white w-[60%] m-auto text-center text-6xl text-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ipsa.</p>
      <a href="#slide2" className="btn btn-circle text-white text-4xl">&#11166;</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item  flex-none relative w-full">
    <img src="https://images.unsplash.com/photo-1493673272479-a20888bcee10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbnQlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80" className="w-full h-[900px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle text-white text-4xl">	&#11164;</a>
      <p className='text-white w-[60%] m-auto text-center text-6xl text-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ipsa.</p> 
      <a href="#slide3" className="btn btn-circle text-white text-4xl">&#11166;</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item flex-none relative w-full">
    <img src="https://c4.wallpaperflare.com/wallpaper/706/529/203/vaporwave-plants-hd-wallpaper-preview.jpg" className="w-full h-[900px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle text-white text-4xl">	&#11164;</a> 
      <p className='text-white w-[60%] m-auto text-center text-6xl text-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ipsa.</p>
      <a href="#slide4" className="btn btn-circle text-white text-4xl">&#11166;</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item flex-none relative w-full">
    <img src="https://c0.wallpaperflare.com/preview/667/601/289/grayscale-photo-of-succulent-plants.jpg" className="w-full h-[900px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle text-white text-4xl">	&#11164;</a> 
      <p className='text-white w-[60%] m-auto text-center text-6xl text-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ipsa.</p>
      <a href="#slide1" className="btn btn-circle text-white text-4xl">&#11166;</a>
    </div>
  </div>
</div>
        
           <h1 className='mt-10 mb-10 font-bold text-4xl m-auto w-[75%]'> Plants</h1>
            <div className=' w-[75%] m-auto h-[350px] w-full mt-2 flex  overflow-x-auto scrollbar-thin scrollbar-thumb-[#0099ff]   scrollbar-track-transparent '>
              {
                cards.map((item)=>{
                    return( 
                        <div key={item.id} className='flex-none w-[300px] h-[300px]  mx-10 md:pb-4   '>
                         <img src="https://media.istockphoto.com/id/1372896722/photo/potted-banana-plant-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=YUsWUtmmiNtJ0AmhT3mC0sgNfcK9c0DPnyoVFnXNChI=" className='w-full h-[90%]' alt="" />
                         <h3 className='text-black font-semibold'>Product Name </h3>
                        </div>
                    );
                })
              }
            </div>
        </>
    );
};
