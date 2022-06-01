import { useEffect, useState, useRef } from 'react';

// import { useAppContext } from '../state/AppContext';

export default function AudioPlayer({file}) {

  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.load();
  }, [file]);

  function onLoadedData(){
    console.log("onLoadedData")
    audioRef.current.play();
  }

  const onPlay = () => {
    console.log("onPlay")
  }

  return (
    <div className="border border-black shadow-offset-black rounded-full overflow-hidden">
      <audio controls ref={audioRef}
        onPlay={onPlay}
        onChan
        onLoadedData={onLoadedData} >
        <source src={file} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}