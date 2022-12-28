import React from "react";

export const Form = () => {
  return (
    <>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="/form" method="get">
            <div>
              <label
                for="email"
                className="block text-sm font-medium text-gray-700"
              >
                Ton pseudo
              </label>
              <div class="mt-1">
                <input
                  id="text"
                  name="p1"
                  type="text"
                  autocomplete="text"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                for="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Ton numéro de <i className="fa-solid fa-mobile"></i>
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autocomplete="current-password"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                value={"POST"}
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Inscription
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
