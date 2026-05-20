type Stat = {
  value: string;
  label: string;
};

export function StatsBlock({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {stats.map((stat) => (
        <div
          className="glass-card rounded-[1.25rem] px-4 py-6 text-center sm:bg-transparent sm:p-0 sm:shadow-none"
          key={`${stat.value}-${stat.label}`}
        >
          <div className="text-secondary text-3xl font-black sm:text-4xl md:text-5xl">
            {stat.value}
          </div>
          <div className="label-caps text-heading mt-3">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
