import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";

export const CloudinaryShow = ({ publicId }) => {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'diskodenso'
    }
  });

  // cld.image returns a CloudinaryImage with the configuration set.
  const myImage = publicId ? cld.image(publicId) : cld.image('platzhalter-934162855_n0stgv')

  // The URL of the image is: https://res.cloudinary.com/demo/image/upload/sample

  // Render the image in a React component.
  return (
      <AdvancedImage cldImg={myImage} />
  )
};