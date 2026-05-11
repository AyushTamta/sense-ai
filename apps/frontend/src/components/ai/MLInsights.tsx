"use client";

interface Props {

  predictions: {

    predicted_churn_customers?: number;

    average_churn_probability?: number;
  };
}

export default function MLInsights({
  predictions,
}: Props) {

  const riskLevel =
    (predictions.average_churn_probability || 0) > 60
      ? "High Risk"
      : "Moderate Risk";

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mt-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <div>

          <h3 className="text-2xl font-semibold text-white">
            ML Churn Intelligence
          </h3>

          <p className="text-zinc-400 text-sm mt-1">
            Predictive analytics powered by machine learning
          </p>

        </div>

        <div className="text-green-400 text-sm">
          ML Model Active
        </div>

      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-6">

        <div className="bg-black/30 border border-white/10 rounded-2xl p-5">

          <p className="text-zinc-400 text-sm">
            Predicted Churn Customers
          </p>

          <h4 className="text-4xl font-bold text-red-400 mt-3">

            {predictions.predicted_churn_customers || 0}

          </h4>

        </div>

        <div className="bg-black/30 border border-white/10 rounded-2xl p-5">

          <p className="text-zinc-400 text-sm">
            Average Churn Probability
          </p>

          <h4 className="text-4xl font-bold text-purple-400 mt-3">

            {predictions.average_churn_probability || 0}%

          </h4>

        </div>

      </div>

      {/* AI Recommendation */}
      <div className="mt-6 bg-black/30 border border-white/10 rounded-2xl p-5">

        <p className="text-white font-medium">
          AI Risk Assessment
        </p>

        <p className="text-zinc-400 mt-2">

          Current customer base is classified as{" "}

          <span className="text-red-400 font-semibold">
            {riskLevel}
          </span>

          . Recommended action:
          launch personalized retention campaigns
          for inactive and high-risk users.

        </p>

      </div>

    </div>
  );
}