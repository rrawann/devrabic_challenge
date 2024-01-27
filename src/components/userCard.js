import React from 'react';
export default function User({ firstName, age, phone , image }) {



    return (
        <>
            <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto mb-5">

                <img class="object-cover w-full rounded-md h-72 xl:h-80" src={image} alt="T-Shirt" />
               
                <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">{firstName.substring(0, 30)} {firstName.length >= 30 && '...'}</h4>

                <p class="text-blue-500">${age}</p>

                <p class="text-blue-500">${phone}</p>
            </div>

        </>
    )
}