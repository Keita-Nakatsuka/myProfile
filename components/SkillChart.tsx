'use client';

import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export function SkillChart() {
  const dataTech = {
    labels: ["要件定義", "設計", "実装", "テスト", "運用"],
    datasets: [
      {
        label: "技術力",
        data: [4, 4, 3, 3, 3],
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderColor: "rgba(255, 255, 255, 0.7)",
        borderWidth: 1,
      },
    ],
  };

  const dataHuman = {
    labels: ["向上心", "協調性", "問題解決力", "論理的思考力", "粘り強さ"],
    datasets: [
      {
        label: "人間力",
        data: [4, 4, 4, 4, 5],
        backgroundColor: "rgba(200, 200, 255, 0.2)",
        borderColor: "rgba(200, 200, 255, 0.7)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="px-4 py-12 max-w-3xl mx-auto space-y-12">
      <div>
        <h2 className="text-2xl mb-4">技術力</h2>
        <Radar data={dataTech} />
      </div>
      <div>
        <h2 className="text-2xl mb-4">人間力</h2>
        <Radar data={dataHuman} />
      </div>
    </section>
  );
}