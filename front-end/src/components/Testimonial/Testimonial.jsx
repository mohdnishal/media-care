import React from 'react'
 import {Swiper,SwiperSlide} from 'swiper/react';
 import { Pagination } from 'swiper'
 import 'swiper/css'
 import 'swiper/css/pagination'
 import patientAvatar from '../../assets/images/patient-avatar.png'
 import sarah from '../../assets/images/sarah.png'
 import david from '../../assets/images/david.png'
 import emily from '../../assets/images/emily.png'
 import {HiStar} from 'react-icons/hi'
 
const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{clickable:true}}
        breakpoints={{
            640:{
                slidesPerView:1,
                spaceBetween:0,
            },
            768:{
                slidesPerView:2,
                spaceBetween:20,
            },
            1024:{
                slidesPerView:3,
                spaceBetween:30,
            },
        }} >
            
            
         <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={patientAvatar} alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                            John
                            </h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        "I have  taken medical services from them.They treat so well and they are 
                        providing the best medical services."
                    </p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={sarah} alt=""  className='rounded'/>
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                            Sarah 
                            </h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        "Exceptional care, compassionate staff. Grateful for their support during my recovery journey. Highly recommended!"
                    </p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={david} alt=""  className='rounded' />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                            David 
                            </h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        "Prompt service, friendly team. Doctors listened attentively and provided effective treatment. Satisfied with my experience."
                    </p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={emily} alt=""  className='rounded'/>
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                            Emily
                            </h4>
                            <div className="flex items-center gap-[2px]">
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        "Efficient and caring staff. The hospital exceeded my expectations. Thankful for their expertise and genuine concern."
                    </p>
                </div>
                </SwiperSlide>
               
               
    
 
                
    
            
        </Swiper>
  
    </div>
  )
}

export default Testimonial
