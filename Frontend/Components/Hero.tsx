import Image from 'next/image'
import { Button } from './Button'

export const Hero = () => {
  return (
    <div className=" w-full bg-yellow-500">
      <div className="md:mx-14">
        <div className="bg-hero-pattern  bg-contain bg-right-bottom bg-no-repeat md:bg-contain md:bg-right-bottom xl:bg-contain">
          <div className="z-2 mx-auto flex w-full flex-col justify-center">
            <div className="mx-auto flex flex-col px-8 pt-[33px] pb-[30px] md:px-0 lg:w-full xl:mx-10 xl:w-1/2">
              <div className="font-serif ">
                <h1 className="hidden text-[68px] font-semibold leading-[70px] md:block md:text-[70px] md:font-medium md:leading-[74px]">
                  Medium is a place to write, read, and connect
                </h1>
                <h1 className="text-[48px] font-medium leading-[50px] md:hidden">
                  Write, read, and connect
                </h1>
              </div>
              <div>
                <p className="w-[90%] pb-5 text-base font-light md:w-5/6 md:text-[18px] md:leading-[24px]">
                  It's easy and free to post your thinking on any topic and
                  connect with millions of readers.
                </p>
              </div>
              <div>
                <Button
                  className={
                    'rounded-full border-[1px] border-black bg-white px-5 py-2 md:py-2 md:px-6 md:text-base'
                  }
                  title={'Start Writing'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
