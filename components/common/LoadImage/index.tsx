import { useState, useRef, useEffect } from 'react'

const LoadImage = (props) => {
  const [blur, setBlur] = useState(true);
  const loadingImage = useRef();

  useEffect(() => {
    if (loadingImage.current.complete) {
      setBlur(false);
    }

    loadingImage.current.addEventListener('load', () => {
      setBlur(false);
    });

    return () => {
      loadingImage.current.removeEventListener('load')
    }
  }, []);

  return (
    <div className={`image-container ${blur ? "blur" : "unblur"}`}>
      <img className="placeholder-image" src={props.smallImgSrc} />
      <img className="real-image" ref={loadingImage} src={props.largeImgSrc} />
    </div>
  )
}