import React from 'react';
export default function Product({ title, images, price }) {



    return (
        <>
            <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto mb-5 border rounded-md">

                <img class="object-cover w-full rounded-md h-72 xl:h-80" src={images} alt="T-Shirt" />
                {/* {images.map((image, index) => (
                    <img class="object-cover w-full rounded-md h-72 xl:h-80" key={index} src={image} alt={`Image ${index}`} />
                ))} */}
                <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">{title.substring(0, 30)} {title.length >= 30 && '...'}</h4>

                <p class="text-blue-500">{price}</p>


            </div>

        </>
    )
}