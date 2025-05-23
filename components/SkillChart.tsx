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

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: 5,
        ticks: {
          stepSize: 1
        }
      }
    }
  };

  return (
    <section className="px-4 py-12 max-w-3xl mx-auto">
      <div className="flex flex-row gap-6 justify-center items-start">
        <div className="w-40 flex flex-col items-center">
          <h2 className="text-2xl mb-4">技術力</h2>
          <div className="w-40 h-40">
            <Radar data={dataTech} options={options} />
          </div>
        </div>
        <div className="w-40 flex flex-col items-center">
          <h2 className="text-2xl mb-4">人間力</h2>
          <div className="w-40 h-40">
            <Radar data={dataHuman} options={options} />
          </div>
        </div>
      </div>
    </section>
  );
}