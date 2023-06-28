export const getPageCount = (totalCount, limit) => {
   return Math.ceil(totalCount / limit);
};

export const getPagesArray = (length) =>
   Array.from(new Array(length)).map((_, i) => i + 1);
