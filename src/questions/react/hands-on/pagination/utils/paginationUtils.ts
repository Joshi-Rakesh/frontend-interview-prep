export const getPageNumbers = (currentPage: number, totalPages: number) => {
  if (totalPages <= 8) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 5) {
    return [1, 2, 3, 4, 5, 6, ". . .", totalPages];
  }

  if (currentPage >= totalPages - 4) {
    return [
      1,
      ". . .",
      totalPages - 5,
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    ". . .",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    ". . .",
    totalPages,
  ];
};
