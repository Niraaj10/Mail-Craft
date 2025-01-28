import React from 'react'
import { Carousel } from "./ui/Carousel";

const Testimonials = () => {
    const slideData = [
        {
          name: "John Smith",
          review: "This platform is amazing! The customer service is excellent, and I love how user-friendly everything is.",
          stars: "5",
          avatarSrc: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images.png"
        },
        {
          name: "Emily Johnson",
          review: "Great experience! The tools provided saved me so much time, and the results are fantastic.",
          stars: "4",
          avatarSrc: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png"
        },
        {
          name: "Michael Brown",
          review: "Highly recommend! I was able to create professional-quality work without any prior experience.",
          stars: "5",
          avatarSrc: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Free-Download-PNG.png"
        },
        {
          name: "Sophia Davis",
          review: "Impressive selection of resources and templates. Helped me achieve exactly what I envisioned.",
          stars: "4",
          avatarSrc: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Free-PNG-Image.png"
        },
        {
          name: "William Taylor",
          review: "The best platform I've used so far! It’s intuitive and the quality is outstanding.",
          stars: "5",
          avatarSrc: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Free-Photo.png"
        }
      ];
      


  return (
    <section className='Testimonioals h-[90vh] w-[98vw] overflow-hidden flex flex-col justify-center items-center'>
        <div className='my-10'>
        <h1 className='text-4xl poppins font-semibold p-4 m-2'>Customer Reviews</h1>
        <p>These templates transformed our email marketing strategy!</p>
        </div>
        <Carousel slides={slideData} /> 
    </section>
  )
}

export default Testimonials
