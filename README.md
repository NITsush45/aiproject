# aiproject 

This project is a modular system for fetching and delivering personalized video feed recommendations. It includes a `feedController.js` for handling API endpoints and a `fetchService.js` for fetching and preprocessing data from external APIs or databases.

## Features  

- **Fetch Service** (`fetchService.js`):  
  - Handles data retrieval from external APIs or databases.
  - Cleans and preprocesses the data for downstream processing.  

- **Feed Controller** (`feedController.js`):  
  - Manages API routes for the recommendation system.
  - Delivers personalized feeds based on user preferences and interactions.  

## Technologies Used  

- **Backend**: Node.js, Express  
- **Data Handling**: Custom Fetch Service  
- **Recommendation Logic**: Modularized for scalability  

## File Structure  
│
├── controllers/
│ └── feedController.js
├── services/
│ └── fetchService.js
├── app.js # Main application entry point
├── utils/
│ └── apiEndpoints.js 
├── package.json # Project dependencies and metadata
└── README.md # Project documentation
|__.env
|__server.js


## API Endpoints  

### 1. **Get Personalized Feed**  
- **Endpoint**: `/api/feed`  
- **Method**: `GET`  
- **Query Parameters**:  
  - `userId` (required): Unique ID of the user.  
  - `categoryId` (optional): Filter recommendations by category.  
  - `limit` (optional): Number of items to fetch (default is 10).  
- **Response**:  
  Returns a JSON object containing personalized feed recommendations.  

### Sample Response  
```json  
{
  "success": true,
  "data": [
    {
      "id": "123",
      "title": "Inspirational Video",
      "category": "Motivation",
      "url": "https://example.com/video1"
    },
    {
      "id": "124",
      "title": "Tech Talk",
      "category": "Technology",
      "url": "https://example.com/video2"
    }
  ]
}

#installation steps
git clone https://github.com/NITsush45/aiproject.git  
cd ai

#install dependencies
npm install

#start the application
node app.js  
