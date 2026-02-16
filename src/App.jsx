import './App.css'
import image1 from './assets/stylized-cup-coffee-out-coffee-beans-flat-lay 1.png'
import image2 from './assets/coffee_blast.png'
import image3 from './assets/Rectangle 7.png'
import image4 from './assets/Rectangle 9.png'
import image5 from './assets/Rectangle 11.png'
import image6 from './assets/Rectangle 13.png'
import image7 from './assets/coffee-beans 1.png'
import image8 from './assets/badge 1.png'
import image9 from './assets/coffee-cup 1.png'
import image10 from './assets/best-price 1.png'
import image11 from './assets/coffee_blast (1).png'
// import image12 from './assets/Rectangle 16.png'
import image13 from './assets/cup.png'
import image14 from './assets/coffee_bean.png'
import image15 from './assets/Rectangle 16.png'
import image16 from './assets/Rectangle 9 (1).png'
import image17 from './assets/coffee_blast (3).png'
import image18 from './assets/coffee_blast (4).png'
import image19 from './assets/pngwing 1.png'
import image20 from './assets/pngwing 2.png'
import image21 from './assets/Rectangle 7 (1).png'
import image22 from './assets/Group 54.png'
import Components1 from './components/components1'
import Components2 from './components/components2'




function App() {

  return (
    <>

      <div className='header1'>
      <header className='max-w-325  m-auto p-5 flex items-center justify-between'>
      <h1 className='text-4xl clicker-script-regular text-white'>Bean Scene</h1>
      <nav className='text-white'>
        <ul className='flex items-center gap-10 font-medium'>
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <div className='flex items-center gap-10 text-white  font-medium '>
        <button className='cursor-pointer'>Sign In</button>
        <button className='bg-[#F9C06A] cursor-pointer text-[#1E1E1E] px-7.5 py-2 rounded-full'>SingUp</button>
      </div>
      </header>
      <div className='mt-7.5 max-w-325 m-auto p-5 flex flex-col items-start gap-5'>
        <p className='text-white text-[20px] font-serif '>We’ve got your morning covered with</p>
        <h2 className='clicker-script-regular2 text-white '>Coffee</h2>
        <p className='w-135 text-white text-[20px] font-serif'>It is best to start your day with a cup of coffee. Discover the
        best flavours coffee you will ever have. We provide the best
        for our customers.</p>
        <button className='bg-[#F9C06A] cursor-pointer text-[#1E1E1E] px-7.5 py-2 rounded-full font-bold'>Order Now</button>
      </div>
      </div>


      <div className='my-38 relative  max-w-325 m-auto p-5 flex items-center justify-between'>
          <div className='w-150 flex flex-col items-start gap-6'>
          <h3 className='text-[#603809] text-[48px] font-bold font-serif'>Discover the best coffee</h3>
          <p className='text-[#707070] text-[20px] font-serif'>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
          <button className='bg-[#F9C06A] cursor-pointer text-[#1E1E1E] px-7.5 py-2 rounded-full font-bold'>Learn More</button>
          </div>
          <img src={image1} alt="" />
          <img className='absolute right-260 top-100 ' src={image2} alt="" />
      </div>



      <div className='max-w-325  m-auto p-5 my-40'>
          <h4 className='text-[#603809] text-[48px] font-bold font-serif text-center py-5'>Enjoy a new blend of coffee style</h4>
          <p className='text-[#707070] text-[20px] font-serif text-center'>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
          <div className='flex items-center justify-between my-6'>
          <Components1 image={image3} name={"Cappuccino"} description={"Coffee 50% | Milk 50%"} price={"$8.50"} />
          <Components1 image={image4} name={"Chai Latte"} description={"Coffee 50% | Milk 50%"} price={"$8.50"} />
          <Components1 image={image5} name={"Macchiato"} description={"Coffee 50% | Milk 50%"} price={"$8.50"} />
          <Components1 image={image6} name={"Expresso"} description={"Coffee 50% | Milk 50%"} price={"$8.50"} />
          </div>
      </div>


      <div className=' max-w-325  m-auto p-5 my-40 relative'>
      <img className='absolute right-0 left-259 bottom-130' src={image11} alt="" />
          <h5 className='text-[#603809] text-[48px] font-bold font-serif text-center py-5'>Why are we different?</h5>
          <p className='text-[#707070] text-[20px] font-serif text-center'>We don’t just make your coffee, we make your day!</p>
          <div className='flex items-center justify-between my-6'>
            <Components2 image={image7} name={"Supreme Beans"} description={"Beans that provides great taste"} />
            <Components2 image={image8} name={"High Quality"} description={"We provide the highest quality"} />
            <Components2 image={image9} name={"Extraordinary "} description={"Coffee like you have never tasted"} />
            <Components2 image={image10} name={"Affordable Price"} description={"Our Coffee prices are easy to afford"} />
          </div>
          <p className='text-[#707070] text-[20px] font-serif text-center'>Great ideas start with great coffee, Lets help you achieve that</p>
          <h5 className='text-[#603809] text-[35px] font-bold font-serif text-center py-5'>Get started today.</h5> 
          <center>
          <button className='bg-[#F9C06A] cursor-pointer text-[#1E1E1E]  px-7.5 py-2 rounded-full font-bold'>Join Us</button>
          </center>
      </div>



      <div className='box1 relative  m-auto p-5 border my-35'>
      <img src={image15} className='w-1000 h-150 bottom-0 absolute left-0 opacity-30 pointer-events-none' alt="" />
      <div className='max-w-365 mt-25 m-auto p-5 relative'>
        <div className='z-10 w-xl flex flex-col relative items-start gap-6'>
        <h2 className='text-white relative font-serif text-[50px] font-bold'>Get a chance to have an
        Amazing morning</h2>
        <p className='text-white relative text-[21px] font-serif w-100'>We are giving you are one time opportunity to
        experience a better life with coffee.</p>
        <button className='bg-[#F9C06A] cursor-pointer text-[#1E1E1E]  px-7.5 py-2 rounded-full font-bold'>Order Now</button>
        </div>
        <div className='relative'>
        <img src={image13} className='relative left-250 bottom-90 z-10' alt="" />
        <img src={image14} className='absolute left-233 bottom-84 ' alt="" />
        </div>
      </div>
      </div>


      <div className='max-w-325  m-auto p-5 relative  my-15'>
        <img className='absolute z-1 right-0 left-240 top-20' src={image17} alt="" />
        <img className='absolute z-1 right-255 top-170 ' src={image18} alt="" />
        <h2 className='text-[#603809] text-[48px] font-bold font-serif text-center py-5'>Our coffee perfection feedback</h2>
        <p className='text-[#707070] text-[20px] font-serif text-center'>Our customers has amazing things to say about us</p>
        <div className='shadow-md w-300 m-auto  rounded-xl p-4 mt-5 bg-[#FFF9F1] h-180 relative'>
        <p className='text-[#603809] text-[200px] font-bold font-serif  h-45'>“</p>
        <div className='flex items-center relative justify-between'>
          <button className='rounded-xl text-[#603809] font-bold flex items-center justify-center relative right-15  w-20 h-20 bg-[#F9C06A]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
</button>
          <p className='w-200 text-[18px] font-serif font-semibold text-center leading-9'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....</p>
          <button className='rounded-xl flex items-center justify-center relative left-15 w-20 h-20 bg-[#F9C06A]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
</button>
        </div>
        <center>
        <div className='flex flex-col items-center gap-4 mt-7 absolute bottom-0 top-125 left-120'>
          <h3 className='text-[#603809] text-[32px] font-bold font-serif'>Jonny Thomas</h3>
          <p className='text-[#707070] text-[20px] font-serif '>Project Manager</p>
          <img src={image16} alt="" />
        </div>
        </center>
        </div>
      </div>




      <div className='box2  relative  m-auto p-5  mt-45'>
      <img src={image15} className='w-1000 h-100  top-0 absolute left-0 opacity-30 pointer-events-none' alt="" />
      <img src={image19} className=' top-40 z-10 absolute left-0  ' alt="" />
      <img src={image20} className=' top-40 z-10 absolute left-308  ' alt="" />
      <center className='flex flex-col items-center gap-6 mt-20'>
        <h3 className='text-white font-bold relative font-serif text-[50px]'>Subscribe to get the Latest News</h3>
        <p className='text-[20px] relative text-white font-serif'>Don’t miss out on our latest news, updates, tips and special offers</p>
        <div className='w-163 mt-5 flex items-center justify-center'>
          <input type="text" placeholder='Enter your mail' className='bg-[#FFF9F1] relative h-14 pl-5 border-none outline-none rounded-md text-[#00000057] w-130' />
          <button className='w-35 h-14 text-[#603809] font-bold text-[20px] cursor-pointer rounded-md relative z-10 right-1.5  font-serif bg-[#F9C06A]'>Suscribe</button>
        </div>
      </center>
      </div>


      <footer className='foot relative'>
      <img src={image21} className='w-1000 bg-[#442808] top-0 absolute left-0 opacity-70 pointer-events-none' alt="" />
      <div className='max-w-300  m-auto p-5 pt-45 relative flex text-white font-serif justify-between items-start'>
        <div className='w-95 flex flex-col items-start gap-8'>
        <h6 className='text-4xl clicker-script-regular text-white'>Bean Scene</h6>
        <p className='text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <img src={image22} alt="" />
        </div>
        <div className='w-35 flex flex-col items-start gap-8'>
          <h4 className='font-bold text-[26px] '>About</h4>
          <p className='text-[18px]'>Menu</p>
          <p className='text-[18px]'>Features</p>
          <p className='text-[18px]'>News & Blogs</p>
          <p className='text-[18px]'>Help & Supports  </p>
        </div>
        <div className='w-35 flex flex-col items-start gap-8'>
          <h4 className='font-bold text-[26px] '>Company</h4>
          <p className='text-[18px]'>How we work</p>
          <p className='text-[18px]'>Terms of service</p>
          <p className='text-[18px]'>Pricing</p>
          <p className='text-[18px]'>FAQ</p>
        </div>
        <div className='w-85 flex flex-col items-start gap-8'>
          <h4 className='font-bold text-[26px]'>Contact Us</h4>
          <p className='text-[18px]'>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
          <p className='text-[18px]'>+1 202-918-2132</p>
          <p className='text-[18px]'>beanscene@mail.com</p>
          <p className='text-[18px]'>www.beanscene.com </p>
        </div>
      </div>
      </footer>
    

    </>
  )
}

export default App
