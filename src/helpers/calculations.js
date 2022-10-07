import { DISPLAYED_PAGE_NUMBERS_COUNT } from "./constants";

export function getStartAndEndPageNumbers(currentPage, totalNumberOfPages) {
  let startPageNumber = 1,
    endPageNumber = totalNumberOfPages;

  if (totalNumberOfPages > DISPLAYED_PAGE_NUMBERS_COUNT) {
    startPageNumber = currentPage > 2 ? currentPage - 2 : 1;
    endPageNumber = startPageNumber + DISPLAYED_PAGE_NUMBERS_COUNT - 1;

    if (endPageNumber > totalNumberOfPages) {
      startPageNumber = totalNumberOfPages - DISPLAYED_PAGE_NUMBERS_COUNT + 1;
      endPageNumber = totalNumberOfPages;
    }
  }

  return { startPageNumber, endPageNumber };
}
