import React from "react";

export default function Page() {
  const wrapperStyle: React.CSSProperties = {
    position: "relative",
    paddingTop: "56.25%",
  };
  const iframeStyle: React.CSSProperties = {
    border: 0,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "80vh",
  };

  return (
    <div>
      <div style={wrapperStyle}>
        <iframe
          src="https://iframe.mediadelivery.net/embed/510767/410db21a-6d97-49ef-870a-1eb05b21cbe8?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
          loading="lazy"
          style={iframeStyle}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          title="Media Delivery Player"
        />
      </div>
    </div>
  );
}
