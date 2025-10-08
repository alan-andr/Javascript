const blogPosts = [
    { id: 1, title: 'Understanding JavaScript Closures', category: 'Tech' },
    { id: 2, title: 'The Best Healthy Breakfast Ideas', category: 'Lifestyle' },
    { id: 3, title: 'A Guide to CSS Grid', category: 'Tech' },
    { id: 4, title: 'How to Travel on a Budget', category: 'Travel' },
    { id: 5, title: 'Introduction to React Hooks', category: 'Tech' },
    { id: 6, title: 'My Trip to Japan', category: 'Travel' }
];

function groupPostsByCategory(arrBlogPosts) {
    let catalog = {};

    for (const { title, category } of arrBlogPosts) {
        if (!catalog[category]) {
            catalog[category] = [];
        } 

        catalog[category].push(title);
    }

    return catalog;
};

function groupPostsByCategoryWithReduce(arrBlogPosts) {
    return arrBlogPosts.reduce((acc, posts) => {
        const { category, title} = posts;

        if (!acc[category]) {
            acc[category] = [];
        }

        acc[category].push(title);

        return acc;
    }, {})
};

console.log(groupPostsByCategory(blogPosts));
console.log(groupPostsByCategoryWithReduce(blogPosts));