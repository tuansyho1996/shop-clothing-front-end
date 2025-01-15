'use client'
import { useState } from 'react';

const FAQ = () => {
    const [openQuestion, setOpenQuestion] = useState(null);
    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    const faqs = [
        { question: "How long it takes for my order to be shipped?", answer: "We dispatch most orders within 2 to 5 business days. However, in jewelry and especially in sterling silver jewelry and drinking horns it might take longer for your order to be shipped. This happens because many silver jewels and drinking horns are made to order and the crafting process may take up to 10 days. If you purchase any of these products an automated email will notify you that we will need 7-10 days to ship your item. Please contact us at info@northlord.com in case you need more information." },
        { question: "How long it takes for my order to arrive?", answer: "All over The World: 10 - 15 days" },
        { question: "I ordered two or three products and I received only one. What should I do?", answer: "In some cases orders may ship separately from our warehouse and that might happen in order to catch up delivery times regarding the production process. We suggest not worrying about because your order will be delivered with safety but with a difference in the delivery date. In such case you will be notified by email. " },
        { question: "How can I track my order?", answer: "As soon as the shipment of your order is completed, you will be notified by email with the tracking number and the carrier, Then you can simply go to the carrier's site and track your order. If you need any help to track your order, please contact our support team and they will guide you through the process." },
        { question: "Can I change my order or part of its information?", answer: "Yes, you might be able to change the entire order or information such as address, name, receiver and so on as long as your order hasn't been shipped yet. Contact our support team and make sure you include the order number in your message." }
    ];
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">FREQUENTLY ASKED QUESTIONS</h1>
            <div className="bg-white shadow-md rounded-lg p-4">
                <ul className="divide-y divide-gray-200">
                    {faqs.map((faq, index) => (
                        <li key={index} className="py-4">
                            <button
                                onClick={() => toggleQuestion(index)}
                                className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800"
                            >
                                {faq.question}
                                <span>{openQuestion === index ? "-" : "+"}</span>
                            </button>
                            {openQuestion === index && (
                                <p className="mt-2 text-gray-600">
                                    {faq.answer}
                                </p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FAQ;
