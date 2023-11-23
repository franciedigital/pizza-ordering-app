import React from "react";

const Feedback = () => {
  const feedbacks = [
    {
      id: 1,
      name: "Takar Bowa",
      profile_pic: "../../images/client-3.jpg",
      comment:
        "Lorem ipsum is simply dummy text of the print book. It has survived not only five centuries but also the leap",
    },
    {
      id: 2,
      name: "Takar Bowa",
      profile_pic: "../../images/client-2.jpg",
      comment:
        "Lorem ipsum is simply dummy text of the print book. It has survived not only five centuries but also the leap",
    },
    {
      id: 3,
      name: "Takar Bowa",
      profile_pic: "../../images/client-3.jpg",
      comment:
        "Lorem ipsum is simply dummy text of the print book. It has survived not only five centuries but also the leap",
    },
    {
      id: 4,
      name: "Takar Bowa",
      profile_pic: "../../images/client-4.jpg",
      comment:
        "Lorem ipsum is simply dummy text of the print book. It has survived not only five centuries but also the leap",
    },
  ];
  return (
    <section className="p-8 mb-4">
      <div className="mb-8">
        <img src="../../images/leaf.png" alt="Fine leaf" className="w-[10%]" />
        <h2 className="text-red-500 text-2xl font-bold mb-4">
          Customer Feedback
        </h2>
        <h1 className="text-black text-4xl font-bold tracking-wide">
          Client Testimonials
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="flex flex-col items-center text-center p-4 bg-white rounded shadow space-y-4 "
          >
            <img src={feedback.profile_pic} className="rounded-full w-[50%]" />
            <h2 className="text-black font-bold text-2xl">{feedback.name}</h2>
            <p className="text-gray-500 tracking-wide w-60 text-xl">
              {feedback.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;
