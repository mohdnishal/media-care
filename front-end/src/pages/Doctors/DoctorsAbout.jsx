import React from 'react'
import { FormateDate } from '../../utilis/FormateDate'
const DoctorsAbout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
            About Of 
            <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                Sunny
            </span>
        </h3>
        <p className='text_para'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nisi, qui, tempore quibusdam ipsam explicabo dolorem inventore beatae placeat rerum amet ratione minus hic obcaecati consectetur expedita voluptas deleniti. Maxime quis qui, veritatis corporis debitis praesentium recusandae rem? Cum, quas.
        </p>
      </div>
      <div className="mt-12">
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
        <ul className='pt-4 md:p-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{FormateDate('01-12-2012')}
                    -{FormateDate('01-12-2016')}</span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital,New York</p>
            </li>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{FormateDate('12-04-2010')}
                    -{FormateDate('12-04-2014')}</span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital,New York</p>
            </li>
           
        </ul>
      </div>
      <div className="mt-12">
      <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
      <ul className='grid sm:grid-cols-2 gap-[30p] pt-4 md:p-5'>
        <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
            {FormateDate('01-12-2012')}
                    -{FormateDate('01-12-2016')}
            </span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>sr . Surgeon</p>
            <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital,New York</p>


        </li>
        <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
            {FormateDate('01-12-2012')}
                    -{FormateDate('01-12-2016')}
            </span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>sr . Surgeon</p>
            <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital,New York</p>


        </li>
      </ul>
      </div>
    </div>
  )
}

export default DoctorsAbout
