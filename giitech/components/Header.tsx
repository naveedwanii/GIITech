import React from 'react'

const Header = () => {

    const navArray = [
        {
            id: 1,
            navLinks: 'About Us'
        },
        {
            id: 2,
            navLinks: 'Services'
        },
        {
            id: 3,
            navLinks: 'Contact Us'
        },
        {
            id: 4,
            navLinks: 'Careers'
        }
    ]
    return (

     <nav className="relative container mx-auto p-6">

                  <div className="flex items-center justify-between">
                    <div className="pt-2">
                    {/* <img src="img/logo.svg" alt="" /> */}
                    <span className='font-sans text-lg'>Global Innovations</span>
                </div>
                <div className="hidden md:flex space-x-6 py: 40">
                    {
                        navArray.map((item) => (
                            <a href="#" className="hover:text-darkGrayishBlue"> {item.navLinks}</a>
                        ))
                    }
                </div>
                
                <div>
                    <a href="#" className="hidden md:block p-3 px-6 pt-2 bg-brightRed bg-amber-500 rounded-full baseline hover:bg-amber-500Light">
                        Get Started
                    </a>  
                </div>
        
                    </div>                
    </nav>
    
  )
}

export default Header