function ImgBox({ className }) {
  return (
    <div
      className={`${className} imgBox relative h-44  items-end overflow-hidden sm:h-[30vh] w-full sm:w-[30vw] rounded-md border-2 border-black`}
    >
      <img
        src="https://i.pinimg.com/1200x/39/45/cd/3945cd4b7bf8d39e31f3dd48d34f8e0b.jpg"
        className="object-cover w-full object-center absolute -z-10"
      />
    </div>
  );
}

export default ImgBox;
