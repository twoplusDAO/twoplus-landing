// type ITextBlock = {
//   copy: string;
// };

const TextBlockBlue = () => (
  <header>
    <section
      className={`bg-tpBlack-base border-tpSky-base shadow-tpSky-base sm:shadow-tpSky-base md:shadow-tpSky-base mx-auto rounded-xl shadow-[-10px_10px_50px_0px] sm:shadow-[-25px_25px_50px_0px] md:shadow-[-30px_30px_50px_0px]  border-4 ml-5 mr-5 px-10 md:px-15 lg:px-20 py-10 md:py-15 lg:py-20`}
    >
      <h1 className="font-hev mb-10 text-xl md:text-3xl text-tpCream-base whitespace-pre-line">
        Twoplus is a mental fitness club for contributors.
      </h1>

      <h1 className="font-reg  text-xl md:text-3xl text-tpCream-base whitespace-pre-line">
        Join top contributors and operators for a six week cohort-based program
        on mental fitness, DAO and contributor experience design. You&apos;ll
        become part of Twoplus and gain the skills needed to build the future of
        DAOs.
      </h1>
    </section>
  </header>
);

export { TextBlockBlue };
