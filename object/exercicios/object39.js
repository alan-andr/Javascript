const blogPost = {
    postId: 'BP2024-08',
    title: 'Advanced JavaScript Objects',
    author: 'Jane Doe',
    publishDate: '2025-08-15',
    tags: ['Javascript', 'es6', 'development', 'frontend'],
    metadata: {
        views: 15300,
        likes: 2100,
        shares: 450
    }
};

function getPostMetadataKeys(blogPost) {
    const keysBlogPost = Object.keys(blogPost.metadata);

    return keysBlogPost;
};

function getPostMetadataValues(blogPost) {
    const valuesBlogPostMetadada = Object.values(blogPost.metadata);

    return valuesBlogPostMetadada;
};

function logPostStats(blogPost) {
    for (const key in blogPost.metadata) {
        console.log(`${key} : ${blogPost.metadata[key]}`);
    }
};

console.log(getPostMetadataKeys(blogPost));
console.log(getPostMetadataValues(blogPost));
logPostStats(blogPost);