import React from 'react';
import { ArrowRight, Zap, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useState, useEffect, useRef, useMemo } from 'react';
import AppleWatchImage from '../assets/Apple Watch Ultra 2 Titanium Orange Ocean Band.png';
import DetailsImage from '../assets/details.jpg';
import FeaturesImage from '../assets/features.jpg';
import SwimmingImage from '../assets/Swimming.jpg';
import SOSVideo from '../assets/video_2025-12-05_10-15-09.mp4';
/*
  Responsive image notes (mobile-first):
  - Container uses fluid widths with vw and max-width constraints per breakpoint
  - Aspect ratio maintained via aspect-square with padding-bottom fallback for older browsers
  - <img> uses srcSet + sizes to hint layout width, lazy loading, and async decoding
  - Object-contain ensures the watch image never distorts regardless of container size
*/

const Hero = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
//Scroll-Triggered Auto Play

  const mediaItems = useMemo(() => [
    { type: 'image', src: AppleWatchImage, alt: 'Apple Watch Ultra 2 Titanium with Orange Ocean Band' },
    { type: 'image', src: SwimmingImage, alt: 'Underwater diver using Apple Watch Ultra 2' },
    { type: 'image', src: FeaturesImage, alt: 'Titanium and GPS macro detail of Apple Watch Ultra 2' },
    { type: 'image', src: DetailsImage, alt: 'Action button macro of Apple Watch Ultra 2' },
    { type: 'video', src: SOSVideo, alt: 'Emergency SOS preview' },
  ], []);

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const touchStartXRef = useRef(null);
  const touchDeltaXRef = useRef(0);
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const sectionRef = useRef(null);
  const hasUserScrolledRef = useRef(false);


 

  

 

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % mediaItems.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchDeltaXRef.current = 0;
  };

  const onTouchMove = (e) => {
    if (touchStartXRef.current != null) {
      const currentX = e.touches[0].clientX;
      touchDeltaXRef.current = currentX - touchStartXRef.current;
    }
  };

  const onTouchEnd = () => {
    const threshold = 50;
    if (touchDeltaXRef.current > threshold) {
      goPrev();
    } else if (touchDeltaXRef.current < -threshold) {
      goNext();
    }
    touchStartXRef.current = null;
    touchDeltaXRef.current = 0;
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setIsVideoPlaying(true);
    const onPause = () => setIsVideoPlaying(false);
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    return () => {
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
    };
  }, [videoRef]);

  useEffect(() => {
    const coarse = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    const hasTouch = typeof window !== 'undefined' && 'ontouchstart' in window;
    setIsTouchDevice(Boolean(coarse || hasTouch));
  }, []);

  useEffect(() => {
    const markInteract = () => {
      hasUserScrolledRef.current = true;
    };
    window.addEventListener('scroll', markInteract, { once: true });
    window.addEventListener('touchstart', markInteract, { once: true });
    window.addEventListener('keydown', markInteract, { once: true });
    return () => {
      window.removeEventListener('scroll', markInteract);
      window.removeEventListener('touchstart', markInteract);
      window.removeEventListener('keydown', markInteract);
    };
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const supported = typeof window !== 'undefined' && 'IntersectionObserver' in window;
    if (!supported) return;
    const observer = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting;
      if (!visible) {
        const v = videoRef.current;
        if (v && !v.paused) v.pause();
        return;
      }
      const item = mediaItems[current];
      if (item && item.type === 'video' && videoRef.current && hasUserScrolledRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, [current, mediaItems]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      goNext();
    } else if (e.key === 'ArrowLeft') {
      goPrev();
    } else if (e.key === ' ') {
      const v = videoRef.current;
      if (!v) return;
      e.preventDefault();
      if (v.paused) {
        v.play().catch(() => {});
        setIsVideoPlaying(true);
      } else {
        v.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1A2F] via-[#0F2847] to-[#0A1A2F] pt-16">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF7A1A] rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <Zap size={16} className="text-[#FF7A1A]" />
              <span className="text-sm text-gray-300">New Release 2024</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Apple Watch
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6D6D6] to-[#FF7A1A]">
                Ultra 2
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Titanium precision meets adventure. The most rugged and capable Apple Watch ever,
              designed for endurance athletes, outdoor explorers, and water sports enthusiasts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToPricing}
                className="group bg-gradient-to-r from-[#FF7A1A] to-[#FF9500] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#FF7A1A]/50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Shop Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                Learn More
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-white">49mm</div>
                <div className="text-sm text-gray-400">Display Size</div>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div>
                <div className="text-3xl font-bold text-white">100m</div>
                <div className="text-sm text-gray-400">Water Resistant</div>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div>
                <div className="text-3xl font-bold text-white">36hrs</div>
                <div className="text-sm text-gray-400">Battery Life</div>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A1A]/20 to-transparent rounded-full filter blur-3xl"></div>

            {/* Carousel wrapper retains animate-float */}
            <div className="relative animate-float">
              {/* Fluid, responsive container using vw and max-width constraints */}
              <div className="relative flex items-center justify-center w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] max-w-[560px] md:max-w-[500px]">
                <div
                  className="relative w-full"
                  role="region"
                  aria-roledescription="carousel"
                  aria-label="Product media carousel"
                  tabIndex={0}
                  onKeyDown={onKeyDown}
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                >
                  
                  

                  {/* Responsive square stage with fallback */}
                  <div className="relative mx-auto aspect-square overflow-hidden rounded-xl">
                    <div className="block sm:hidden pb-[100%]"></div>

                    {/* Slides */}
                    {mediaItems.map((item, index) => {
                      const isActive = index === current;
                      const baseSlide =
                        'absolute inset-0 w-full h-full transition-all duration-500 ease-out';
                      const motion =
                        isActive
                          ? 'opacity-100 translate-x-0'
                          : direction === 1
                          ? 'opacity-0 -translate-x-6'
                          : 'opacity-0 translate-x-6';

                          return item.type === 'image' ? (
                            <img
                              key={index}
                              src={item.src}
                              alt={item.alt}
                              className={`${baseSlide} ${motion} object-contain drop-shadow-2xl`}
                              loading="lazy"
                              decoding="async"
                              fetchpriority="low"
                              srcSet={`${item.src} 1x, ${item.src} 2x`}
                              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 40vw"
                            />
                      ) : (
                        <div key={index} className={`${baseSlide} ${motion}`} aria-hidden={!isActive}>
                          <video
                            src={item.src}
                            className="absolute inset-0 w-full h-full object-cover opacity-80 drop-shadow-2xl"
                            muted
                            loop
                            playsInline
                            preload={'metadata'}
                            controls={isTouchDevice}
                            poster={AppleWatchImage}
                            aria-label="Emergency SOS preview video"
                            ref={videoRef}
                          />
                          {isTouchDevice ? (
                            <button
                              type="button"
                              aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
                              onClick={() => {
                                const v = videoRef.current;
                                if (!v) return;
                                if (v.paused) {
                                  v.play().catch(() => {});
                                  setIsVideoPlaying(true);
                                } else {
                                  v.pause();
                                  setIsVideoPlaying(false);
                                }
                              }}
                              className="absolute bottom-3 right-3 z-20 bg-white/10 border border-white/20 rounded-full p-3 shadow-lg"
                            >
                              {isVideoPlaying ? (
                                <Pause size={20} className="text-white/90" />
                              ) : (
                                <Play size={20} className="text-white/90" />
                              )}
                            </button>
                          ) : (
                            <button
                              type="button"
                              aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
                              onClick={() => {
                                const v = videoRef.current;
                                if (!v) return;
                                if (v.paused) {
                                  v.play().catch(() => {});
                                  setIsVideoPlaying(true);
                                } else {
                                  v.pause();
                                  setIsVideoPlaying(false);
                                }
                              }}
                              className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 ${isVideoPlaying ? 'md:opacity-0 opacity-70' : 'opacity-100'}`}
                            >
                              <div className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-full p-3 shadow-lg transition-colors">
                                {isVideoPlaying ? (
                                  <Pause size={24} className="text-white/90" />
                                ) : (
                                  <Play size={24} className="text-white/90" />
                                )}
                              </div>
                            </button>
                          )}

                        </div>
                      );
                    })}

                    <div className="sr-only" aria-live="polite">
                      {mediaItems[current].alt}
                    </div>

                    {/* Arrows */}
                    <button
                      aria-label="Previous"
                      onClick={() => {
                        goPrev();
                      }}
                      className="flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-[#0f2542] hover:text-white p-2 rounded-full transition-all duration-300 z-20"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      aria-label="Next"
                      onClick={() => {
                        goNext();
                      }}
                      className="flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-[#0f2542] hover:text-white p-2 rounded-full transition-all duration-300 z-20"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
