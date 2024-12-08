async function fetchPaginatedData(url, token) {
    const fetch = (await import('node-fetch')).default;
    const results = [];
    let page = 1;
    const pageSize = 1000;

    while (true) {
        const response = await fetch(`${url}?page=${page}&page_size=${pageSize}`, {
            headers: { "Flic-Token": token },
        });

        if (!response.ok) {
            console.error(`Error fetching data from ${url}: ${response.statusText}`);
            break;
        }

        const data = await response.json();
        console.log(`Page ${page}:`, data); 

        if (Array.isArray(data) && data.length > 0) {
            results.push(...data);
        } else {
            console.error(`Unexpected data format at page ${page}`);
            break;
        }

        page++;
    }

    return results;
}
module.exports = { fetchPaginatedData };
