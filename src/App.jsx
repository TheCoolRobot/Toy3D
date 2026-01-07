import React, { useState } from 'react';
import { Clock, Weight, Calculator, Zap, Package, Mail, Home, Box, Palette, Leaf, Sparkles } from 'lucide-react';

export default function Toy3D() {
    const [currentPage, setCurrentPage] = useState('home');
    const [printTime, setPrintTime] = useState(3);
    const [filamentWeight, setFilamentWeight] = useState(5);

    const calculatePrice = () => {
        const timeRate = 1 / 3;
        const filamentRate = 1 / 5;

        const timeCost = printTime * timeRate;
        const filamentCost = filamentWeight * filamentRate;
        const total = timeCost + filamentCost;

        return {
            timeCost: timeCost.toFixed(2),
            filamentCost: filamentCost.toFixed(2),
            total: total.toFixed(2)
        };
    };

    const price = calculatePrice();

    const Navigation = () => (
        <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md border-b border-white/10 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="cursor-pointer" onClick={() => setCurrentPage('home')}>
                        <h1 className="text-2xl font-bold text-white">
                            Toy3D
                        </h1>
                    </div>
                    <div className="flex space-x-4 md:space-x-6">
                        <button
                            onClick={() => setCurrentPage('home')}
                            className={`flex items-center gap-2 text-sm transition bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400${currentPage === 'home' ? 'text-white' : 'text-white/60 hover:text-white'}`}
                        >
                            <Home className="w-4 h-4" />
                            <span className="hidden sm:inline">Home</span>
                        </button>
                        <button
                            onClick={() => setCurrentPage('models')}
                            className={`flex items-center gap-2 text-sm transition bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 ${currentPage === 'models' ? 'text-white' : 'text-white/60 hover:text-white'}`}
                        >
                            <Box className="w-4 h-4" />
                            <span className="hidden sm:inline">Models</span>
                        </button>
                        <button
                            onClick={() => setCurrentPage('colors')}
                            className={`flex items-center gap-2 text-sm transition bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400${currentPage === 'colors' ? 'text-white' : 'text-white/60 hover:text-white'}`}
                        >
                            <Palette className="w-4 h-4" />
                            <span className="hidden sm:inline">Colors</span>
                        </button>
                        <button
                            onClick={() => setCurrentPage('pla')}
                            className={`flex items-center gap-2 text-sm transition bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400${currentPage === 'pla' ? 'text-white' : 'text-white/60 hover:text-white'}`}
                        >
                            <Leaf className="w-4 h-4" />
                            <span className="hidden sm:inline">PLA</span>
                        </button>
                        <button
                            onClick={() => setCurrentPage('custom')}
                            className={`flex items-center gap-2 text-sm transition bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400${currentPage === 'custom' ? 'text-white' : 'text-white/60 hover:text-white'}`}
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="hidden sm:inline">Custom</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );

    const HomePage = () => (
        <>
            <div className="pt-32 pb-20 px-4 relative z-10">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="mb-12">
                        <img
                            src="/assets/Toy3DHomepage.jpg"
                            alt="Toy3D"
                            className="w-full max-w-4xl mx-auto h-auto object-contain rounded-full border-radius:8 border-white/20 shadow-lg"
                            style={{
                                animation: 'fadeInScale 1.5s ease-out'
                            }}
                        />
                    </div>
                    <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Custom 3D Printed
                            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Toys for Kids
            </span>
                        </h2>
                        <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                            Safe, eco-friendly PLA toys made to order. Choose from our models or request custom designs!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => setCurrentPage('models')}
                                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105"
                            >
                                Browse Models
                            </button>
                            <button
                                onClick={() => setCurrentPage('custom')}
                                className="bg-white/10 backdrop-blur text-white px-8 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition"
                            >
                                Custom Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 pb-20 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                    Why Choose Toy3D?
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition">
                        <Leaf className="w-10 h-10 text-green-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Eco-Friendly PLA</h3>
                        <p className="text-white/60">Non-toxic, biodegradable PLA filament that's safe for children and the planet.</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-pink-400/50 transition">
                        <Sparkles className="w-10 h-10 text-pink-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Custom Designs</h3>
                        <p className="text-white/60">Bring your ideas to life with personalized toys made just for you.</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition">
                        <Calculator className="w-10 h-10 text-blue-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Fair Pricing</h3>
                        <p className="text-white/60">Pay only for materials and time used. No hidden costs or markups.</p>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 pb-20 relative z-10">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 md:p-12 border border-purple-400/30 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Create?
                    </h2>
                    <p className="text-white/70 mb-8 text-lg">
                        Browse our toy models or design something completely custom!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => setCurrentPage('models')}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105"
                        >
                            View Models
                        </button>
                        <button
                            onClick={() => setCurrentPage('pla')}
                            className="bg-white/10 backdrop-blur text-white px-8 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition"
                        >
                            Learn About PLA
                        </button>
                    </div>
                </div>
            </div>
        </>
    );

    const ModelsPage = () => (
        <div className="pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Toy Models</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Browse our collection of 3D printed toys. Each can be customized with your choice of colors!
                    </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 mb-12">
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center">
                            <Calculator className="w-8 h-8 text-white" />
                        </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
                        Pricing Calculator
                    </h2>
                    <p className="text-white/70 text-center mb-8">
                        Estimate the cost based on print time and filament weight
                    </p>

                    <div className="max-w-2xl mx-auto space-y-8 mb-8">
                        <div>
                            <label className="block text-white/90 font-semibold mb-3">
                                Print Time (hours)
                            </label>
                            <input
                                type="range"
                                min="0.5"
                                max="24"
                                step="0.5"
                                value={printTime}
                                onChange={(e) => setPrintTime(parseFloat(e.target.value))}
                                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="flex justify-between text-white/60 mt-2">
                                <span>0.5h</span>
                                <span className="text-xl font-bold text-white">{printTime}h</span>
                                <span>24h</span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-white/90 font-semibold mb-3">
                                Filament Weight (grams)
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="500"
                                step="1"
                                value={filamentWeight}
                                onChange={(e) => setFilamentWeight(parseInt(e.target.value))}
                                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="flex justify-between text-white/60 mt-2">
                                <span>1g</span>
                                <span className="text-xl font-bold text-white">{filamentWeight}g</span>
                                <span>500g</span>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-2xl mx-auto bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-400/30">
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-white/70">Print Time Cost ($1 / 3 hours):</span>
                                <span className="text-white font-semibold">${price.timeCost}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-white/70">Filament Cost ($1 / 5 grams):</span>
                                <span className="text-white font-semibold">${price.filamentCost}</span>
                            </div>
                            <div className="border-t border-white/20 pt-3 mt-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-xl text-white font-bold">Total Price:</span>
                                    <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    ${price.total}
                  </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-white/60 text-lg mb-8">
                        Toy models coming soon! Check back later for our full collection.
                    </p>
                    <button
                        onClick={() => setCurrentPage('custom')}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105"
                    >
                        Request Custom Design
                    </button>
                </div>
            </div>
        </div>
    );

    const ColorsPage = () => (
        <div className="pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        PLA <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Color Options</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Choose from our vibrant collection of high-quality PLA filament colors for your toys!
                    </p>
                </div>

                <div className="text-center mb-12">
                    <p className="text-white/60 text-lg">
                        Color swatches coming soon! We'll have a variety of vibrant, kid-friendly colors to choose from.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-400/30 text-center">
                    <h2 className="text-2xl font-bold text-white mb-3">Multi-Color Prints Available!</h2>
                    <p className="text-white/70 mb-6">
                        Want a multi-colored toy? Let us know your color preferences when ordering. We can combine colors to make your toy unique!
                    </p>
                    <button
                        onClick={() => setCurrentPage('custom')}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105"
                    >
                        Request Custom Colors
                    </button>
                </div>
            </div>
        </div>
    );

    const PLAPage = () => (
        <div className="pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-20 h-20 rounded-3xl flex items-center justify-center">
                            <Leaf className="w-10 h-10 text-white" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Why <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">PLA</span>?
                    </h1>
                    <p className="text-xl text-white/70">
                        Learn about the benefits of PLA filament for 3D printed toys
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                        <div className="flex items-start gap-4">
                            <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Leaf className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">Eco-Friendly & Biodegradable</h3>
                                <p className="text-white/70 leading-relaxed">
                                    PLA (Polylactic Acid) is made from renewable resources like corn starch or sugar cane. Unlike traditional plastics derived from petroleum, PLA is biodegradable and breaks down naturally over time, making it better for the environment.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                        <div className="flex items-start gap-4">
                            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">Non-Toxic & Kid-Safe</h3>
                                <p className="text-white/70 leading-relaxed">
                                    PLA is non-toxic and safe for children to handle and play with. It doesn't emit harmful fumes during printing or use, making it the ideal choice for toys. Parents can feel confident knowing their children are playing with safe materials.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                        <div className="flex items-start gap-4">
                            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Package className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">Strong & Durable</h3>
                                <p className="text-white/70 leading-relaxed">
                                    Despite being biodegradable, PLA is remarkably strong and durable for everyday play. It has good impact resistance and can withstand typical toy usage. Your 3D printed toys will last through countless play sessions while remaining safe and sturdy.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                        <div className="flex items-start gap-4">
                            <div className="bg-gradient-to-br from-orange-500 to-red-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Palette className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">Vibrant Colors & Smooth Finish</h3>
                                <p className="text-white/70 leading-relaxed">
                                    PLA filament comes in a wide variety of bright, vibrant colors that kids love. It prints with a smooth, polished finish that looks professional and feels great to touch. The colors are consistent and won't fade easily with normal play.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                        <div className="flex items-start gap-4">
                            <div className="bg-gradient-to-br from-yellow-500 to-amber-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">High Print Quality</h3>
                                <p className="text-white/70 leading-relaxed">
                                    PLA is one of the easiest materials to 3D print with, resulting in high-quality prints with fine details and minimal defects. This means your toys will have smooth surfaces, precise features, and excellent overall quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl p-8 border border-green-400/30 text-center">
                    <h2 className="text-2xl font-bold text-white mb-3">Ready to Order?</h2>
                    <p className="text-white/70 mb-6">
                        All our toys are made with premium PLA filament for safety, quality, and environmental responsibility.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => setCurrentPage('models')}
                            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/50 transition transform hover:scale-105"
                        >
                            Browse Models
                        </button>
                        <button
                            onClick={() => setCurrentPage('custom')}
                            className="bg-white/10 backdrop-blur text-white px-8 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition"
                        >
                            Custom Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const CustomPage = () => {
        const [customFilament, setCustomFilament] = useState(10);

        const customPrice = (customFilament / 5).toFixed(2);

        return (
            <div className="pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="flex justify-center mb-6">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-20 h-20 rounded-3xl flex items-center justify-center">
                                <Sparkles className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            Custom <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Toy Prints</span>
                        </h1>
                        <p className="text-xl text-white/70">
                            Have a unique idea? We'll bring your custom toy design to life!
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 mb-8">
                        <h2 className="text-3xl font-bold text-white text-center mb-6">
                            How It Works
                        </h2>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Share Your Idea</h3>
                                    <p className="text-white/70">
                                        Send us a description, sketch, or reference image of the toy you want. The more details, the better!
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Get a Quote</h3>
                                    <p className="text-white/70">
                                        We'll estimate the filament needed and provide you with a price quote based on material cost.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-white">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">We Print & Deliver</h3>
                                    <p className="text-white/70">
                                        Once approved, we'll 3D print your custom toy and deliver it to you!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 mb-8">
                        <div className="flex items-center justify-center mb-6">
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center">
                                <Calculator className="w-8 h-8 text-white" />
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-white text-center mb-6">
                            Estimate Your Cost
                        </h2>
                        <p className="text-white/70 text-center mb-8">
                            Custom prints are priced based on filament weight only
                        </p>

                        <div className="max-w-2xl mx-auto mb-8">
                            <label className="block text-white/90 font-semibold mb-3">
                                Estimated Filament Weight (grams)
                            </label>
                            <input
                                type="range"
                                min="5"
                                max="500"
                                step="5"
                                value={customFilament}
                                onChange={(e) => setCustomFilament(parseInt(e.target.value))}
                                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="flex justify-between text-white/60 mt-2">
                                <span>5g</span>
                                <span className="text-xl font-bold text-white">{customFilament}g</span>
                                <span>500g</span>
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-400/30">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-white/70">Filament Cost ($1 / 5 grams):</span>
                                    <span className="text-white font-semibold">${customPrice}</span>
                                </div>
                                <div className="border-t border-white/20 pt-3 mt-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xl text-white font-bold">Estimated Price:</span>
                                        <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      ${customPrice}
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-white/60 text-sm text-center mt-6">
                            * Final price may vary based on actual filament usage and design complexity
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-400/30 text-center">
                        <h2 className="text-2xl font-bold text-white mb-3">Ready to Get Started?</h2>
                        <p className="text-white/70 mb-6">
                            Contact us with your custom toy idea and we'll provide a detailed quote!
                        </p>
                        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105 inline-flex items-center gap-2">
                            <Mail className="w-5 h-5" />
                            Request Custom Quote
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative">
            <Navigation />

            {currentPage === 'home' && <HomePage />}
            {currentPage === 'models' && <ModelsPage />}
            {currentPage === 'colors' && <ColorsPage />}
            {currentPage === 'pla' && <PLAPage />}
            {currentPage === 'custom' && <CustomPage />}

            <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>

            <footer className="border-t border-white/10 py-8">
                <div className="max-w-6xl mx-auto px-4 text-center text-white/60 text-sm">
                    &copy; {new Date().getFullYear()} Toy3D. All rights reserved.
                </div>
            </footer>
        </div>
    );
}