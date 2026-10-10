import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const ImageViewer = ({
    onClose,
    image
}) => {
    const closeButton = useRef(null);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === "Escape") onClose();
        };
        const previouslyFocused = document.activeElement;

        closeButton.current?.focus();
        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
            previouslyFocused?.focus?.();
        };
    }, [onClose]);

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            className="fixed inset-0 z-40 flex flex-col bg-panel/95 p-4 md:p-8 [&_:focus-visible]:outline-white"
            onClick={onClose}
        >
            <button
                ref={closeButton}
                type="button"
                onClick={onClose}
                aria-label="Close image"
                className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center self-end rounded-lg bg-white text-xl text-ink hover:bg-mist"
            >
                <FontAwesomeIcon icon={faClose}/>
            </button>
            <div className="flex min-h-0 flex-1 items-center justify-center">
                <img
                    src={image}
                    alt=""
                    className="max-h-full max-w-full rounded-lg object-contain"
                    onClick={(event) => event.stopPropagation()}
                />
            </div>
        </div>
     );
}

export default ImageViewer;
