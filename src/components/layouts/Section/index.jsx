export default function Section({ children }) {
  return (
    <section className="max-w-[1900px] flex justify-between items-center mx-auto my-0 px-[10rem] py-[3rem]">
      {children}
    </section>
  );
}
