import React from "react";
import { HiChevronDown } from "react-icons/hi";

const Support = () => {
  return (
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md flex flex-col justify-center">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
        Contact Us
      </h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
        Got a technical issue? Want to send feedback about a beta feature? Need
        details about our Business plan? Let us know.
      </p>
      <form action="#" class="space-y-8">
        <div className="flex justify-between">
            <div>
                <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900"
                >
                    First Name
                </label>
                <input
                    type="text"
                    id="first_name"
                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
                    placeholder="Vikram"
                    required
                />
            </div>

            <div>
                <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-900"
                >
                    Last Name
                </label>
                <input
                    type="text"
                    id="last_name"
                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
                    placeholder="Thapa"
                    required
                />
            </div>

            <div>
                <label
                    for="phone_no"
                    class="block mb-2 text-sm font-medium text-gray-900"
                >
                    Phone Number
                </label>
                <input
                    type="number"
                    id="phone_no"
                    class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
                    placeholder="1234567890"
                    required
                />
            </div>
        
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <label
            for="subject"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800"
          >
            Send message
          </button>

          <button
            type="reset"
            class="py-3 px-5 ml-10 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800"
          >
            Reset
          </button>
        </div>

      </form>
    </div>
  );
};

export default Support;
