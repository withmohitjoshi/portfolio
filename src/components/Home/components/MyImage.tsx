import MyPicture from "../../../assets/my-image.jpg";
const MyImage = () => {
  return (
    <div className="w-5/6 sm:w-[300px] lg:w-[430px] ">
      <img
        src={MyPicture}
        className="w-100  p-2 block cursor-pointer border-[3px] border-white rounded-blob-border-radius sm:border-4 hover:scale-105 duration-200 hover:border-transparent "
        alt="Mohit Joshi pic"
      />
    </div>
  );
};

export default MyImage;
