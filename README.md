# KINLU Product Documentation Outline

## Overview
Comprehensive documentation structure for KINLU Agent 1, designed to enable self-serve onboarding, reduce support friction, and establish KINLU as a credible, production-ready ML platform.

---

## 1. Introduction & Getting Started

### 1.1 Welcome to KINLU
- **What is KINLU?** — One-sentence positioning: "Build production ML models from your marketing data in minutes. No code. No data scientists."
- **What can you do with KINLU?** — Predict churn, forecast revenue, segment customers, identify high-value prospects
- **Who is this for?** — Marketing teams, growth teams, e-commerce managers, SaaS founders
- **Why KINLU vs building in-house?** — Cost comparison ($50K+/month vs $199/month), time to value (6 months vs 5 minutes), maintenance burden

### 1.2 Quick Start (5-Minute Setup)
- **Step 1: Sign up** — Create account, verify email
- **Step 2: Connect data** — Upload CSV or connect Shopify
- **Step 3: Choose a model** — Select from 6 pre-built models
- **Step 4: Run prediction** — KINLU builds the model automatically
- **Step 5: Download results** — Export predictions, SHAP explanations, feature importance
- **Screenshot walkthrough** — Visual guide for each step

### 1.3 Account Setup
- **Creating your workspace** — Team vs individual accounts
- **Inviting team members** — Role-based access (Admin, Editor, Viewer)
- **Setting preferences** — Timezone, notification settings, data retention
- **Billing & subscription** — Free vs Pro tier differences
- **API keys** — How to generate and secure API keys

### 1.4 Understanding the Dashboard
- **Dashboard overview** — Main navigation, recent models, quick actions
- **Models section** — View all models, status, performance metrics
- **Data sources** — Connected integrations, upload history
- **Settings** — Account, team, billing, API keys
- **Help & support** — Links to docs, FAQ, contact support

---

## 2. Core Concepts

### 2.1 What is a Model?
- **Definition** — A trained ML algorithm that makes predictions on your data
- **How it works** — Data input → Training → Predictions → Explanations
- **Model lifecycle** — Creation → Training → Evaluation → Deployment → Monitoring
- **Performance metrics** — Accuracy, precision, recall, AUC-ROC (explained simply)

### 2.2 The 6 Model Types (Agent 1)

#### 2.2.1 Churn Prediction
- **What it does** — Identifies customers likely to leave in the next 30/60/90 days
- **Use cases** — Retention campaigns, customer success prioritization, win-back offers
- **Required data** — Customer ID, purchase history, engagement metrics, demographics
- **Output** — Churn probability score (0-100%), top risk factors, recommended actions
- **Example** — "Customer #1234 has 78% churn risk because they haven't purchased in 45 days and engagement dropped 60%"

#### 2.2.2 Revenue Forecast
- **What it does** — Predicts total revenue for next month/quarter/year
- **Use cases** — Budgeting, growth planning, investor reporting, sales targets
- **Required data** — Historical revenue, seasonality, marketing spend, external factors
- **Output** — Revenue forecast with confidence intervals, trend analysis, growth rate
- **Example** — "Next quarter revenue: $500K (±$50K), 15% growth vs last year"

#### 2.2.3 Customer Segmentation
- **What it does** — Groups customers into behavioral segments automatically
- **Use cases** — Personalized campaigns, pricing strategies, product recommendations
- **Required data** — Customer behavior, purchase patterns, engagement, demographics
- **Output** — Segment labels, size, characteristics, recommended messaging
- **Example** — "Segment A: High-value repeat buyers (40% of customers, 80% of revenue)"

#### 2.2.4 Lifetime Value (LTV) Prediction
- **What it does** — Estimates total revenue each customer will generate
- **Use cases** — Acquisition budgeting, customer prioritization, retention ROI
- **Required data** — Purchase history, customer age, engagement, acquisition channel
- **Output** — LTV score, percentile ranking, acquisition cost payback period
- **Example** — "Customer #5678 has $8,500 LTV; acquisition cost was $50 (170x ROI)"

#### 2.2.5 Next Purchase Prediction
- **What it does** — Forecasts when each customer will buy next
- **Use cases** — Email timing optimization, inventory planning, campaign scheduling
- **Required data** — Purchase history, seasonality, product category, customer lifecycle
- **Output** — Days until next purchase, confidence score, recommended action date
- **Example** — "Customer #9012 will likely purchase in 14 days; send offer on day 10"

#### 2.2.6 Product Recommendation
- **What it does** — Suggests products each customer is most likely to buy
- **Use cases** — Cross-sell, upsell, personalized email, homepage recommendations
- **Required data** — Purchase history, product attributes, customer preferences
- **Output** — Ranked product recommendations, confidence scores, estimated revenue lift
- **Example** — "Recommend Product B to Customer #3456 (72% likelihood, $45 avg order value)"

### 2.3 SHAP Explanations
- **What is SHAP?** — SHapley Additive exPlanations; shows why each prediction was made
- **Why it matters** — Builds trust, enables debugging, satisfies regulatory requirements
- **How to read it** — Feature importance, direction of impact, magnitude
- **Example** — "Churn prediction: High impact because (1) no purchases in 60 days (-45 points), (2) engagement dropped 70% (-30 points), (3) customer age 2 years (+15 points)"
- **When to use** — Always, for every prediction; non-negotiable for compliance

### 2.4 Data Privacy & Security
- **Data encryption** — All data encrypted at rest and in transit (AES-256, TLS 1.3)
- **Data retention** — Free tier: 30 days; Pro tier: Unlimited
- **GDPR compliance** — Right to deletion, data portability, privacy policy
- **SOC 2 compliance** — Audit trail, access controls, incident response
- **Your data ownership** — You own all data; KINLU never sells or shares it

---

## 3. Data Preparation

### 3.1 Supported Data Sources
- **CSV upload** — Local file upload, drag-and-drop interface
- **Shopify** — Automatic sync of orders, customers, products
- **Future integrations** — Google Analytics 4, Meta Ads, Klaviyo, Stripe (coming in Agent 2)

### 3.2 CSV Format Requirements

#### 3.2.1 File Structure
- **Format** — CSV (comma-separated values)
- **Encoding** — UTF-8
- **Max file size** — 100 MB (Free), 1 GB (Pro)
- **Max rows** — 1 million (Free), 10 million (Pro)
- **Max columns** — 50

#### 3.2.2 Column Requirements
- **Unique identifier** — Customer ID, order ID, or transaction ID (required, no duplicates)
- **Target variable** — The column you want to predict (e.g., "churned", "revenue", "product_purchased")
- **Features** — Supporting data (purchase history, engagement, demographics)
- **Date columns** — Timestamps for time-series models (format: YYYY-MM-DD or YYYY-MM-DD HH:MM:SS)

#### 3.2.3 Data Types
- **Numeric** — Numbers (integers, decimals)
- **Categorical** — Text categories (e.g., "premium", "free", "inactive")
- **Boolean** — True/False or 1/0
- **Date** — Timestamps (YYYY-MM-DD format)
- **Unsupported** — Images, videos, free text (will be ignored)

#### 3.2.4 Data Quality Requirements
- **Missing values** — Up to 30% missing data is OK; KINLU handles it
- **Duplicates** — Remove exact duplicates before upload
- **Outliers** — Extreme values are OK; KINLU is robust to outliers
- **Imbalanced classes** — OK for classification (e.g., 95% non-churned, 5% churned)

### 3.3 Preparing Your CSV: Step-by-Step

#### Step 1: Gather Your Data
- Export customer data from your database or CRM
- Include all relevant columns (purchase history, engagement, demographics)
- Go back 12-24 months of historical data for best results

#### Step 2: Clean Your Data
- Remove duplicate rows
- Remove rows with missing target variable
- Standardize date formats (YYYY-MM-DD)
- Standardize categorical values (lowercase, no extra spaces)

#### Step 3: Create Target Variable
- **For Churn Prediction** — Create column "churned" (1 = churned, 0 = active) based on 90-day inactivity
- **For Revenue Forecast** — Create column "revenue" with total purchase amount
- **For Segmentation** — No target variable needed
- **For LTV Prediction** — Create column "ltv" with total lifetime revenue
- **For Next Purchase** — Create column "days_to_next_purchase" (days since last purchase)
- **For Product Recommendation** — Create column "product_purchased" (product name or ID)

#### Step 4: Format Your CSV
- First row = column headers (no special characters, use underscores for spaces)
- One row per customer/order/transaction
- Save as .csv file (not .xlsx or .xls)

#### Step 5: Upload to KINLU
- Click "New Model" → "Upload CSV"
- Select your file
- Map columns to KINLU fields (ID, target, features)
- Review data preview
- Click "Create Model"

### 3.4 Common Data Preparation Mistakes
- **Mistake 1: Including future data** — Don't include data from after your target date (causes data leakage)
- **Mistake 2: Missing target variable** — Every row must have a value for what you're predicting
- **Mistake 3: Wrong date format** — Use YYYY-MM-DD; don't use "Jan 1, 2024"
- **Mistake 4: Categorical columns with 1000+ unique values** — Limit to top 50 categories
- **Mistake 5: Mixing units** — If revenue column has both USD and EUR, convert to one currency first

### 3.5 Example CSV Files
- **Churn Prediction** — Sample CSV with customer data, purchase history, engagement metrics
- **Revenue Forecast** — Sample CSV with historical revenue, seasonality, marketing spend
- **Customer Segmentation** — Sample CSV with behavioral data, demographics
- **LTV Prediction** — Sample CSV with acquisition channel, purchase frequency, order value
- **Next Purchase Prediction** — Sample CSV with purchase history, product category
- **Product Recommendation** — Sample CSV with purchase history, product attributes

---

## 4. Building Your First Model

### 4.1 Model Creation Workflow

#### Step 1: Choose Model Type
- Select from 6 pre-built models
- Read 1-paragraph description of what it does
- See example use case and output

#### Step 2: Connect Data
- Upload CSV or select Shopify
- Map columns to KINLU fields
- Review data preview (first 100 rows)

#### Step 3: Configure Model
- **Train/test split** — 80/20 (automatic)
- **Target variable** — Select column to predict
- **Features** — Auto-selected; can customize
- **Seasonality** — Enable for revenue/time-series models
- **Time window** — 12 months (default), can adjust

#### Step 4: Review & Launch
- See estimated training time (usually 2-5 minutes)
- Review data quality score
- Click "Build Model"

#### Step 5: Monitor Training
- Real-time progress bar
- Data validation checks
- Feature importance preview

#### Step 6: Review Results
- Model performance metrics (accuracy, AUC, RMSE)
- Feature importance ranking
- SHAP explanations for sample predictions
- Download predictions & explanations as CSV

### 4.2 Understanding Model Performance

#### Accuracy Metrics
- **Classification models** (Churn, Segmentation, Product Recommendation)
  - Accuracy: % of correct predictions
  - Precision: % of positive predictions that were correct
  - Recall: % of actual positives that were found
  - AUC-ROC: Overall model quality (0.5 = random, 1.0 = perfect)
- **Regression models** (Revenue Forecast, LTV, Next Purchase)
  - RMSE: Average prediction error (lower is better)
  - MAE: Mean absolute error
  - R²: % of variance explained (0 = bad, 1 = perfect)

#### What's a "Good" Score?
- **Churn Prediction** — AUC > 0.75 is good, > 0.85 is excellent
- **Revenue Forecast** — RMSE < 10% of average revenue
- **Segmentation** — Silhouette score > 0.5 is good
- **LTV Prediction** — R² > 0.6 is good, > 0.8 is excellent
- **Next Purchase** — RMSE < 7 days is good
- **Product Recommendation** — Precision > 0.6 is good, > 0.75 is excellent

#### Why Might Performance Be Low?
- **Insufficient data** — Need at least 500 rows; 5,000+ is better
- **Poor data quality** — Missing values, outliers, inconsistent formatting
- **Weak features** — Columns don't predict target well
- **Imbalanced target** — 99% of one class, 1% of another
- **Target leakage** — Features include information from after the target date

### 4.3 Exporting Results
- **Predictions CSV** — Customer ID + prediction score + confidence
- **SHAP Explanations** — Feature importance for each prediction
- **Feature Importance** — Global ranking of most important features
- **Model Report** — PDF with metrics, charts, recommendations

---

## 5. Using Predictions

### 5.1 Exporting & Integrating Predictions

#### Option 1: Download CSV
- Click "Download Predictions"
- Get CSV with customer ID, prediction score, confidence
- Import into your CRM, email platform, or analytics tool

#### Option 2: API Integration (Pro tier)
- Use KINLU API to fetch predictions programmatically
- Real-time predictions as new data arrives
- Webhook notifications when predictions change

#### Option 3: Zapier Integration (Coming Soon)
- Connect KINLU to 1000+ apps (Slack, HubSpot, Klaviyo, etc.)
- Automate workflows based on predictions

### 5.2 Taking Action on Predictions

#### Churn Prediction
- **High-risk segment** — Send retention offer, priority support outreach
- **Medium-risk segment** — Send engagement email, ask for feedback
- **Low-risk segment** — Standard marketing campaigns

#### Revenue Forecast
- **Upside scenario** — Plan hiring, inventory, marketing spend
- **Downside scenario** — Prepare cost-cutting measures, investor communication
- **Use case** — Quarterly business planning, board reporting

#### Customer Segmentation
- **Segment A (High-value)** — VIP treatment, exclusive offers, dedicated support
- **Segment B (Growing)** — Upsell campaigns, loyalty programs
- **Segment C (At-risk)** — Win-back offers, feedback surveys

#### LTV Prediction
- **High LTV** — Invest in acquisition, premium onboarding
- **Medium LTV** — Standard marketing, nurture campaigns
- **Low LTV** — Cost-effective acquisition, self-serve onboarding

#### Next Purchase Prediction
- **Predicted purchase in 7 days** — Send targeted offer on day 5
- **Predicted purchase in 30 days** — Add to nurture sequence
- **No predicted purchase** — Trigger re-engagement campaign

#### Product Recommendation
- **Homepage personalization** — Show recommended products to each visitor
- **Email campaigns** — Include recommended products in newsletters
- **Post-purchase** — Recommend complementary products in thank-you email

### 5.3 Measuring Impact
- **Baseline** — Performance before using KINLU predictions
- **Treatment group** — Customers who received KINLU-based campaigns
- **Control group** — Customers who received standard campaigns
- **Metrics** — Conversion rate, AOV, retention, revenue per customer
- **Expected lift** — 15-25% improvement in key metrics

---

## 6. API Reference

### 6.1 Authentication
- **API Key** — Generate in Settings → API Keys
- **Rate limits** — 1,000 requests/minute (Pro tier)
- **Endpoints** — Base URL: `https://api.kinlu.ai/v1`

### 6.2 Core Endpoints

#### Create Model
```
POST /models
{
  "name": "Churn Prediction Q1",
  "type": "churn",
  "data_source": "csv",
  "csv_url": "https://...",
  "target_column": "churned",
  "features": ["days_since_purchase", "engagement_score", "customer_age"]
}
```

#### Get Model Status
```
GET /models/{model_id}
Returns: status, accuracy, feature_importance, training_progress
```

#### Get Predictions
```
GET /models/{model_id}/predictions?customer_id=123
Returns: prediction_score, confidence, shap_explanation
```

#### List All Models
```
GET /models
Returns: array of all models with metadata
```

#### Delete Model
```
DELETE /models/{model_id}
```

### 6.3 Response Format
```json
{
  "status": "success",
  "data": {
    "model_id": "model_abc123",
    "prediction": 0.78,
    "confidence": 0.92,
    "explanation": {
      "top_features": [
        {"name": "days_since_purchase", "impact": -45},
        {"name": "engagement_score", "impact": -30}
      ]
    }
  }
}
```

### 6.4 Error Handling
- **400 Bad Request** — Invalid parameters
- **401 Unauthorized** — Invalid API key
- **404 Not Found** — Model doesn't exist
- **429 Too Many Requests** — Rate limit exceeded
- **500 Server Error** — Contact support

### 6.5 Code Examples
- **Python** — Using requests library
- **JavaScript** — Using fetch API
- **cURL** — Command-line examples
- **Postman** — Pre-built collection

---

## 7. FAQ & Troubleshooting

### 7.1 General Questions

**Q: How long does it take to build a model?**
A: 2-5 minutes for most models. Larger datasets (1M+ rows) may take 10-15 minutes.

**Q: How much historical data do I need?**
A: Minimum 500 rows; 5,000+ rows recommended for best accuracy.

**Q: Can I use data from multiple sources?**
A: Not yet. Agent 2 (coming Q2 2024) will support multi-source data fusion.

**Q: How often should I retrain my model?**
A: Monthly for seasonal models; quarterly for others. KINLU will notify you when accuracy drops.

**Q: Can I export my data?**
A: Yes. Download predictions as CSV anytime. Pro tier has unlimited data retention.

**Q: Is my data secure?**
A: Yes. All data encrypted at rest (AES-256) and in transit (TLS 1.3). SOC 2 certified.

### 7.2 Data & Upload Issues

**Q: My CSV won't upload. What's wrong?**
A: Check file size (max 100 MB), encoding (UTF-8), and format (.csv not .xlsx).

**Q: I'm getting "Missing target variable" error.**
A: Ensure every row has a value for the column you're predicting. Remove rows with null values in target column.

**Q: My model accuracy is very low. Why?**
A: Possible causes: (1) Insufficient data, (2) Poor data quality, (3) Weak features, (4) Imbalanced target. See "Improving Model Performance" section.

**Q: How do I handle missing values in my data?**
A: KINLU handles up to 30% missing data automatically. For more, either fill with mean/median or remove rows.

**Q: Can I use categorical data?**
A: Yes. KINLU automatically encodes categorical columns. Limit to 50 unique values per column.

### 7.3 Model Performance & Accuracy

**Q: What does "accuracy" mean?**
A: % of predictions that were correct. For imbalanced data, look at AUC-ROC or F1 score instead.

**Q: My model has 95% accuracy but seems wrong. Why?**
A: Likely imbalanced target (e.g., 95% non-churned, 5% churned). Use AUC-ROC instead; it's more reliable.

**Q: How do I improve model accuracy?**
A: (1) Add more data, (2) Add better features, (3) Remove noisy columns, (4) Fix data quality issues, (5) Retrain monthly.

**Q: What's SHAP and why should I care?**
A: SHAP shows WHY each prediction was made. Essential for debugging, compliance, and building trust.

**Q: Can I retrain my model with new data?**
A: Yes. Upload updated CSV and click "Retrain Model". Old version is preserved.

### 7.4 Predictions & Integration

**Q: How do I use predictions in my CRM?**
A: Download predictions CSV, then import into your CRM using their data import tool. See CRM-specific guides below.

**Q: Can I get real-time predictions via API?**
A: Yes, Pro tier only. See API Reference section.

**Q: What's the difference between prediction score and confidence?**
A: Prediction score (0-100%) is the model's answer. Confidence (0-100%) is how sure the model is.

**Q: Should I trust a prediction with 60% confidence?**
A: Depends on use case. For critical decisions, use only 80%+ confidence. For exploratory analysis, 60%+ is OK.

**Q: How do I measure ROI from KINLU predictions?**
A: Compare metrics (conversion, retention, revenue) for customers targeted with KINLU predictions vs control group.

### 7.5 Billing & Account

**Q: What's included in the Free tier?**
A: 3 models/month, CSV upload only, 30-day data retention, no API access.

**Q: What's included in the Pro tier?**
A: Unlimited models, all data sources (Shopify, GA4, Meta, Klaviyo), unlimited data retention, API access, SHAP explanations, priority support.

**Q: Can I downgrade from Pro to Free?**
A: Yes, anytime. Your data is preserved for 30 days.

**Q: Do you offer annual billing?**
A: Not yet. Coming Q2 2024 with 20% discount.

**Q: Can I get a custom plan?**
A: Yes. Contact sales@kinlu.ai for enterprise pricing.

### 7.6 Technical Issues

**Q: I'm getting a "training failed" error.**
A: Usually due to data quality issues. Check for: (1) Missing target variable, (2) All rows identical, (3) Extreme outliers. Contact support if unsure.

**Q: My model is stuck in "training" state.**
A: Refresh the page. If still stuck after 30 minutes, contact support@kinlu.ai.

**Q: The API is returning 500 errors.**
A: Check your API key is valid. If errors persist, check status.kinlu.ai for incidents.

**Q: I'm hitting rate limits. What do I do?**
A: Upgrade to Pro tier (1,000 req/min). For higher limits, contact sales@kinlu.ai.

---

## 8. Improving Model Performance

### 8.1 Data Quality Checklist
- [ ] At least 500 rows of data (5,000+ recommended)
- [ ] No more than 30% missing values
- [ ] Target variable has no null values
- [ ] Dates are in YYYY-MM-DD format
- [ ] Categorical columns have < 50 unique values
- [ ] No duplicate rows
- [ ] No extreme outliers (or documented reason for them)

### 8.2 Feature Engineering Tips
- **Add temporal features** — Days since last purchase, purchase frequency, seasonal indicators
- **Add behavioral features** — Email opens, page views, support tickets, product usage
- **Add demographic features** — Customer age, location, company size, industry
- **Add RFM features** — Recency, frequency, monetary value
- **Remove noisy features** — Columns with no correlation to target

### 8.3 Retraining Strategy
- **Monthly retraining** — Keeps model fresh with latest data
- **Quarterly review** — Check if accuracy is declining; if so, investigate data quality
- **Annual audit** — Review feature importance; remove outdated features, add new ones
- **After major changes** — Retrain if business model, pricing, or product changes significantly

### 8.4 Debugging Low Accuracy
1. **Check data quality** — Run data quality report; fix issues
2. **Check target definition** — Is target variable clearly defined? (e.g., churned = no purchase in 90 days)
3. **Check for data leakage** — Are features including information from after target date?
4. **Check for imbalance** — Is target heavily imbalanced? (e.g., 99% vs 1%)
5. **Check feature correlation** — Do features actually predict target? (use correlation matrix)
6. **Try different model type** — Maybe your problem is better suited for a different model

---

## 9. Roadmap & Future Features

### 9.1 Agent 2: Proactive Intelligence (Q2 2024)
- **Multi-source data fusion** — Combine CSV + Shopify + GA4 + Meta Ads + Klaviyo
- **Automated model selection** — KINLU recommends best model for your data
- **Real-time predictions** — Predictions update as new data arrives
- **Predictive workflows** — Automatically trigger actions based on predictions (email, SMS, ads)
- **Advanced SHAP** — Interactive SHAP visualizations, counterfactual explanations

### 9.2 Agent 3: Autonomous Optimization (Q3 2024)
- **A/B test automation** — KINLU designs and runs A/B tests automatically
- **Budget optimization** — Allocate marketing spend across channels to maximize ROI
- **Offer optimization** — KINLU recommends best offer for each customer
- **Timing optimization** — Optimal time to send each message

### 9.3 Agent 4: Self-Healing Systems (Q4 2024)
- **Automated retraining** — Models retrain automatically when accuracy drops
- **Anomaly detection** — Alert when data quality or model performance degrades
- **Drift detection** — Detect when customer behavior changes; recommend model updates
- **Continuous learning** — Models improve over time as new data arrives

### 9.4 Coming Soon
- **Annual billing** — 20% discount on yearly plans
- **Custom integrations** — Connect any data source via Zapier or custom API
- **White-label option** — Embed KINLU into your product
- **Compliance certifications** — HIPAA, CCPA, SOC 3
- **Advanced security** — IP whitelisting, SSO, audit logs

---

## 10. Support & Resources

### 10.1 Getting Help
- **Email support** — support@kinlu.ai (24-hour response, Pro tier: 1-hour)
- **Chat support** — In-app chat (Pro tier only)
- **Community forum** — Discuss with other KINLU users
- **Office hours** — Weekly Zoom calls with product team (Pro tier only)

### 10.2 Learning Resources
- **Video tutorials** — YouTube channel with step-by-step guides
- **Blog** — Tips, case studies, best practices
- **Webinars** — Monthly deep-dives on specific models
- **Case studies** — Real customer stories and results

### 10.3 Feedback & Feature Requests
- **Feature request form** — Submit ideas for new features
- **Bug report form** — Report issues
- **Product roadmap** — Vote on features you want to see
- **User advisory board** — Join our advisory board for early access

### 10.4 Legal & Compliance
- **Terms of Service** — Full legal terms
- **Privacy Policy** — How we handle your data
- **Data Processing Agreement** — For enterprise customers
- **Security whitepaper** — Technical security details

---

## 11. Glossary

**Accuracy** — % of predictions that were correct

**API** — Application Programming Interface; allows programmatic access to KINLU

**AUC-ROC** — Area Under the Receiver Operating Characteristic curve; measure of classification model quality (0.5 = random, 1.0 = perfect)

**Categorical** — Data type for categories (e.g., "premium", "free", "inactive")

**Churn** — When a customer stops using your product

**Confidence** — How certain the model is about a prediction (0-100%)

**CSV** — Comma-separated values; standard data format

**Feature** — Input variable used to make predictions (e.g., "days_since_purchase")

**Feature Importance** — Ranking of which features most influence predictions

**LTV** — Lifetime Value; total revenue a customer will generate

**ML** — Machine Learning; algorithms that learn from data

**Model** — Trained algorithm that makes predictions

**Prediction** — Model's answer to a question (e.g., "will this customer churn?")

**RMSE** — Root Mean Square Error; measure of prediction accuracy for regression models

**SHAP** — SHapley Additive exPlanations; explains why each prediction was made

**Segmentation** — Grouping customers into behavioral segments

**Target variable** — The column you want to predict

**Training** — Process of teaching the model using historical data

**Validation** — Testing the model on data it hasn't seen before

---

## 12. Contact & Social

- **Website** — https://kinlu.ai
- **Email** — hello@kinlu.ai
- **Twitter** — @kinlu_ai
- **LinkedIn** — linkedin.com/company/kinlu
- **GitHub** — github.com/kinlu-ai (coming soon)

---

**Version 1.0** — March 2024
**Last updated** — [Current date]
**Maintained by** — KINLU Product Team
