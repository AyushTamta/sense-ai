from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

import pandas as pd
import numpy as np

from sklearn.linear_model import LogisticRegression

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():

    return {
        "message": "Sensa Backend Running"
    }

@app.post("/analyze")
async def analyze_dataset(
    file: UploadFile = File(...)
):

    # Read CSV
    df = pd.read_csv(file.file)

    # Basic Analytics
    total_customers = len(df)

    high_risk = len(
        df[df["churn_risk"] == "High"]
    )

    total_revenue = df["total_spent"].sum()

    vip_customers = len(
        df[df["segment"] == "VIP"]
    )

    # ---------------------------
    # MACHINE LEARNING SECTION
    # ---------------------------

    # Create fake target variable
    # High churn = 1
    # Others = 0

    df["target"] = (
        df["churn_risk"] == "High"
    ).astype(int)

    # Features
    X = df[
        [
            "last_purchase_days",
            "order_frequency",
            "total_spent",
        ]
    ]

    y = df["target"]

    # Train model
    model = LogisticRegression()

    model.fit(X, y)

    # Predict churn probability
    probabilities = model.predict_proba(X)[:, 1]

    # Average probability
    avg_probability = round(
        np.mean(probabilities) * 100,
        2
    )

    # Customers predicted at risk
    predicted_risk = int(
        np.sum(probabilities > 0.5)
    )

    return {

        # Analytics
        "total_customers": int(total_customers),

        "high_risk_customers": int(high_risk),

        "total_revenue": float(total_revenue),

        "vip_customers": int(vip_customers),

        # ML Insights
        "predicted_churn_customers": predicted_risk,

        "average_churn_probability": avg_probability,
    }