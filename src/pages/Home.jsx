import { images } from '../utils/images';
import { useLanguage } from '../context/Language';
import { FadeInSection, FadeInLeft, FadeInRight, FadeInScale, floatAnimation } from "../components/Animations";

export default function Home() {
    const { t } = useLanguage();

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <FadeInSection delay={100}>
                <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                    <div className="flex-1 space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold text-yellow-400">
                                {t('homeWelcome')}
                            </h1>
                            <p className="text-xl text-gray-300">
                                {t('homeSubtitle')}
                            </p>
                        </div>
                        <div className="space-y-4">
                            <p className="text-gray-300 leading-relaxed">{t('homeText1')}</p>
                            <p className="text-gray-300 leading-relaxed">{t('homeText2')}</p>
                        </div>
                    </div>
                    <div className={`flex-1 flex justify-center ${floatAnimation}`}>
                        <div className="w-80 h-80 rounded-full bg-gradient-to-br bg-yellow-400 flex items-center justify-center shadow-2xl border-4 border-yellow-400 hover:scale-110 transition-transform duration-300 cursor-pointer">
                            <div className="w-72 h-72 rounded-full overflow-hidden bg-gray-700">
                                <img src={images.profile} alt="Profile" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            <div className="mb-16">
                <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">{t('aboutMe')}</h2>

                <FadeInLeft delay={200}>
                    <div className="bg-gray-800 rounded-2xl p-6 hover:translate-y-[-8px] hover:shadow-xl transition-all duration-300 mb-8">
                        <h3 className="text-xl font-semibold mb-3 text-yellow-400">{t('whoIAm')}</h3>
                        <p className="text-gray-300 leading-relaxed">{t('whoIAmText')}</p>
                    </div>
                </FadeInLeft>

                <FadeInRight delay={400}>
                    <div className="bg-gray-800 rounded-2xl p-6 hover:translate-y-[-8px] hover:shadow-xl transition-all duration-300 mb-8">
                        <h3 className="text-xl font-semibold mb-3 text-yellow-400">{t('whyProgramming')}</h3>
                        <p className="text-gray-300 leading-relaxed">{t('whyProgrammingText')}</p>
                    </div>
                </FadeInRight>

                <FadeInLeft delay={600}>
                    <div className="bg-gray-800 rounded-2xl p-6 hover:translate-y-[-8px] hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-semibold mb-3 text-yellow-400">{t('whatEnjoy')}</h3>
                        <p className="text-gray-300 leading-relaxed">{t('whatEnjoyText')}</p>
                    </div>
                </FadeInLeft>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FadeInScale delay={800}>
                    <div className="bg-gray-800 rounded-2xl p-8 hover:translate-y-[-8px] hover:shadow-xl transition-all duration-300">
                        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">{t('funFact')}</h2>
                        <div className="text-center space-y-4">
                            <p className="text-gray-300 leading-relaxed">{t('funFactText')}</p>
                        </div>
                    </div>
                </FadeInScale>

                <FadeInScale delay={1000}>
                    <div className="bg-gray-800 rounded-2xl p-8 hover:translate-y-[-8px] hover:shadow-xl transition-all duration-300">
                        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">{t('connect')}</h2>
                        <div className="space-y-4">

                            <a href="https://www.linkedin.com/in/ishika-soebhag-67a608359?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all group">
                                <div className="flex items-center space-x-4">
                                    <img src={images.tech.linkin} alt="LinkedIn" className="w-8 h-8 object-contain"/>
                                    <span className="text-white font-medium">LinkedIn</span>
                                </div>
                                <span className="text-gray-400 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all">→</span>
                            </a>

                            <a href="https://github.com/Shav0nne" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all group">
                                <div className="flex items-center space-x-4">
                                    <img src={images.tech.github} alt="GitHub" className="w-8 h-8 object-contain"/>
                                    <span className="text-white font-medium">GitHub</span>
                                </div>
                                <span className="text-gray-400 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all">→</span>
                            </a>

                            <a href="mailto:esoebhag@gmail.com" className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all group">
                                <div className="flex items-center space-x-4">
                                    <img src={images.tech.gmail} alt="Email" className="w-8 h-8 object-contain"/>
                                    <span className="text-white font-medium">Email</span>
                                </div>
                                <span className="text-gray-400 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all">→</span>
                            </a>
                        </div>
                    </div>
                </FadeInScale>
            </div>
        </div>
    );
}