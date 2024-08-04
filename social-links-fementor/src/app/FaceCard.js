/*Top half of social link*/
/*Adding user object for static site*/

export const user = {
  username: "Tremaine McKinley, MBA",
  location: "Memphis, TN",
  bio: "Civic tech builder and Self-developer",
  imageUrl: "../avatar-tremaine.jpg",
};

export default function FaceCard(props) {
  const { username, location, bio, url } = props;
  return (
    <div className="flex flex-col items-center p-3">
      <img src={url} className="rounded-full h-24 w-24 mb-3" />
      <h1>{username}</h1>
      <h3>{location}</h3>
      <p>{bio}</p>
    </div>
  );
}
