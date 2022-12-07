type SkillCardProps = {
  skillCardData: {
    name: string;
    altText: string;
    href: string;
    imageSrc: string;
  };
};
const SkillCard = ({ skillCardData }: SkillCardProps) => {
  const { name, altText, href, imageSrc } = skillCardData;
  return (
    <>
      <div className="flex place-content-center cursor-pointer group">
        <div className="w-full xs:w-10/12 flex flex-col items-center">
          <div className="w-fit bg-gray-900 rounded-full p-6 xs:p-5 sm:p-8 md:p-6 lg:p-7 xl:p-9 group-hover:bg-black duration-300">
            <img src={imageSrc} alt={altText} className="w-100" />
          </div>
          <a
            href={href}
            target={"_blank"}
            className="text-sky-500 uppercase font-semibold mt-4 cursor-pointer text-[0.8rem] xs:text-xl"
            rel="noreferrer"
          >
            {name}
          </a>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
