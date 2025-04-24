'use client'
import { useState, useRef, useEffect } from 'react';
import { ProgressBar } from '../progress-bar/ProgressBar';

interface IProps {
  videoSrc: string;
}

export const ProductVideoSlide = ({ videoSrc }: IProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const updateProgress = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      const progressPercent = (currentTime / duration) * 100;
      setProgress(progressPercent);
    }
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        } else if ((videoRef.current as any).mozRequestFullScreen) {
          (videoRef.current as any).mozRequestFullScreen();
        } else if ((videoRef.current as any).webkitRequestFullscreen) {
          (videoRef.current as any).webkitRequestFullscreen();
        } else if ((videoRef.current as any).msRequestFullscreen) {
          (videoRef.current as any).msRequestFullscreen();
        }
      }
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('timeupdate', updateProgress);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', updateProgress);
      }
    };
  }, []);

  return (
    <div className="w-full aspect-square overflow-hidden md:rounded-[35px] rounded-[0px] relative">
      <video
        ref={videoRef}
        src={videoSrc}
        className="object-cover w-full h-full absolute top-0 left-0"
      />
      <div onClick={handlePlayPause} className="w-full h-full absolute grid grid-rows-3">
        <div className=""></div>
        <div className={"flex items-center justify-center"}>
          <button className="bg-[#00000033] rounded-full md:w-[73px] w-60px md:h-[73px] h-60px cursor-pointer flex items-center justify-center">
            {isPlaying
              ? (
                <svg className='md:w-[23px] md:h-[38px] w-19px h-27px' width="23" height="38" viewBox="0 0 23 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="4" height="38" rx="2" fill="#2D2B2D"/>
                  <rect x="19" width="4" height="38" rx="2" fill="#2D2B2D"/>
                </svg>
              )
              : (
                <svg className='md:w-[30px] md:h-[30px] w-24px h-24px' xmlns="http://www.w3.org/2000/svg" fill="#2D2B2D" height="30px" width="30px" version="1.1" id="Capa_1" viewBox="0 0 58.752 58.752">
                  <path d="M52.524,23.925L12.507,0.824c-1.907-1.1-4.376-1.097-6.276,0C4.293,1.94,3.088,4.025,3.088,6.264v46.205 c0,2.24,1.204,4.325,3.131,5.435c0.953,0.555,2.042,0.848,3.149,0.848c1.104,0,2.192-0.292,3.141-0.843l40.017-23.103 c1.936-1.119,3.138-3.203,3.138-5.439C55.663,27.134,54.462,25.05,52.524,23.925z M49.524,29.612L9.504,52.716   c-0.082,0.047-0.18,0.052-0.279-0.005c-0.084-0.049-0.137-0.142-0.137-0.242V6.263c0-0.1,0.052-0.192,0.14-0.243 c0.042-0.025,0.09-0.038,0.139-0.038c0.051,0,0.099,0.013,0.142,0.038l40.01,23.098c0.089,0.052,0.145,0.147,0.145,0.249 C49.663,29.47,49.611,29.561,49.524,29.612z"/>
                </svg>
              )
            }
          </button>
        </div>
        <div className="w-full flex items-end">
          <div className="w-full flex justify-between items-center gap-[11px] md:mb-[54px] mb-[5vw] md:p-[0px_15px] p-[0px_24px]">
            <ProgressBar progress={progress} />
            <button onClick={handleFullscreen} className='transition-all active:scale-95 cursor-pointer'>
              <svg className='md:w-[37px] md:h-[37px] w-31px h-31px' width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8236 8.18787L10.8196 8.18787C9.77369 8.18787 8.92578 9.03578 8.92578 10.0817V15.0857" stroke="#B3B3B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.8236 27.2775L10.8196 27.2775C9.77369 27.2775 8.92578 26.4296 8.92578 25.3836V20.3796" stroke="#B3B3B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.3229 8.18787L26.3268 8.18787C27.3728 8.18787 28.2207 9.03578 28.2207 10.0817V15.0857" stroke="#B3B3B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.3229 27.2776L26.3268 27.2776C27.3728 27.2776 28.2207 26.4297 28.2207 25.3837V20.3797" stroke="#B3B3B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
