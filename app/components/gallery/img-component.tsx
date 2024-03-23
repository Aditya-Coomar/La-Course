interface ImageComponentProps {
    src: string;
    alt: string;
    }

const ImageComponent = ({ src, alt }:ImageComponentProps) => {
  return (
    <div className="flex justify-center">
      <img src={src} alt={alt} className="w-auto" />
    </div>
  );
}

export default ImageComponent;
