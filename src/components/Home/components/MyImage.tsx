import MyPicture from "../../../assets/my-image.jpg";
const MyImage = () => {
  return (
    <div className="w-5/6 sm:w-[300px] lg:w-[430px] border-[3px] border-white rounded-blob-border-radius sm:border-4 md:hover:scale-105 duration-200 md:hover:border-transparent cursor-pointer">
      <img
        src={MyPicture}
        className="w-100 rounded-blob-border-radius p-2 block"
        alt="Mohit Joshi pic"
      />
    </div>
  );
};

export default MyImage;
