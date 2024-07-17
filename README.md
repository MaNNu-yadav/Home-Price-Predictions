# Home Price Predictions

## Overview

This project predicts home prices based on various features such as location, total square feet, number of bedrooms, and number of bathrooms. The project consists of a Flask server for handling requests and a React frontend for user interaction.

## Features

- **Location-based predictions**: Provides price predictions based on location and other home features.
- **Interactive UI**: Users can input home details through a web interface built with React.
- **Real-time predictions**: The model provides real-time price predictions.

# Machine Learning Model

## Model Training

- The model is trained using data from the Kaggle Bangalore Home Prices dataset.
- The dataset includes various features such as location, total square feet, number of bedrooms, and number of bathrooms.
- The model is a regression model that predicts home prices based on the input features.

## Data Preprocessing

- Missing values are handled appropriately.
- Categorical variables are encoded using one-hot encoding.
- Feature scaling is applied to ensure the model performs optimally.

## Model Deployment

- The trained model is saved as a pickle file (`banglore_home_prices_model.pickle`).
- The columns used in the model are saved in a JSON file (`columns.json`).
- These files are loaded in the Flask server for making predictions.

## Technology Used

- **Frontend**: React.js
- **Backend**: Flask
- **Machine Learning**: Scikit-Learn
- **Data Source**: Kaggle Bangalore Home Prices dataset

## Screenshots

### Home Page

![Screenshot 2024-07-18 011000](https://github.com/user-attachments/assets/dae665fb-b3f8-4d80-9efe-3fe175caf8ee)

### Interface
![Screenshot 2024-07-18 011013](https://github.com/user-attachments/assets/c294c66b-0301-49d2-93b2-97c2c419181f)

### Price Prediction

![Screenshot 2024-07-18 011336](https://github.com/user-attachments/assets/22b744f8-0885-4712-8d53-69c123dce460)

## Technology Used

- **Frontend**: React.js
- **Backend**: Flask
- **Machine Learning**: Scikit-Learn
- **Data Source**: Kaggle Bangalore Home Prices dataset

## Project Structure

```plaintext
Home Pricing
├── client         # React frontend
├── server         # Flask backend
│   ├── server.py
│   └── util.py
├── model          # Model files
│   ├── banglore_home_prices_model.pickle
│   └── columns.json
└── README.md

