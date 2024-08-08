/*Top half of social link*/
/*Adding user object for static site*/
import Image from 'next/image'
export const user = {
  username: "Tremaine McKinley, MBA",
  location: "Memphis, TN",
  bio: "Civic tech builder and Self-developer",
  imageUrl: "/avatar-tremaine.jpg",
};

export default function FaceCard(props) {
  const { username, location, bio, url } = props;
  return (
    <div className="flex flex-col items-center px-3 pt-3">
      <img src={url} className="rounded-full h-[88px] w-[88px]" />
      <h1 className='mt-[24px]'>{username}</h1>
      <h3>{location}</h3>
      <p className='my-[24px]'>{bio}</p>
    </div>
  );
}
