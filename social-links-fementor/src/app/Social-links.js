/*
Buttons for social links
Mapping through array of social titles
*/

export default function SocialLinks(props) {
  const socials = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];
  const { link } = props;
  return (
    <div className="flex flex-col mt-2">
      {socials.map((social) => {
        return (
          <a href="#" key={social}>
            <button
              type="button"
              className="socialbutton py-1 w-40 m-1 rounded text-xs social"
            >
              {social}
            </button>
          </a>
        );
      })}
    </div>
  );
}
