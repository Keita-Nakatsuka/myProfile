export function Lasttext() {
    return (
        <section className="w-full px-4 mb-0 min-h-[80vh] flex flex-col justify-between">
        <div className="w-full max-w-7xl mx-auto flex-grow">
            {/* タイトル */}
            <h1 className="text-2xl md:text-3xl font-bold">さいごに</h1>
            {/* テキスト */}
            <p className="text-2xl md:text-2xl text-textSecondary text-left mt-5">
            ここまでお読みくださりありがとうございました
            </p>
            <p className="text-2xl md:text-2xl text-textSecondary text-left mt-5">
            本サイトはポートフォリオと技術検証を兼ねて作成したサイトになります
            </p>
            <p className="text-2xl md:text-2xl text-textSecondary text-left mt-5">
            AWSで独自ホスティングを行いフロントはNext.jsで作成しています
            </p>
        </div>
        </section>
    );
}