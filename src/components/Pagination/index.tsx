interface PropType {
  changePage: (next?: boolean) => void;
  currentPage: number;
}

function Pagination({ currentPage, changePage }: PropType) {
  return (
    <div className="w-full flex justify-center mt-6 items-left">
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px">
          <li>
            <a
              onClick={() => changePage()}
              className={`${
                currentPage <= 1
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              } bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              Previous
            </a>
          </li>
          <li>
            <a data-testid="pagenumber" className="bg-white border border-gray-300 text-gray-500 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              {currentPage} / <b>9</b>
            </a>
          </li>
          <li>
            <a
              onClick={() => changePage(true)}
              className={`${
                currentPage >= 9
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              } bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
