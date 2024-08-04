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
              className="socialbutton w-60 h-9 m-1 rounded text-xs font-[600] social"
            >
              {social}
            </button>
          </a>
        );
      })}
    </div>
  );
}
