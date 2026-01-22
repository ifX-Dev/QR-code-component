import "./App.css";
import qrCode from "./assets/image-qr-code.png";

function App() {
  return (
    <>
      <div className="bg-white w-[320px] p-[16px] rounded-[20px] shadow-lg">
        <img src={qrCode} alt="" className="rounded-[10px] mb-[24px]" />
        <div className="px-[16px]">
          <h1 className="outfit-bold mb-[24px]">
            Improve your front-end skills by building projects
          </h1>
          <p className="outfit-regular mb-[24px]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
