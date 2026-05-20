type TeamCardProps = {
  name: string;
  title: string;
  image: string;
};

export function TeamCard({ name, title, image }: TeamCardProps) {
  return (
    <article className="glass-card flex min-h-[20rem] flex-col items-center justify-center rounded-[1.5rem] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#2792ff]/50 sm:min-h-[22rem] sm:rounded-[2rem] sm:p-8">
      <div className="relative mb-7 h-32 w-32 rounded-full border-2 border-[#2792ff] p-2 shadow-[0_0_0_5px_rgba(39,146,255,0.18)] sm:h-40 sm:w-40 lg:h-44 lg:w-44">
        <img
          alt={name}
          className="h-full w-full rounded-full object-cover"
          src={image}
        />
      </div>
      <h3 className="max-w-[14rem] text-3xl font-black leading-tight text-white sm:text-4xl">
        {name}
      </h3>
      <p className="mt-4 text-sm font-extrabold uppercase tracking-wide text-[#00c8fe] sm:text-base lg:text-lg">
        {title}
      </p>
    </article>
  );
}
