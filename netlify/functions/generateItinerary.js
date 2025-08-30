export async function handler(event, context) {
  try {
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const { city, budget, days } = JSON.parse(event.body);

    const prompt = `
    Create a detailed JSON response for a ${days}-day travel itinerary in ${city} with a total budget of $${budget}.
    The response must strictly follow this schema:

    {
      "dailyPlans": [
        {
          "day": number,
          "title": string,
          "summary": string,
          "schedule": [
            {
              "time": string,
              "activity": string,
              "description": string,
              "cost": number,
              "icon": string
            }
          ],
          "restaurantRecommendations": [
            {
              "name": string,
              "cuisine": string,
              "description": string
            }
          ]
        }
      ]
    }

    Return ONLY valid JSON, no extra text.
    `;

    const apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    if (!response.ok) {
      const errorBody = await response.json();
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: errorBody })
      };
    }

    const data = await response.json();
    const itineraryText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    let parsedData;
    try {
      parsedData = JSON.parse(itineraryText);
    } catch {
      parsedData = JSON.parse(itineraryText.replace(/```json|```/g, "").trim());
    }

    return {
      statusCode: 200,
      body: JSON.stringify(parsedData)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}
