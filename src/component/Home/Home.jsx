import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import styles from './Home.module.css'
import Abohol from '../../assets/Egypt _ Cinematic Video.jpg'
import Group1 from '../../assets/group1.jpg'
import Card1 from '../../assets/b386cd895c762e03086fd5c430ba819d.jpg'
import Card2 from '../../assets/13 Best Egypt Tour Companies to Help You Plan the Trip of a Lifetime.jpg'
import Card3 from '../../assets/card3.jpg'
import Redsea from '../../assets/Red Sea.jpg'
import Redsea2 from '../../assets/Red Sea _ Egypt.jpg'
import Hurghada  from '../../assets/Red Sea.jpg'
import Alex from '../../assets/Bibliotheca Alexandrina.jpg'
import Luxor from '../../assets/a1033f3e-ed37-46f2-8639-1f7870698d15.jpg'
import Aswan from '../../assets/Red Sea.jpg'
import Musum from '../../assets/A Bucket List Trip to Egypt [2-Week Itinerary] _ Lust In Her World _ Travel Blog.jpg'
import Abosumbel from '../../assets/Egypt - Aswan Abo simble.jpg'
import Nile  from '../../assets/Felucca on the Nile ; Aswan ; Egypt.jpg'
import Abosumbe2 from '../../assets/4c798100-876d-4ee6-8285-04b1ba9bd9f8.jpg'
import Sahra  from '../../assets/Sahara.jpg'

import Personal from '../../assets/Business Man flat Icon design, human resource and businessman icon concept, man icon in trendy flat style, Symbol for your web site design, logo, app.jpg'
import { NavLink } from 'react-router-dom'
const TESTIMONIALS = [
  { name: 'Ahmed Ali', meta: 'Cairo, Egypt', img: Personal, comment: 'Amazing experience! The team organized everything perfectly. I visited the Pyramids and it was a dream come true. Highly recommended!' },
  { name: 'Sarah Johnson', meta: 'London, UK', img: Personal, comment: 'Professional and friendly guides. The Nile cruise was unforgettable, and the hotel selections were excellent.' },
  { name: 'Omar Hassan', meta: 'Dubai, UAE', img: Personal, comment: 'Top-notch service from start to finish. We felt safe and cared for throughout our trip. Will book again!' },
  { name: 'Emily Brown', meta: 'New York, USA', img: Personal, comment: 'Loved every moment. The itinerary was well-balanced and thoughtfully planned.' },
  { name: 'Mohamed Salah', meta: 'Giza, Egypt', img: Personal, comment: 'Fantastic tour! Great value for money and wonderful memories made.' },
  { name: 'Priya Kumar', meta: 'Mumbai, India', img: Personal, comment: 'Very professional team. The historical insights from the guide were incredible.' }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderTrackRef = useRef(null);
  const totalSlides = 5;

  const goToSlide = useCallback((slideIndex) => {
    if (slideIndex < 0) slideIndex = totalSlides - 1;
    if (slideIndex >= totalSlides) slideIndex = 0;
    
    setCurrentSlide(slideIndex);
    // For 100% width cards, we need to calculate based on container width
    const containerWidth = sliderTrackRef.current?.parentElement?.offsetWidth || 0;
    const translateX = -slideIndex * containerWidth;
    if (sliderTrackRef.current) {
      sliderTrackRef.current.style.transform = `translateX(${translateX}px)`;
    }
  }, [totalSlides]);

  const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  useEffect(() => {
    // Auto-slide every 5 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  // Testimonials slider state and data
  const testimonialSlides = useMemo(() => {
    const slides = [];
    for (let i = 0; i < TESTIMONIALS.length; i += 2) {
      slides.push(TESTIMONIALS.slice(i, i + 2));
    }
    return slides;
  }, []);
  const totalTestimonialSlides = testimonialSlides.length;
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonialsTrackRef = useRef(null);

  const goToTestimonial = useCallback((index) => {
    if (index < 0) index = totalTestimonialSlides - 1;
    if (index >= totalTestimonialSlides) index = 0;
    setTestimonialIndex(index);
    const containerWidth = testimonialsTrackRef.current?.parentElement?.offsetWidth || 0;
    if (testimonialsTrackRef.current) {
      testimonialsTrackRef.current.style.transform = `translateX(${-index * containerWidth}px)`;
    }
  }, [totalTestimonialSlides]);
  const nextTestimonial = useCallback(() => goToTestimonial(testimonialIndex + 1), [testimonialIndex, goToTestimonial]);
  const prevTestimonial = useCallback(() => goToTestimonial(testimonialIndex - 1), [testimonialIndex, goToTestimonial]);

  useEffect(() => {
    const id = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(id);
  }, [nextTestimonial]);

  useEffect(() => {
    const onResize = () => {
      // Re-apply transform on resize so the slide stays aligned
      goToTestimonial(testimonialIndex);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [goToTestimonial, testimonialIndex]);

  return <>
    
    {/* Hero Section */}
                                       <div className="top-page" style={{ 
           backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${Abohol})`,
           minHeight: "80vh",
           backgroundRepeat: "no-repeat",
           backgroundPosition: "center",
           backgroundSize: "cover",
           display: "flex",
           alignItems: "center",
           justifyContent: "center"
       }}>
         <div className="top-s">
                         <h2 style={{color:'white', textAlign:'center'}}>welcome to <span className={styles.typingSpan}></span></h2>
            <p style={{color:'white', textAlign:'center'}}>Here at Egypt Tours Gate, we will eliminate the confusion of planning your own Trip to Egypt. We will provide the best Egypt Tours&nbsp;based on your desires and specific interests.
            </p>
            <div className={styles.ctaButtons}>
            <a className={styles.primaryBtn}  href="https://www.egypttoursgate.com/">learn more</a>      
            <NavLink to="/contact" className={styles.secondaryBtn}>
  Contact Us
</NavLink>            </div>
        </div>
    </div>

    {/* Travel Essentials Tips Section */}
    <div className={styles.travelTipsSection}>
      <div className={styles.container}>
        <h1 className={styles.sectionTitle1}>Travel Essentials Tips</h1>
        <h1 className={styles.sectionTitle}>Awesome Tips That Makes Your Travel Beautiful</h1>
        <p className={styles.sectionSubtitle}>Our priority is to give you peace of mind. We are your one-stop source to plan your whole Egypt trip. We focus on the details so you don't have to. Your mere wishes become our guidelines to craft tailor-made <span>Egypt travel packages</span>  for maximum benefit and enjoyment. We recommend you spend at least two weeks in Egypt to make the best of your trip in Egypt. These two weeks will give you time to explore sites like the Great Giza Pyramids, Abu Simbel Temple in Aswan, and Karnak Temple in Luxor. In addition, you will have time to visit the attractions near the Red sea. What makes us different?</p>
        
        <div className={styles.contentGrid}>
          <div className={styles.imageSection}>
            <img src={Group1} alt="Egypt Travel Experience" className={styles.travelImage} />
          </div>
          <div className={styles.ctaSection}>
            <h2>Ready to Explore Egypt?</h2>
            <p>Let our expert guides show you the wonders of ancient Egypt</p>
            <div className={styles.ctaButtons}>
              <a href="#tours" className={styles.primaryBtn}>View Our Tours</a>
              <a href="#contact" className={styles.secondaryBtn}>Get Custom Quote</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Recommended Egypt Trips */}

    <div className={styles.travelTipsSection}>
      <div className={styles.container}>
        <h1 className={styles.sectionTitle1}>Recommended Egypt Trips</h1>
        <p className={styles.sectionSubtitle}>Discover the best Egypt tours with Nile Cruise and explore ancient wonders</p>
        
        <div className={styles.tourCardsSlider}>
          <div className={styles.sliderContainer}>
            <div className={styles.sliderTrack} ref={sliderTrackRef}>
              <div className={styles.tourCard}>
                <div className={styles.cardImageContainer}>
                  <img src={Card1} alt="Pyramids of Giza Tour" className={styles.cardImage} />
                  <div className={styles.cardBadge}>Popular</div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3>Pyramids of Giza & Sphinx</h3>
                    <div className={styles.rating}>
                      <span className={styles.stars}>★★★★★</span>
                      <span className={styles.ratingText}>4.9 (128 reviews)</span>
                    </div>
                  </div>
                  <div className={styles.location}>
                    <span className={styles.locationIcon}>📍</span>
                    <span>Cairo, Egypt</span>
                  </div>
                  <p className={styles.cardDescription}>
                    Explore the ancient wonders of the world with our expert guides. Visit the Great Pyramid, Sphinx, and Egyptian Museum.
                  </p>
                  <div className={styles.cardFooter}>
                    <div className={styles.price}>
                      <span className={styles.priceLabel}>From</span>
                      <span className={styles.priceAmount}>$89</span>
                      <span className={styles.pricePeriod}>/person</span>
                    </div>
                    <NavLink to="/booking" className={styles.bookNowBtn}>
  Book Now
</NavLink>                  </div>
                </div>
              </div>

              <div className={styles.tourCard}>
                <div className={styles.cardImageContainer}>
                  <img src={Nile} alt="Nile Cruise Experience" className={styles.cardImage} />
                  <div className={styles.cardBadge}>Best Seller</div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3>Luxor & Aswan Nile Cruise</h3>
                    <div className={styles.rating}>
                      <span className={styles.stars}>★★★★★</span>
                      <span className={styles.ratingText}>4.8 (95 reviews)</span>
                    </div>
                  </div>
                  <div className={styles.location}>
                    <span className={styles.locationIcon}>📍</span>
                    <span>Luxor to Aswan</span>
                  </div>
                  <p className={styles.cardDescription}>
                    Sail the Nile River while visiting ancient temples, tombs, and experiencing the magic of Egyptian history.
                  </p>
                  <div className={styles.cardFooter}>
                    <div className={styles.price}>
                      <span className={styles.priceLabel}>From</span>
                      <span className={styles.priceAmount}>$299</span>
                      <span className={styles.pricePeriod}>/person</span>
                    </div>
                    <NavLink to="/booking" className={styles.bookNowBtn}>
  Book Now
</NavLink>                  </div>
                </div>
              </div>

              <div className={styles.tourCard}>
                <div className={styles.cardImageContainer}>
                  <img src={Card3} alt="Cairo City Tour" className={styles.cardImage} />
                  <div className={styles.cardBadge}>New</div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3>Cairo City & Museum Tour</h3>
                    <div className={styles.rating}>
                      <span className={styles.stars}>★★★★☆</span>
                      <span className={styles.ratingText}>4.7 (67 reviews)</span>
                    </div>
                  </div>
                  <div className={styles.location}>
                    <span className={styles.locationIcon}>📍</span>
                    <span>Cairo, Egypt</span>
                  </div>
                  <p className={styles.cardDescription}>
                    Discover the National Museum of Egyptian Civilization and explore the vibrant streets of Cairo.
                  </p>
                  <div className={styles.cardFooter}>
                    <div className={styles.price}>
                      <span className={styles.priceLabel}>From</span>
                      <span className={styles.priceAmount}>$65</span>
                      <span className={styles.pricePeriod}>/person</span>
                    </div>
                    <NavLink to="/booking" className={styles.bookNowBtn}>
  Book Now
</NavLink>                  </div>
                </div>
              </div>

              <div className={styles.tourCard}>
                <div className={styles.cardImageContainer}>
                  <img src={Abosumbel} alt="Abu Simbel Temple Tour" className={styles.cardImage} />
                  <div className={styles.cardBadge}>Exclusive</div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3>Abu Simbel Temple Adventure</h3>
                    <div className={styles.rating}>
                      <span className={styles.stars}>★★★★★</span>
                      <span className={styles.ratingText}>4.9 (89 reviews)</span>
                    </div>
                  </div>
                  <div className={styles.location}>
                    <span className={styles.locationIcon}>📍</span>
                    <span>Aswan, Egypt</span>
                  </div>
                  <p className={styles.cardDescription}>
                    Experience the magnificent Abu Simbel temples, a UNESCO World Heritage site with stunning architecture.
                  </p>
                  <div className={styles.cardFooter}>
                    <div className={styles.price}>
                      <span className={styles.priceLabel}>From</span>
                      <span className={styles.priceAmount}>$145</span>
                      <span className={styles.pricePeriod}>/person</span>
                    </div>
                    <NavLink to="/booking" className={styles.bookNowBtn}>
  Book Now
</NavLink>                  </div>
                </div>
            </div>

              <div className={styles.tourCard}>
                <div className={styles.cardImageContainer}>
                  <img src={Redsea} alt="Red Sea Diving" className={styles.cardImage} />
                  <div className={styles.cardBadge}>Adventure</div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3>Red Sea Diving & Snorkeling</h3>
                    <div className={styles.rating}>
                      <span className={styles.stars}>★★★★★</span>
                      <span className={styles.ratingText}>4.8 (156 reviews)</span>
                    </div>
                  </div>
                  <div className={styles.location}>
                    <span className={styles.locationIcon}>📍</span>
                    <span>Hurghada, Egypt</span>
                  </div>
                  <p className={styles.cardDescription}>
                    Dive into the crystal clear waters of the Red Sea and discover vibrant coral reefs and marine life.
                  </p>
                  <div className={styles.cardFooter}>
                    <div className={styles.price}>
                      <span className={styles.priceLabel}>From</span>
                      <span className={styles.priceAmount}>$120</span>
                      <span className={styles.pricePeriod}>/person</span>
                    </div>
                    <button className={styles.bookNowBtn}>Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.sliderNavigation}>
            <button className={styles.sliderBtn} onClick={prevSlide}>‹</button>
            <div className={styles.sliderDots}>
              {[...Array(totalSlides)].map((_, index) => (
                <span 
                  key={index}
                  className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
                  onClick={() => goToSlide(index)}
                ></span>
              ))}
            </div>
            <button className={styles.sliderBtn} onClick={nextSlide}>›</button>
          </div>
        </div>
      </div>
        </div>

    {/* Why Choose Egypt Tours Gate */}
    <div className={styles.travelTipsSection}>
      <div className={styles.container}>
        <h1 className={styles.sectionTitle1}>Why Choose Egypt Tours Gate</h1>
        <h1 className={styles.sectionTitle}>Your Trusted Travel Partner</h1>
        <p className={styles.sectionSubtitle}>We are committed to providing the best Egypt tours and trips. Whether you are planning a short Egypt tour or a long luxury Egypt tour, we are here to make your dreams come true.</p>
        
        <div className={styles.stepCardsContainer}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepIcon}>🌟</div>
            <h3>Expert Local Guides</h3>
            <p>Our certified Egyptologists and local experts provide authentic insights into ancient history and modern culture.</p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepIcon}>🎯</div>
            <h3>Customized Packages</h3>
            <p>Tailor-made tours designed around your interests, budget, and schedule for a truly personalized experience.</p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepIcon}>🛡️</div>
            <h3>Safe & Secure</h3>
            <p>Your safety is our priority with 24/7 support, licensed vehicles, and comprehensive travel insurance.</p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>04</div>
            <div className={styles.stepIcon}>💰</div>
            <h3>Best Price Guarantee</h3>
            <p>Competitive pricing with no hidden fees. We offer the best value for your Egypt adventure.</p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>05</div>
            <div className={styles.stepIcon}>🏨</div>
            <h3>Premium Accommodations</h3>
            <p>Carefully selected hotels and Nile cruises that combine comfort, luxury, and authentic Egyptian hospitality.</p>
</div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>06</div>
            <div className={styles.stepIcon}>📞</div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock assistance throughout your journey. We're here whenever you need us.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Popular Egypt Tours */}
    <div className={styles.travelTipsSection}>
      <div className={styles.container}>
        <h1 className={styles.sectionTitle1}>Know our Trip</h1>
        <h1 className={styles.sectionTitle}>Popular Egypt Tours</h1>
        <p className={styles.sectionSubtitle}>Experience with us the best Egypt tours with a Nile cruise and explore attractions in each city, for example, enjoy Cairo day tours where you can explore the Great Giza Pyramids, the Egyptian museum, or khan el Khalili, Citadel. On the other hand check out Aswan day tours, Luxor, Sharm el-Sheikh, Hurghada, or El Gouna day tours. You can pick your trip from the biggest variety of Egypt tour itineraries we have. Besides the best Egypt vacations (choose which suits your interests and budget also).</p>
        
        <div className={styles.imageGrid}>
          <div className={styles.imageCard}>
            <img src={Card1} alt="Cairo Pyramids" className={styles.gridImage} />
            <div className={styles.imageOverlay}>
              <h3>Cairo Pyramids</h3>
              <p>Ancient Wonders</p>
            </div>
          </div>
          
          <div className={styles.imageCard}>
            <img src={Card2} alt="Nile Cruise" className={styles.gridImage} />
            <div className={styles.imageOverlay}>
              <h3>Nile Cruise</h3>
              <p>River Adventure</p>
            </div>
          </div>
          
          <div className={styles.imageCard}>
            <img src={Luxor} alt="Luxor Temple" className={styles.gridImage} />
            <div className={styles.imageOverlay}>
              <h3>Luxor Temple</h3>
              <p>Pharaonic Magic</p>
            </div>
          </div>
          
          <div className={styles.imageCard}>
            <img src={Abosumbe2} alt="Abu Simbel" className={styles.gridImage} />
            <div className={styles.imageOverlay}>
              <h3>Abu Simbel</h3>
              <p>UNESCO Heritage</p>
            </div>
          </div>
          
          <div className={styles.imageCard}>
            <img src={Redsea2} alt="Red Sea" className={styles.gridImage} />
            <div className={styles.imageOverlay}>
              <h3>Red Sea</h3>
              <p>Crystal Waters</p>
            </div>
          </div>
          
          <div className={styles.imageCard}>
            <img src={Alex} alt="Alexandria" className={styles.gridImage} />
            <div className={styles.imageOverlay}>
              <h3>Alexandria</h3>
              <p>Mediterranean Charm</p>
            </div>
          </div>
          
          <div className={styles.imageCard}>
            <img src={Sahra} alt="Sahara Desert" className={styles.gridImage} />
            <div className={styles.imageOverlay}>
              <h3>Sahara Desert</h3>
              <p>Golden Sands</p>
            </div>
          </div>
          
          <div className={styles.imageCard}>
            <img src={Musum} alt="Egyptian Museum" className={styles.gridImage} />
            <div className={styles.imageOverlay}>
              <h3>Egyptian Museum</h3>
              <p>Ancient Treasures</p>
            </div>
          </div>
        </div>
      </div>
    </div>


        {/* What Peoples Say About Us */}
        <div className={styles.travelTipsSection}>
      <div className={styles.container}>
        <h1 className={styles.sectionTitle1}>Our Testimonials</h1>
        <h1 className={styles.sectionTitle}>What Peoples Say About Us</h1>
        <p className={styles.sectionSubtitle}>Our Testimonials</p>

      <div className={styles.testimonialsSlider}>
        <div className={styles.testimonialsContainer}>
          <div className={styles.testimonialsTrack} ref={testimonialsTrackRef}>
            {testimonialSlides.map((pair, i) => (
              <div key={i} className={styles.testimonialSlide}>
                <div className={styles.testimonialSlideInner}>
                  {pair.map((t, j) => (
                    <div key={j} className={styles.testimonialCard}>
                      <div className={styles.testimonialHeader}>
                        <img src={t.img} alt={t.name} className={styles.avatar} />
                        <div>
                          <h4 className={styles.personName}>{t.name}</h4>
                          <span className={styles.personMeta}>{t.meta}</span>
                        </div>
                      </div>
                      <p className={styles.comment}>"{t.comment}"</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.testimonialsNav}>
          <button className={styles.testimonialsBtn} onClick={prevTestimonial}>‹</button>
          <div className={styles.testimonialsDots}>
            {Array.from({ length: totalTestimonialSlides }).map((_, idx) => (
              <span
                key={idx}
                className={`${styles.testimonialDot} ${testimonialIndex === idx ? styles.active : ''}`}
                onClick={() => goToTestimonial(idx)}
              ></span>
            ))}
          </div>
          <button className={styles.testimonialsBtn} onClick={nextTestimonial}>›</button>
        </div>
      </div>
        </div>
        </div>
  </>
  
}
