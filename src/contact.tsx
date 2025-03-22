import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen text-gray-900 flex flex-col items-center p-6 pt-20">
      <h1 className="text-5xl font-extrabold text-white mb-6">Get in touch</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-8 text-white">
        Have questions or want to discuss your next project? Reach out to us, and we’ll be happy to assist you.
      </p>
      
      <div className="bg-white shadow-lg rounded-lg p-50 w-full max-w-lg">
        <div className="flex items-center space-x-4 mb-6">
          <Mail className="text-[#09354a]" size={24} />
          <p className="text-lg font-medium">imparvish@gmail.com</p>
        </div>
        <div className="flex items-center space-x-4 mb-6">
          <Phone className="text-[#09354a]" size={24} />
          <p className="text-lg font-medium">+91 9425970731</p>
        </div>
        <div className="flex items-center space-x-4">
          <MapPin className="text-[#09354a]" size={24} />
          <p className="text-lg font-medium">153 MR 4 Mahalaxmi Nagar Indore, India</p>
        </div>
      </div>
    </div>
  );
}