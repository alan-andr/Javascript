const blogPosts = [
    { id: 101, title: 'Undestanding JavaScript Closures', category: 'JavaScript' },
    { id: 102, title: 'A guide to CSS Flexbox', category: 'CSS' },
    { id: 103, title: 'Top 10 ES6 Features', category: 'JavaScript' },
    { id: 104, title: 'How to Use CSS Grid', category: 'CSS' },
    { id: 105, title: 'Introduction to React Hooks', category: 'React' },
    { id: 106, title: 'Advanced JavaScript Concepts', category: 'JavaScript' },
];

function categoryToTitle(posts) {
    const groupedPosts = {}

    for (const { category, title } of posts) {
        if (!groupedPosts[category]) {
            groupedPosts[category] = [];
        }

        groupedPosts[category].push(title);
    }

    return groupedPosts;
};

console.log(categoryToTitle(blogPosts));