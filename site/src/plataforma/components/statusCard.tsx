import React from "react";

interface StatusCardprops {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: "primeira" | "segunda" | "terceira";
  colorText: "primeira-cor" | "segunda-cor" | "terceira-cor";
}
const colorClasses = {
  primeira: "text-red-700",
  segunda: "text-green-700",
  terceira: "text-yellow-700",
};

const textColorClasses = {
  "primeira-cor": "text-red-500",
  "segunda-cor": "text-yellow-500",
  "terceira-cor": "text-green-500",
};
const statusCard = ({
  title,
  value,
  color,
  icon,
  colorText,
}: StatusCardprops) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-card">
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[color]}`}
        >
          {icon}
        </div>
        <div className="-mt-4">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p
            className={`font-ibmPlex text-2xl font-bold ${textColorClasses[colorText]} text-foreground`}
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default statusCard;
