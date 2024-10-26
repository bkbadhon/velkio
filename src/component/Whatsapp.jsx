import { FaWhatsapp } from "react-icons/fa6";

const Whatsapp = () => {
    const whatsappNumber = "+966538432567";
    return (
        <div>
            <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-12 md:right-12 right-2 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors float-right mr-4"
            >
                <h2 className="flex gap-2 items-center text-white"><FaWhatsapp size={32} color="white" />How Can I Help You ?</h2>
            </a>
        </div>
    );
};

export default Whatsapp;