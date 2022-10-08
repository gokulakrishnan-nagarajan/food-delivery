import { getStartAndEndPageNumbers } from "./calculations";

describe("getStartAndEndPageNumbers", () => {
  describe("should return a range of numbersfrom 1 to DISPLAYED_PAGE_NUMBERS_COUNT if the total number of pages is less than or equal to DISPLAYED_PAGE_NUMBERS_COUNT;", () => {
    it("current page: 1, totalNumberOfPages: 5", () => {
      expect(getStartAndEndPageNumbers(1, 5)).toEqual({
        startPageNumber: 1,
        endPageNumber: 5,
      });
    });

    it("current page: 2, totalNumberOfPages: 4", () => {
      expect(getStartAndEndPageNumbers(2, 4)).toEqual({
        startPageNumber: 1,
        endPageNumber: 4,
      });
    });

    it("current page: 3, totalNumberOfPages: 3", () => {
      expect(getStartAndEndPageNumbers(3, 3)).toEqual({
        startPageNumber: 1,
        endPageNumber: 3,
      });
    });

    it("current page: 1, totalNumberOfPages: 1", () => {
      expect(getStartAndEndPageNumbers(1, 1)).toEqual({
        startPageNumber: 1,
        endPageNumber: 1,
      });
    });
  });

  describe("should return a range of numbers containing DISPLAYED_PAGE_NUMBERS_COUNT number of pages including current page number if the total number of pages is greater than DISPLAYED_PAGE_NUMBERS_COUNT", () => {
    it("current page: 1, totalNumberOfPages: 10", () => {
      expect(getStartAndEndPageNumbers(1, 10)).toEqual({
        startPageNumber: 1,
        endPageNumber: 5,
      });
    });

    it("current page: 2, totalNumberOfPages: 10", () => {
      expect(getStartAndEndPageNumbers(2, 10)).toEqual({
        startPageNumber: 1,
        endPageNumber: 5,
      });
    });

    it("current page: 3, totalNumberOfPages: 10", () => {
      expect(getStartAndEndPageNumbers(3, 10)).toEqual({
        startPageNumber: 1,
        endPageNumber: 5,
      });
    });

    it("current page: 4, totalNumberOfPages: 10", () => {
      expect(getStartAndEndPageNumbers(4, 10)).toEqual({
        startPageNumber: 2,
        endPageNumber: 6,
      });
    });

    it("current page: 5, totalNumberOfPages: 10", () => {
      expect(getStartAndEndPageNumbers(5, 10)).toEqual({
        startPageNumber: 3,
        endPageNumber: 7,
      });
    });

    it("current page: 6, totalNumberOfPages: 10", () => {
      expect(getStartAndEndPageNumbers(6, 10)).toEqual({
        startPageNumber: 4,
        endPageNumber: 8,
      });
    });

    it("current page: 7, totalNumberOfPages: 10", () => {
      expect(getStartAndEndPageNumbers(7, 10)).toEqual({
        startPageNumber: 5,
        endPageNumber: 9,
      });
    });

    it("current page: 8, totalNumberOfPages: 10", () => {
      expect(getStartAndEndPageNumbers(8, 10)).toEqual({
        startPageNumber: 6,
        endPageNumber: 10,
      });
    });

    it("current page: 9, totalNumberOfPages: 10", () => {
      expect(getStartAndEndPageNumbers(9, 10)).toEqual({
        startPageNumber: 6,
        endPageNumber: 10,
      });
    });

    it("current page: 10, totalNumberOfPages: 10", () => {
      expect(getStartAndEndPageNumbers(10, 10)).toEqual({
        startPageNumber: 6,
        endPageNumber: 10,
      });
    });
  });
});
