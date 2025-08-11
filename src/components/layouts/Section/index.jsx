export default function Section({ children, backgroundImg = false }) {
  const bgClasses = backgroundImg
    ? "bg-[url('/templates/background.png')] bg-cover bg-center bg-no-repeat min-h-[calc(100vh-130px)]"
    : "bg-background";

  return (
    <section className={`${bgClasses}`}>
      <div className="max-w-[1900px] flex justify-between items-center mx-auto my-0 px-[10rem] py-[3rem]">
        {children}
      </div>
    </section>
  );
}
