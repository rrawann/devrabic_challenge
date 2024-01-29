import User from "../components/userCard";
export const SearchResults = ({ searchResults }) => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {searchResults.map((item) => {
          console.log(item, "ppppppp");
          return (
            <section key={item.id}>
              <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto mb-5 border rounded-md">
                <img
                  class="object-cover w-full rounded-md h-72 xl:h-80"
                  src={item.image}
                  alt="T-Shirt"
                />

                <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                  {item.firstName.substring(0, 30)}{" "}
                  {item.firstName.length >= 30 && "..."}
                </h4>

                <p class="text-blue-500">{item.age}</p>

                <p class="text-blue-500">{item.phone}</p>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};
