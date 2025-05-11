import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen hero-area-bg sm:px-8 px-4">
            <h1 className="text-4xl font-bold text-center mb-4 text-amber-50">
                Welcome to Our Exclusive Online Store
            </h1>
            <p className="text-lg text-center mb-8 text-amber-50">
                Discover an exclusive collection of top-quality products handpicked just for you — from the latest trends in fashion to innovative gadgets and everyday essentials. Enjoy seamless shopping, unbeatable prices, and a delightful experience every step of the way.
            </p>
            <button className="px-6 py-2 bg-pink-600 text-white rounded flex items-center gap-2 hover:bg-pink-700 transition duration-300 group cursor-pointer">
                Shop Now
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                    <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
                </span>
            </button>
        </div>
    );
}

export default Hero;