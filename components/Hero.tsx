export function Hero() {
  return (
    <section className="w-full px-4 mb-0 min-h-[80vh] flex flex-col justify-between">
      <div className="w-full max-w-7xl mx-auto flex-grow">
        {/* タイトル */}
        <h1 className="text-5xl md:text-8xl font-bold">NAKATSUKA</h1>
        {/* サブタイトル */}
        <h2 className="text-2xl md:text-3xl text-textSecondary text-left mt-5">
          関わるサービスで世の中にインパクトを！
        </h2>
      </div>
      {/* テキスト */}
      <p className="text-xl md:text-5xl text-textSecondary text-right w-full max-w-7xl mx-auto">
        プロダクト志向なエンジニア系
      </p>
    </section>
  );
}