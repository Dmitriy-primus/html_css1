import { createContext, useState } from "react";

export const ContextVideo = createContext({
  stateVideo: false,
});

export const ContextVideoProvider = ({ children }) => {
  const [stateVideo, setStateVideo] = useState(false);

  return (
    <ContextVideo.Provider
      value={{
        stateVideo,
        setStateVideo,
      }}
    >
      {children}
    </ContextVideo.Provider>
  );
};
