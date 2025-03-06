export declare class DdaHomeBanner {
    images: {
        src: string;
        title: string;
        subtitle: string;
        link: string;
    }[];
    autoplay: boolean;
    interval: number;
    currentSlide: number;
    private slideInterval;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    startAutoplay(): void;
    stopAutoplay(): void;
    nextSlide(): void;
    prevSlide(): void;
    setSlide(index: number): void;
    render(): any;
}
