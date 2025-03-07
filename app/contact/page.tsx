
export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-[250px] bg-[url('/car_silhouette.jpg')] text-white overflow-hidden">
        <div className="relative h-full bg-gradient-to-br from-slate-100/10 to-black/70 bg-cover bg-center">
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-6xl font-bold mb-2 animate-fade-in-up">Contact Us</h1>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="container mx-auto my-10 flex justify-around">
        <div className="bg-white px-6 py-6 rounded-lg shadow-lg w-[60%]">
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
            Drop us a message and we can see if we can help
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-md w-full font-bold text-center text-white rounded-lg bg-green-800 uppercase focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Send message
            </button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="w-[30%] flex flex-col gap-8">
          <div className="bg-white px-6 py-6 rounded-lg shadow-lg">
            <h2 className="text-xl uppercase font-semibold my-4">For Inquiries Contact</h2>
            <h2 className="font-semibold">Daniel Bezuidenhout</h2>
            <p className="text-lg">+27 72 415 8772</p>
          </div>
          <div className="bg-white px-6 py-6 rounded-lg shadow-lg">
            <h2 className="text-xl uppercase font-semibold my-4">Corporate Headquarters</h2>
            <p className="text-lg">
              2 Lincoln Road <br />
              Benoni, South Africa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
