const articles = [
    { id: 101, title: 'Introduction to JavaScript Objects', category: 'Programming' },
    { id: 102, title: 'Healthy Cooking for Beginners', category: 'Lifestyle' },
    { id: 103, title: 'Advanced CSS Grid Techniques', category: 'Programming' },
    { id: 104, title: 'A Guide to Personal Finance', category: 'Finance' },
    { id: 105, title: 'The Rise of Async/Await', category: 'Programming' },
    { id: 106, title: 'Meditation and Mindfulness', category: 'Lifestyle' }
];

function filterCategory(articles) {
    const groupedArticles = {};

    for (const article of articles) {
        const { category, title } = article;

        if (!groupedArticles[category]) {
            groupedArticles[category] = [title];
        } else {
            groupedArticles[category].push(title);
        }
    }

    return groupedArticles;
};

console.log(filterCategory(articles));