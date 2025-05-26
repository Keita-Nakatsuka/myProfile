'use client';

import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import StepScaleBar from './StepScaleBar'; // この行を追加

// ... existing code ...
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export function SkillChart() {
  const dataTech = {
    labels: ["要件定義力", "設計力", "実装力", "テスト力", "運用力"],
    datasets: [
      {
        label: "スキルチャート",
        data: [5, 4, 3, 4, 6],
        backgroundColor: "rgba(255, 255, 2, 0.2)",
        borderColor: "rgba(172, 214, 211, 0.9)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: 6,
        ticks: {
          stepSize: 1, //点数の刻み
          display: false //12345の数値表示
        },
        pointLabels: {
          color: '#ffffff'//項目のテキストカラー
        },
        grid: {
          color: 'rgba(210, 210, 210, 0.5)'//チャート背景のグリッドカラー
        },
        borderColor: '#00ff00',
      }
    },
    layout: {
      padding: 20
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <section className="w-full px-4 mb-0 min-h-[80vh] flex flex-col justify-between">
      <div className="w-full max-w-7xl mx-auto flex-grow">
        {/* タイトル */}
        <h1 className="text-5xl md:text-3xl font-bold">スキル・性格</h1>
        {/* スキルチャート */}
          <div className="flex flex-col md:flex-row justify-center items-start gap-12 mt-10">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl mb-4 text-center">スキルチャート</h2>
              <div style={{ width: '320px', height: '320px' }}>
                <Radar data={dataTech} options={options} />
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl mb-4">スキルについて</h2>
              <ul className="space-y-2 text-left mt-2">
                <li>• 要件定義: ディレクター経歴が長いため話し合いながら仕様を詰めていくことが得意です</li>
                <li>• 設計: データやパラメータの定義は得意ですが、アプリ・インフラ設計経験少なめです</li>
                <li>• 実装: コーディングは好きですがブランクもありそこまで得意ではありません</li>
                <li>• テスト: 経験と勘から問題の特定が早いです</li>
                <li>• 運用: KPI分析から改善案の作成経験が長いです</li>
              </ul>
            </div>
          </div>
          {/* パーソナルチャート */}
          <div className="flex flex-col justify-center mt-10 w-full">
            <div className="flex flex-col">
              <h2 className="text-2xl mb-4 text-left">パーソナリティ</h2>
              <div className="space-y-5 mx-auto w-full max-w-md">
                <StepScaleBar labelLeft="外交的" labelRight="内向的" value={7} />
                <StepScaleBar labelLeft="直感型" labelRight="現実型" value={3} />
                <StepScaleBar labelLeft="思考型" labelRight="感情型" value={4} />
                <StepScaleBar labelLeft="計画型" labelRight="探索型" value={4} />
                <StepScaleBar labelLeft="自己主張型" labelRight="激動型" value={6} />
                <h2 className="text-2xl mb-4 text-center">MBTI診断は【INTF-T】です</h2>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}