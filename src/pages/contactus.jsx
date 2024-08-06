const ContactUS = () => {
  return (
    <>
      <div className="container m-auto">
        <div className="w-[895px] m-auto px-32">
          <div>
            <h1 className="text-4xl font-bold ">Contact Us</h1>
            <p className="py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="flex gap-5">
            <div className="w-[294px] h-[133px] border rounded-lg">
              <p className="text-3xl font-bold px-4 py-4">Address</p>
              <h1 className="text-[#696A75] text-lg py-1 px-4">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </h1>
            </div>
            <div className="w-[294px] h-[133px] border rounded-lg">
              <p className="text-3xl font-bold px-4 py-4">Contact</p>
              <h1 className="text-[#696A75] text-lg py-1 px-4">
                313-332-8662 info@email.com
              </h1>
            </div>
          </div>
          <div className="flex flex-col py-7">
            <h1>Leave a message</h1>
            <div className="flex-gap-5">
              <input className="border rounded-lg" type="text" />
              <input className="border rounded-lg" type="text" />
            </div>
            <input className="border rounded-lg" type="text" />
            <input className="border rounded-lg py-10" type="text" />
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUS;
