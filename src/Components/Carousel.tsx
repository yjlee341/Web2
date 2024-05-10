import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "../Hooks/useCarouselDot";

interface Props {
  className?: String;
  imgs: string[];
}
// TODO: 최대개수 제한?
export default function Carousel({ className, imgs = [] }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <>
      <div className={`embla overflow-hidden ${className}`} ref={emblaRef}>
        <div className="embla__container h-full">
          {imgs.map((img, i) => (
            <div className="embla__slide h-full" key={img + i}>
              <img
                src={img}
                alt="케러셀 이미지"
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </>
  );
}
