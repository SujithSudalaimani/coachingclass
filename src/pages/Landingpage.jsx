import React from "react";
import Logo from "../assets/Askmeidentity 2.png"
import hero from "../assets/brunette-woman-hugging-laptop 1 (1).png"
import course1 from "../assets/course1.png"
import course2 from "../assets/course2.png"
import course3 from "../assets/course3.png"
import course4 from "../assets/course4.png"
import course5 from "../assets/course5.png"
import course6 from "../assets/course6.png"
import Work from "../assets/Work.png"
import Graduate from "../assets/Graduate.png"
import Learn from "../assets/Learn.png"
import Digi from "../assets/digiMarket.png"
import Web from "../assets/Web.png"
import Art from "../assets/Art.png"
import personal from "../assets/personal.png"
import It from "../assets/It.png"
import Graphic from "../assets/Graphic.png"
import video from "../assets/video.png"
import play from "../assets/play.png"
import banner from "../assets/banner.png"
import user from "../assets/user.png"
import Bg from "../assets/Bg.png"
// import bottomBg from "../assets/bottomBg.png"
import sub1 from "../assets/sub1.png"
import sub2 from "../assets/sub2.png"
import sub3 from "../assets/sub3.png"
import sub4 from "../assets/sub4.png"
import sub5 from "../assets/sub5.png"
import sub6 from "../assets/sub6.png"

import rect from "../assets/rect.png"
import logi from "../assets/logi.png"
import spotify from "../assets/spotify.png"
import amazon from "../assets/amazon.png"
import cisco from "../assets/cisco.png"

export default function LandingPage() {
  return (
    <div className="font-sans antialiased">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src={Logo}
              alt="Logo"
              className="w-40 h-12"
            />
           
          </div>
          <nav className="hidden md:flex space-x-6 font-medium">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">About</a>
            <a href="#" className="hover:text-blue-600">Courses</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </nav>
          <div className="space-x-3">
            <button className="px-4 py-2 text-gray-700">Login</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Signup</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
    <section className="bg-gradient-to-br from-blue-800 via-purple-700 to-purple-800 text-white relative overflow-hidden min-h-screen">
  {/* Decorative Elements */}
  <div className="absolute inset-0">
    {/* Corner circles */}
    <div className="absolute top-4 left-4 w-4 h-4 bg-cyan-400 rounded-full"></div>
    <div className="absolute top-4 right-4 w-4 h-4 bg-white rounded-full"></div>
    <div className="absolute bottom-4 left-4 w-4 h-4 bg-cyan-400 rounded-full"></div>
    <div className="absolute bottom-4 right-4 w-4 h-4 bg-white rounded-full"></div>

    {/* Decorative arch */}
    <div className="absolute bottom-0 left-1/4 w-64 h-32 border-4 border-dotted border-purple-400 rounded-t-full opacity-30"></div>

    {/* Background pattern */}
    <div 
      className="absolute inset-0 opacity-10"
      style={{ 
        backgroundImage: `url(${rect})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center right',
        backgroundSize: 'contain'
      }}
    ></div>
  </div>

  <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
    <div className="grid md:grid-cols-2 gap-8 items-center min-h-[600px]">
      
      {/* Left Content */}
      <div className="space-y-6">
        <p 
          className="uppercase text-sm tracking-widest text-cyan-300 font-medium" 
          style={{ fontFamily: "Righteous" }}
        >
          Successful coaches are visionaries
        </p>

        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" 
          style={{ fontFamily: "Righteous" }}
        >
          Good <span className="text-cyan-400">coaching</span> is <br />
          good teaching & <br />
          <span>nothing else.</span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button 
            className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-gray-100 transition-colors border-2 border-white"
            style={{ fontFamily: "Righteous" }}
          >
            View Courses
          </button>
          <button 
            className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-700 transition-colors font-medium"
            style={{ fontFamily: "Righteous" }}
          >
            Get Free Consultation
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex mt-8 max-w-md">
          <input
            type="text"
            placeholder="What do you want to learn today?"
            className="flex-grow p-4 rounded-l-lg text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button 
            className="px-6 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors font-bold"
            style={{ fontFamily: "Righteous" }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Right Content */}
    <div className="relative flex justify-center items-center">
  <div className="relative">
    <img
      src={hero}
      alt="Professional woman with laptop"
      className="w-80 h-96 object-contain rounded-2xl shadow-2xl bg-white"
    />
  </div>
</div>

    </div>

    {/* Company Logos */}
    <div className="mt-16 pt-8 border-t border-white/20">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
        <img src={spotify} alt="Spotify" className="h-8 md:h-10 object-contain filter brightness-0 invert" />
        <img src={amazon} alt="Amazon" className="h-8 md:h-10 object-contain filter brightness-0 invert" />
        <img src={spotify} alt="Spotify" className="h-8 md:h-10 object-contain filter brightness-0 invert" />
        <img src={cisco} alt="Cisco" className="h-8 md:h-10 object-contain filter brightness-0 invert" />
        <img src={logi} alt="Logitech" className="h-8 md:h-10 object-contain filter brightness-0 invert" />
        <img src={amazon} alt="Amazon" className="h-8 md:h-10 object-contain filter brightness-0 invert" />
      </div>

      {/* Screen Size Indicator */}
      <div className="text-center mt-4">
        <span className="text-cyan-300 font-mono text-sm">1920 × 936</span>
      </div>
    </div>
  </div>
</section>


      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Featured <span className="text-blue-600" style={{ fontFamily: "Righteous" }}>Courses</span>
          </h2>
          <p className="text-gray-500 mt-2" style={{ fontFamily: "Righteous" }}>
            The feature courses are we invented our teaching part
          </p>
         <div className="mt-10 grid md:grid-cols-3 gap-8">
  {/* Course 1 */}
  <div className="bg-white rounded-xl shadow hover:shadow-lg p-5">
    <img
      src={course1}
      alt="Motion Graphics: Create a Nice Typography Animation"
      className="rounded-lg"
    />
    <h3 className="mt-4 font-semibold" style={{ fontFamily: "Righteous" }}>Motion Graphics: Create a Nice Typography Animation</h3>
    <p className="mt-2 text-blue-600 font-bold" style={{ fontFamily: "Righteous" }}>Rs.499</p>
  </div>

  {/* Course 2 */}
  <div className="bg-white rounded-xl shadow hover:shadow-lg p-5">
    <img
      src={course2}
      alt="Advance PHP knowledge with JS to make smart web"
      className="rounded-lg"
    />
    <h3 className="mt-4 font-semibold" style={{ fontFamily: "Righteous" }}>Advance PHP knowledge with JS to make smart web</h3>
    <p className="mt-2 text-blue-600 font-bold" style={{ fontFamily: "Righteous" }}>Rs.499</p>
  </div>

  {/* Course 3 */}
  <div className="bg-white rounded-xl shadow hover:shadow-lg p-5">
    <img
      src={course3}
      alt="Education Software and PHP and JS System Script"
      className="rounded-lg"
    />
    <h3 className="mt-4 font-semibold" style={{ fontFamily: "Righteous" }}>Mastering Data Structures & Algorithms</h3>
    <h3 className="mt-4 font-semibold"style={{ fontFamily: "Righteous" }} >Education Software and PHP and JS System Script</h3>
    <h3 className="mt-4 font-semibold" style={{ fontFamily: "Righteous" }}>Mastering Data Structures & Algorithms</h3>
    <p className="mt-2 text-blue-600 font-bold" style={{ fontFamily: "Righteous" }}>Rs.499</p>
  </div>

  {/* Course 4 */}
  <div className="bg-white rounded-xl shadow hover:shadow-lg p-5">
    <img
      src={course4}
      alt="UI/UX Design Principles for Beginners"
      className="rounded-lg"
    />
    <h3 className="mt-4 font-semibold" style={{ fontFamily: "Righteous" }}>Mastering Data Structures & Algorithms</h3>
    <h3 className="mt-4 font-semibold" >UI/UX Design Principles for Beginners</h3>
    <h3 className="mt-4 font-semibold" style={{ fontFamily: "Righteous" }}>Mastering Data Structures & Algorithms</h3>
    <p className="mt-2 text-blue-600 font-bold" >Rs.499</p>
  </div>

  {/* Course 5 */}
  <div className="bg-white rounded-xl shadow hover:shadow-lg p-5">
    <img
      src={course5}
      alt="Mastering Data Structures & Algorithms"
      className="rounded-lg"
    />
    <h3 className="mt-4 font-semibold" style={{ fontFamily: "Righteous" }}>Mastering Data Structures & Algorithms</h3>
    <p className="mt-2 text-blue-600 font-bold" style={{ fontFamily: "Righteous" }}>Rs.499</p>
  </div>

  {/* Course 6 */}
  <div className="bg-white rounded-xl shadow hover:shadow-lg p-5">
    <img
      src={course6}
      alt="Digital Marketing: SEO, SEM & Social Media"
      className="rounded-lg"
    />
    <h3 className="mt-4 font-semibold" style={{ fontFamily: "Righteous" }}>Digital Marketing: SEO, SEM & Social Media</h3>
    <p className="mt-2 text-blue-600 font-bold" style={{ fontFamily: "Righteous" }}>Rs.499</p>
  </div>
</div>

          <button className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg" style={{ fontFamily: "Righteous" }}>
            Explore Courses
          </button>
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-purple-700 text-white text-center">
        <h2 className="text-3xl font-bold" style={{ fontFamily: "Righteous" }}>Why learn with our courses?</h2>
        <p className="mt-2 text-blue-100" style={{ fontFamily: "Righteous" }}>
          We are providing the best courses and top classes. And extraordinary placement training.
        </p>
     <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
  {/* Item 1 */}
  <div>
    <img
    src={Learn}
     
      alt="Learn"
      className="mx-auto mb-4"
    />
    <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "Righteous" }}>01. Learn</h3>
    <p className="mt-2 text-blue-100" style={{ fontFamily: "Righteous" }}>
      Learn continually. There is always one more thing to learn.
    </p>
  </div>

  {/* Item 2 */}
  <div>
    <img
           src={Graduate}
      alt="Graduate"
      className="mx-auto mb-4"
    />
    <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "Righteous" }}>02. Graduate</h3>
    <p className="mt-2 text-blue-100" style={{ fontFamily: "Righteous" }}>
      Be bold, be courageous, be your best.
    </p>
  </div>

  {/* Item 3 */}
  <div>
    <img
 
       src={Work}
      alt="Work"
      className="mx-auto mb-4"
    />
    <h3 className="text-xl font-semibold text-white">03. Work</h3>
    <p className="mt-2 text-blue-100" style={{ fontFamily: "Righteous" }}>
      Great companies are built in the office with hard work put in by team.
    </p>
  </div>
</div>

      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Top <span className="text-blue-600" style={{ fontFamily: "Righteous" }}>Categories</span>
          </h2>
       <div className="mt-10 grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
  {/* Category 1 */}
  <div className="bg-white p-5 rounded-lg shadow">
    <img
      src={Digi}
      alt="Digital Marketing"
      className="mx-auto mb-3"
    />
    <h3 className="font-semibold" style={{ fontFamily: "Righteous" }}>Digital Marketing</h3>
    <p className="text-gray-500 text-sm" style={{ fontFamily: "Righteous" }}>25 Courses</p>
  </div>

  {/* Category 2 */}
  <div className="bg-white p-5 rounded-lg shadow">
    <img
      src={Web}
      alt="Web Development"
      className="mx-auto mb-3"
    />
    <h3 className="font-semibold" style={{ fontFamily: "Righteous" }}>Web Development</h3>
    <p className="text-gray-500 text-sm" style={{ fontFamily: "Righteous" }}>16 Courses</p>
  </div>

  {/* Category 3 */}
  <div className="bg-white p-5 rounded-lg shadow">
    <img
      src={Art}
      alt="Art & Humanities"
      className="mx-auto mb-3"
    />
    <h3 className="font-semibold" style={{ fontFamily: "Righteous" }}>Art & Humanities</h3>
    <p className="text-gray-500 text-sm" style={{ fontFamily: "Righteous" }}>76 Courses</p>
  </div>

  {/* Category 4 */}
  <div className="bg-white p-5 rounded-lg shadow">
    <img
       src={personal}
      alt="Personal Development"
      className="mx-auto mb-3"
    />
    <h3 className="font-semibold" style={{ fontFamily: "Righteous" }}>Personal Development</h3>
    <p className="text-gray-500 text-sm" style={{ fontFamily: "Righteous" }}>22 Courses</p>
  </div>

  {/* Category 5 */}
  <div className="bg-white p-5 rounded-lg shadow">
    <img
      src={It}
      alt="IT & Software"
      className="mx-auto mb-3"
    />
    <h3 className="font-semibold" style={{ fontFamily: "Righteous" }}>IT & Software</h3>
    <p className="text-gray-500 text-sm" style={{ fontFamily: "Righteous" }}>110 Courses</p>
  </div>

  {/* Category 6 */}
  <div className="bg-white p-5 rounded-lg shadow">
    <img
     src={Graphic}
      alt="Graphic Design"
      className="mx-auto mb-3"
    />
    <h3 className="font-semibold" style={{ fontFamily: "Righteous" }}>Graphic Design</h3>
    <p className="text-gray-500 text-sm" style={{ fontFamily: "Righteous" }}>85 Courses</p>
  </div>
</div>

        </div>
      </section>

      {/* Subscribe */}
  <section
  className="py-15  bg-cover bg-center text-white text-center relative overflow-hidden"
  style={{ backgroundImage: `url(${Bg})` }}
>
  {/* Floating Avatar Images */}
  <div className="absolute inset-0 pointer-events-none">
    {/* Top left */}
    <img 
      src={sub1} 
      alt="User 1" 
      className="absolute top-8 left-8 w-16 h-16 rounded-full border-4 border-white shadow-lg animate-bounce"
      style={{ animationDelay: '0s', animationDuration: '3s' }}
    />
    
    {/* Top right */}
    <img 
      src={sub2} 
      alt="User 2" 
      className="absolute top-12 right-12 w-14 h-14 rounded-full border-4 border-white shadow-lg animate-bounce"
      style={{ animationDelay: '1s', animationDuration: '3s' }}
    />
    
    {/* Middle left */}
    <img 
      src={sub3} 
      alt="User 3" 
      className="absolute top-1/2 left-16 transform -translate-y-1/2 w-12 h-12 rounded-full border-4 border-white shadow-lg animate-bounce"
      style={{ animationDelay: '2s', animationDuration: '3s' }}
    />
    
    {/* Middle right */}
    <img 
      src={sub4} 
      alt="User 4" 
      className="absolute top-1/2 right-20 transform -translate-y-1/2 w-14 h-14 rounded-full border-4 border-white shadow-lg animate-bounce"
      style={{ animationDelay: '0.5s', animationDuration: '3s' }}
    />
    
    {/* Bottom left */}
    <img 
      src={sub5} 
      alt="User 5" 
      className="absolute bottom-12 left-12 w-14 h-14 rounded-full border-4 border-white shadow-lg animate-bounce"
      style={{ animationDelay: '1.5s', animationDuration: '3s' }}
    />
    
    {/* Bottom right */}
    <img 
      src={sub6} 
      alt="User 6" 
      className="absolute bottom-8 right-8 w-16 h-16 rounded-full border-4 border-white shadow-lg animate-bounce"
      style={{ animationDelay: '2.5s', animationDuration: '3s' }}
    />
  </div>

  {/* Main Content */}
  <div className="relative z-10 max-w-4xl mx-auto px-6">
    <h2 
      className="text-3xl md:text-4xl font-bold mb-4" 
      style={{ fontFamily: "Righteous" }}
    >
      Subscribe For Get Update<br />
      Every New Courses
    </h2>
    
    <p className="text-lg mb-8 opacity-90">
      200+ students daily learn with EduAi. Subscribe for new courses.
    </p>
    
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 max-w-lg mx-auto">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full md:w-72 p-4 rounded-lg md:rounded-l-lg md:rounded-r-none text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg md:rounded-l-none md:rounded-r-lg text-white font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        style={{ fontFamily: "Righteous" }}
      >
        Subscribe
      </button>
    </div>
  </div>

  {/* Background Overlay for better text readability */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 -z-10"></div>
</section>


      {/* Video */}
     <section className="py-16 text-center">
  <div className="max-w-2xl mx-auto relative inline-block">
    {/* Video Image */}
    <img
      src={video}
      alt="Video"
      className="rounded-lg shadow-lg mx-auto"
    />

    {/* Play Icon - Centered */}
    <img
      src={play}
      alt="Play"
      className="absolute inset-0 m-auto w-30 h-30 cursor-pointer"
    />

    {/* Banner Icon - Bottom Right Overlap */}
    <img
      src={banner}
      alt="Banner"
      className="absolute bottom-[-10px] right-[-25px] w-30 h-30"
    />
  </div>
</section>

      {/* Testimonials */}

<section className="py-16 bg-gradient-to-br from-blue-50 to-purple-100 relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>
  <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20"></div>
  <div className="absolute top-1/2 left-20 w-16 h-16 bg-blue-300 rounded-full opacity-25"></div>
  
  <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
   <h2 className="text-4xl font-bold text-blue-600 mb-2 " style={{ fontFamily: "Righteous" }}>
  Testimonials
</h2>

    <p className="text-gray-600 text-lg mb-12">What our students say about us</p>
    
    <div className="grid md:grid-cols-3 gap-8 mb-8">
      {[
        {
          quote: "Such an amazing teacher and easily understood the entire syllabus, and the guidance will be super and good to the way of exploring.",
          stars: 5
        },
        {
          quote: "Such an amazing teacher and easily understood the entire syllabus, and the guidance will be super and good to the way of exploring.",
          stars: 4
        },
        {
          quote: "Such an amazing teacher and easily understood the entire syllabus, and the guidance will be super and good to the way of exploring.",
          stars: 5
        }
      ].map((testimonial, i) => (
        <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
          {/* User profile image */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
              <img src={user} alt="User" className="w-8 h-8 rounded-full object-cover" />
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {testimonial.quote}
            </p>
            
            {/* Star rating */}
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, starIndex) => (
                <span
                  key={starIndex}
                  className={`text-lg ${
                    starIndex < testimonial.stars
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                >
                  ⭐
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    
    {/* Navigation arrows */}
    <div className="flex justify-end space-x-3">
      <button className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200 group">
        <svg 
          className="w-5 h-5 text-blue-600 group-hover:text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200 group">
        <svg 
          className="w-5 h-5 text-blue-600 group-hover:text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl">Academy</h3>
            <p className="mt-3 text-sm text-blue-100">
              #1 Academy for online education.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Classes</h4>
            <ul className="mt-3 space-y-2 text-sm text-blue-100">
              <li>Classroom Courses</li>
              <li>Virtual Courses</li>
              <li>E-learning</li>
              <li>Video Courses</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Community</h4>
            <ul className="mt-3 space-y-2 text-sm text-blue-100">
              <li>Learners</li>
              <li>Partners</li>
              <li>Developers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-blue-100">
              <li>Home</li>
              <li>Courses</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-10 text-sm text-blue-200">
          © 2025 Academy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
