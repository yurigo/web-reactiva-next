import { cloneElement , useState } from "react";

import NavBar from "./navbar";
import Footer from "./footer";
import AudioPlayer from "./AudioPlayer";

export default function Layout({ children , ...props }) {

  // en props tengo allFeedItems?

  const [activeAudio, setActiveAudio] = useState();

  return (
    <>
      <pre>
      
      </pre>
      <NavBar />
      <div className="sticky top-[70px] flex justify-center z-20">
      <AudioPlayer file={activeAudio} />
      </div>
      {/* <main>{children}</main> */}
      <main>
      {
        cloneElement(children, {
              setActiveAudio: setActiveAudio,
              })
      }
      </main>
      <Footer />
    </>
  );
}
