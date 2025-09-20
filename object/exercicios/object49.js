const bookMarketing = {
    compaignName: 'Summer Reading Fest',
    targetAudience: 'Young Adults',
    featuredBooks: ['The Space Wanderer', 'A Quiet Town s Secret', 'Code of The Ancients'],
    startDate: '2025-06-01',
    endDate: '2025-08-31'
};

const keys = Object.keys(bookMarketing);
console.log(keys);

const values = Object.values(bookMarketing);
console.log(values);

const entries = Object.entries(bookMarketing);
console.log(entries);

const fromEntries = Object.fromEntries(entries);
console.log(fromEntries);