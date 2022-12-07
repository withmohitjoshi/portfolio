import QRCodeImage from "../../../assets/qr-code.png";
const QRCode = () => {
  return (
    <div className="w-full hidden md:flex flex-col gap-4 items-center pt-4 border-t-2 border-gray-300 sm:pt-0 sm:border-0">
      <img
        src={QRCodeImage}
        alt="insta qr code"
        className="w-full md:w-2/3 lg:w-[350px]"
      />
      <p className="text-gray-900 font-semibold md:text-xl">
        Scan & DM on Instagram
      </p>
    </div>
  );
};

export default QRCode;
