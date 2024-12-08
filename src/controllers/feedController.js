const { fetchPaginatedData } = require('../services/fetchService.js');
const apiEndpoints = require('../utils/apiEndpoints.js');
const token = process.env.FLIC_TOKEN;

async function getFeed(req, res) {
    const { username, category_id, mood } = req.query;

    try {
        const viewed = await fetchPaginatedData(apiEndpoints.viewed, token);
        const liked = await fetchPaginatedData(apiEndpoints.liked, token);
        const inspired = await fetchPaginatedData(apiEndpoints.inspired, token);
        const rated = await fetchPaginatedData(apiEndpoints.rated, token);

        let recommendations = [...viewed, ...liked, ...inspired, ...rated];

        if (category_id) {
            recommendations = recommendations.filter(post => post.category_id == category_id);
        }

        if (mood) {
            recommendations = recommendations.filter(post => post.mood === mood);
        }

        recommendations = recommendations.slice(0, 10);

        res.json({
            username,
            recommendations,
        });
    } catch (error) {
        console.error('Error in getFeed:', error);
        res.status(500).json({ error: 'Failed to fetch feed' });
    }
}

module.exports = { getFeed };
