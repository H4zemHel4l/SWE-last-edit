import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Tech = () => {
    const [book, setBook] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/Books');
                const jsonData = await response.json();
                console.log(jsonData);
                setBook(jsonData);
            } catch (error) {
                console.error('Error fetching book:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <section className="text-gray-600 body-font dark:bg-gray-900">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 justify-center">
                        {book.filter((item) => item.category.toLowerCase() === ('tech')).map((item) => (
                            <Link key={item.id} to={`/desc/${item.id}`}>
                                <div
                                    className="w-60 p-2 bg-gray-700 rounded-xl backdrop-filter backdrop-blur-md bg-opacity-50 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl cursor-pointer m-1"
                                >
                                    <a className="block relative rounded overflow-hidden">
                                        <img
                                            alt="ecommerce"
                                            className="h-80 w-full object-cover rounded-xl transition-all duration-300 transform hover:scale-110"
                                            src={item.background_image}
                                        />
                                    </a>
                                    <div className="p-2">
                                        {/* Heading */}
                                        <h2 className="font-bold text-lg mb-2">{item.name}</h2>
                                        {/* Description */}
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                    {/* CTA */}
                                    <div className="m-2">
                                        <a
                                            role="button"
                                            href="#"
                                            className="text-blue-600 bg-white px-3 py-1 rounded-md hover:bg-white"
                                        >
                                            *
                                        </a>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tech;
