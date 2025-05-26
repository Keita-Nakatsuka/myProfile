export function Career() {
    return (
    <section className="w-full px-4 mb-0 min-h-[80vh] flex flex-col justify-between">
        <div className="w-full max-w-7xl mx-auto flex-grow">
            {/* タイトル */}
            <h1 className="text-5xl md:text-3xl font-bold">経歴概略</h1>
            <p>1分で経歴を説明します。詳細は職務経歴書をご覧いただけると幸いです。</p>
            {/* 経歴テキスト */}
            <h2 className="text-2xl md:text-3xl text-textSecondary text-left mt-5">
                <ul className="space-y-5 text-left">
                    <li>• 〜2010年: 大学卒業後ITエンジニアとしてWebシステム、サイト制作を経験</li>
                    <li>• 〜2020年: 幼少期より興味のあったゲーム業界に転職、エンジニア知識を活用しQA業務を足がかりに企画職を経てディレクターを経験。多数のソーシャルゲームの開発・運営に携わる</li>
                    <li>• 2020年〜: ソーシャルゲームバブルの終焉と共にWeb業界に戻る。自社プロダクトを立ち上げ現在に至る</li>
                </ul>
                <p className="mt-10">一貫していることはモノづくりに対する熱意と、それを世の中に広めたいという想いで仕事をしてきたことです</p>
            </h2>
        </div>
    </section>
    );
  }