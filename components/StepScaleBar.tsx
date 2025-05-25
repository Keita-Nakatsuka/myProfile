type StepScaleBarProps = {
    labelLeft: string;
    labelRight: string;
    value: number; // 0〜10の整数
    steps?: number;
  };
  
  export default function StepScaleBar({
    labelLeft,
    labelRight,
    value,
    steps = 10,
  }: StepScaleBarProps) {
    return (
      <div className="flex flex-col gap-1 w-full max-w-xl">
        <div className="flex justify-between text-sm text-gray-300 px-1">
          <span>{labelLeft}</span>
          <span>{labelRight}</span>
        </div>
  
        <div className="flex items-center justify-between w-full">
          {Array.from({ length: steps + 1 }).map((_, i) => (
            <div key={i} className="flex-1 flex justify-center">
              <div
                className={`w-3 h-3 rounded-full ${
                  i === value ? "bg-blue-600" : "bg-gray-400"
                }`}
              />
              {i < steps && (
                <div className="flex-1 h-0.5 bg-gray-300 mx-1 mt-1" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
  